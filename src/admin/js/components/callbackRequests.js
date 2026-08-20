/**
 * CALLBACK REQUESTS
 *
 * The busiest screen in the panel. Every row has to answer, without being
 * clicked: who asked us to ring them, on what number, when they asked, from
 * which page, whether they named a demo time, and what we have done about it.
 *
 * WHAT CHANGED AND WHY
 * The previous version showed a phone number through a formatter written for
 * ten-digit numbers only:
 *
 *     phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
 *
 * For an Indian number beginning 91 that rendered "912-336-6161" directly
 * beside a "+91" badge, which reads as a doubled country code; for a number
 * longer than ten digits it grouped the first ten and left the rest dangling.
 * The number is now rendered by the server, already normalised, and the
 * grouping follows the country.
 *
 * Times were printed in whatever timezone the browser was in while the
 * notification emails said IST, so one event had two different times. Every
 * time on this screen is now IST, labelled, with "how long ago" beside it.
 *
 * And a callback used to be a single overwritable note. It is really a
 * sequence of attempts over several days, so the record is now an activity
 * trail: every status change and note, with who did it and when.
 */

const CallbackRequestsComponent = {

  currentPage: 1,
  filters: { status: 'all', country: 'all', search: '', from: '', to: '' },
  lastLoaded: [],

  render() {
    return `
      <div class="page-header">
        <div>
          <h1 class="page-title">Callbacks</h1>
          <p class="page-subtitle">People who asked to be rung back — the number, the page they asked from, and what we have done since</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary btn-sm" onclick="CallbackRequestsComponent.exportCsv()">Export CSV</button>
          <button class="btn btn-secondary btn-sm" onclick="CallbackRequestsComponent.loadRequests()">Refresh</button>
        </div>
      </div>

      <div class="ledger-marks" id="callbackStats">
        <div class="ledger-mark">
          <div class="ledger-mark-label">Waiting for a call</div>
          <div class="ledger-mark-value" id="cbPending">–</div>
          <div class="ledger-mark-note">Ring these first</div>
        </div>
        <div class="ledger-mark" id="cbOverdueMark">
          <div class="ledger-mark-label">Waiting over 24h</div>
          <div class="ledger-mark-value" id="cbOverdue">–</div>
          <div class="ledger-mark-note">Nobody has rung these yet</div>
        </div>
        <div class="ledger-mark">
          <div class="ledger-mark-label">Shown here</div>
          <div class="ledger-mark-value" id="cbShown">–</div>
          <div class="ledger-mark-note" id="cbShownNote">All callbacks</div>
        </div>
      </div>

      <div class="table-container">
        <div class="filters-bar">
          <div class="filter-group">
            <label for="cbSearch">Search number</label>
            <input type="search" id="cbSearch" class="filter-select" placeholder="e.g. 9123 or 501234"
                   value="${escapeHtml(this.filters.search)}" style="min-width:170px">
          </div>
          <div class="filter-group">
            <label for="cbStatus">Status</label>
            <select id="cbStatus" class="filter-select">
              <option value="all">All</option>
              <option value="pending">Waiting for a call</option>
              <option value="called">Called</option>
              <option value="no-answer">No answer</option>
              <option value="completed">Done</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="cbCountry">Country</label>
            <select id="cbCountry" class="filter-select">
              <option value="all">🌍 Everywhere</option>
              <option value="IN">🇮🇳 India only</option>
              <option value="foreign">✈️ Outside India</option>
              <option value="unknown">❓ Not recorded</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="cbFrom">Asked from</label>
            <input type="date" id="cbFrom" class="filter-select">
          </div>
          <div class="filter-group">
            <label for="cbTo">Asked until</label>
            <input type="date" id="cbTo" class="filter-select">
          </div>
          <button class="btn btn-secondary btn-sm" onclick="CallbackRequestsComponent.clearFilters()">Clear</button>
        </div>

        <div class="data-table-container">
          <table class="data-table" id="callbackTable">
            <thead>
              <tr>
                <th>Number to ring</th>
                <th>When they asked</th>
                <th>What they want</th>
                <th>Where from</th>
                <th>Status</th>
                <th>What we did</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="callbackTableBody">
              <tr><td colspan="7" class="loading-cell">Loading</td></tr>
            </tbody>
          </table>
        </div>

        <div class="pagination" id="callbackPagination"></div>
      </div>
    `;
  },

  init() {
    this.currentPage = 1;

    const on = (id, event, handler) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(event, handler);
    };

    on('cbStatus', 'change', e => this.applyFilter('status', e.target.value));
    on('cbCountry', 'change', e => this.applyFilter('country', e.target.value));
    on('cbFrom', 'change', e => this.applyFilter('from', e.target.value));
    on('cbTo', 'change', e => this.applyFilter('to', e.target.value));

    // Debounced so a search does not fire a request per keystroke.
    let timer = null;
    on('cbSearch', 'input', e => {
      clearTimeout(timer);
      const value = e.target.value;
      timer = setTimeout(() => this.applyFilter('search', value), 400);
    });

    this.loadRequests();
  },

  applyFilter(key, value) {
    this.filters[key] = value;
    this.currentPage = 1;
    this.loadRequests();
  },

  clearFilters() {
    this.filters = { status: 'all', country: 'all', search: '', from: '', to: '' };
    this.currentPage = 1;
    ['cbStatus', 'cbCountry'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = 'all';
    });
    ['cbSearch', 'cbFrom', 'cbTo'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    this.loadRequests();
  },

  async loadRequests() {
    const tbody = document.getElementById('callbackTableBody');
    if (!tbody) return;

    tbody.innerHTML = '<tr><td colspan="7" class="loading-cell">Loading</td></tr>';

    try {
      const data = await api.getCallbackRequests(Object.assign(
        { page: this.currentPage, limit: 20 },
        this.filters
      ));

      this.lastLoaded = data.requests || [];
      this.renderTable(this.lastLoaded);
      this.renderPagination(data.pagination);

      const set = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };
      set('cbPending', data.pendingCount || 0);
      set('cbOverdue', data.waitingOver24h || 0);
      set('cbShown', (data.pagination && data.pagination.total) || 0);

      const overdueMark = document.getElementById('cbOverdueMark');
      if (overdueMark) overdueMark.classList.toggle('is-urgent', (data.waitingOver24h || 0) > 0);

      const note = document.getElementById('cbShownNote');
      if (note) note.textContent = this.filterSummary();

    } catch (error) {
      console.error('Error loading callback requests:', error);
      tbody.innerHTML = `<tr><td colspan="7" class="error-cell">
        Could not load callbacks: ${escapeHtml(error.message || 'unknown error')}
      </td></tr>`;
    }
  },

  /** Plain-English description of what the list is currently filtered to. */
  filterSummary() {
    const f = this.filters;
    const parts = [];
    if (f.status !== 'all') parts.push(this.statusLabel(f.status).replace(/^\S+\s/, ''));
    if (f.country === 'IN') parts.push('India');
    if (f.country === 'foreign') parts.push('outside India');
    if (f.country === 'unknown') parts.push('country not recorded');
    if (f.search) parts.push(`matching "${f.search}"`);
    if (f.from || f.to) parts.push(`${f.from || 'the start'} to ${f.to || 'today'}`);
    return parts.length ? 'Filtered: ' + parts.join(' · ') : 'All callbacks';
  },

  renderTable(requests) {
    const tbody = document.getElementById('callbackTableBody');
    if (!tbody) return;

    if (!requests || !requests.length) {
      tbody.innerHTML = `<tr><td colspan="7" class="empty-cell">
        <div class="empty-state">
          <strong>Nothing here</strong>
          <span>${this.filters.status === 'all' && !this.filters.search
            ? 'Requests from the call-back pop-up appear here the moment someone submits one.'
            : 'No callback matches these filters. Try Clear.'}</span>
        </div>
      </td></tr>`;
      return;
    }

    // Flag rows that look like the same person submitting twice. The server
    // now refuses a repeat within two minutes, but records captured before
    // that landed are still in the list in pairs seconds apart, and a list
    // that appears to show two parents where there was one is exactly the
    // confusion this screen is meant to remove. Marked, never auto-deleted -
    // deciding a lead is a duplicate is a human's call.
    const seen = new Map();
    requests.forEach(req => {
      const key = String(req.phone || '');
      const at = new Date(req.requestedAt).getTime();
      const prior = seen.get(key);
      if (prior !== undefined && Math.abs(at - prior) < 5 * 60 * 1000) {
        req.__looksDuplicate = true;
      } else {
        seen.set(key, at);
      }
    });

    tbody.innerHTML = requests.map(req => this.renderRow(req)).join('');
  },

  renderRow(req) {
    // Anything a parent typed, and anything taken from their own URL, is
    // escaped before it reaches innerHTML — see escapeHtml in formatting.js.
    const slot = req.demoSlot && req.demoSlot.raw;

    // A callback has no message field: the pop-up asks for a number and
    // nothing else. So "what they want" is answered by the demo time they
    // picked, or by the page they were reading, and it says which it is
    // rather than leaving a column that looks broken.
    let wants;
    if (slot) {
      wants = `<span class="wants-slot">${renderSlot(req.demoSlot, true)}</span>
               <span class="wants-note">Demo time they picked</span>`;
    } else if (req.attribution && (req.attribution.formPage || req.attribution.landingPage)) {
      const page = req.attribution.formPage || req.attribution.landingPage;
      wants = `<span class="wants-topic">${escapeHtml(this.topicFromPage(page))}</span>
               <span class="wants-note">Guessed from the page they were on</span>`;
    } else {
      wants = '<span class="wants-note">Not recorded — ask when you ring</span>';
    }

    const lastAction = this.lastActionSummary(req);

    return `
      <tr data-id="${escapeHtml(req._id)}" class="${req.status === 'pending' ? 'row-pending' : ''}">
        <td data-label="Number to ring">
          <div class="phone-cell">
            ${renderPhone(req, 'phone', { noFlag: true })}
            ${renderContactActions(req.countryCode, req.phone, null, req.phoneE164)}
          </div>
          <div class="phone-sub">
            ${renderCountry(req)}
            ${renderPhoneFlag(req)}
            ${req.__looksDuplicate
              ? '<span class="dup-flag" title="The same number was submitted again within a few minutes. Almost certainly one person, not two.">same number, moments apart</span>'
              : ''}
          </div>
        </td>

        <td data-label="When they asked">
          ${formatWhen(req.requestedAt, { urgentAfterHours: req.status === 'pending' ? 24 : 0 })}
        </td>

        <td data-label="What they want" class="wants-cell">${wants}</td>

        <td data-label="Where from">${renderSource(req.attribution)}</td>

        <td data-label="Status">
          <span class="status-badge status-${escapeHtml(req.status)}">${this.statusLabel(req.status)}</span>
        </td>

        <td data-label="What we did" class="did-cell">${lastAction}</td>

        <td data-label="Actions" class="actions-cell">
          <div class="action-buttons">
            <button class="btn btn-secondary btn-sm"
                    onclick="CallbackRequestsComponent.openDetail('${escapeHtml(req._id)}')">Open</button>
            <select class="status-select"
                    onchange="CallbackRequestsComponent.updateStatus('${escapeHtml(req._id)}', this.value)">
              <option value="pending"   ${req.status === 'pending'   ? 'selected' : ''}>Waiting</option>
              <option value="called"    ${req.status === 'called'    ? 'selected' : ''}>Called</option>
              <option value="no-answer" ${req.status === 'no-answer' ? 'selected' : ''}>No answer</option>
              <option value="completed" ${req.status === 'completed' ? 'selected' : ''}>Done</option>
            </select>
            ${can('deleteLeads')
              ? `<button class="btn-icon btn-danger" title="Delete" aria-label="Delete"
                         onclick="CallbackRequestsComponent.deleteRequest('${escapeHtml(req._id)}')">&times;</button>`
              : ''}
          </div>
        </td>
      </tr>
    `;
  },

  /**
   * A readable subject from a page path. "/coding-classes-in-oman" becomes
   * "Coding classes in oman" — enough to know what the parent was looking at
   * when they asked us to ring.
   */
  topicFromPage(path) {
    const clean = String(path || '')
      .split('?')[0]
      .replace(/^\/+|\/+$/g, '')
      .split('/')
      .pop() || 'Home page';
    const words = clean.replace(/[-_]+/g, ' ').trim();
    if (!words) return 'Home page';
    return words.charAt(0).toUpperCase() + words.slice(1);
  },

  /**
   * The most recent thing anyone did to this lead, so the row answers "who
   * called and when" without being opened.
   */
  lastActionSummary(req) {
    const trail = Array.isArray(req.activity) ? req.activity : [];
    const last = trail.length ? trail[trail.length - 1] : null;

    if (last) {
      const who = last.by ? escapeHtml(last.by) : 'someone';
      const when = formatRelative(last.at);
      const what = last.kind === 'note'
        ? `“${escapeHtml(truncateText(last.text || '', 42))}”`
        : `marked <b>${escapeHtml(last.to || '')}</b>`;
      return `<span class="did-what">${what}</span>
              <span class="did-who">${who} · ${escapeHtml(when)}</span>`;
    }

    // Records that pre-date the activity trail still have calledAt, so use it
    // rather than claiming nothing happened.
    if (req.calledAt) {
      return `<span class="did-what">Called</span>
              <span class="did-who">${escapeHtml(req.calledBy || 'unknown')} · ${escapeHtml(formatRelative(req.calledAt))}</span>`;
    }
    if (req.notes) {
      return `<span class="did-what">“${escapeHtml(truncateText(req.notes, 42))}”</span>
              <span class="did-who">note, author not recorded</span>`;
    }
    return '<span class="did-none">Nothing yet</span>';
  },

  statusLabel(status) {
    return ({
      'pending': '🔔 Waiting',
      'called': '📞 Called',
      'no-answer': '❌ No answer',
      'completed': '✅ Done'
    })[status] || escapeHtml(status || '');
  },

  // ── Detail view ─────────────────────────────────────────────────────────

  /**
   * THE WHOLE STORY OF ONE REQUEST
   *
   * Mirrors the enquiry detail view so both screens read the same way. The
   * ordering follows what someone about to make the call needs, in order: the
   * number, when it came in, what they asked for, where they came from, and
   * then the history of what we have already tried.
   */
  async openDetail(id) {
    try {
      const data = await api.getCallbackRequest(id);
      const req = data.request;
      const attr = req.attribution || {};

      showModal(`
        <div class="modal-header">
          <h2 class="modal-title">${escapeHtml(req.phoneDisplay || req.phone || 'Callback request')}</h2>
          <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
        </div>
        <div class="modal-body">

          <div class="detail-section">
            <h3>Ring them</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <div class="detail-label">Number</div>
                <div class="detail-value">
                  <div class="phone-cell">
                    ${renderPhone(req, 'phone')}
                    ${renderContactActions(req.countryCode, req.phone, null, req.phoneE164)}
                  </div>
                  ${req.phoneWarning
                    ? `<div class="detail-warning">⚠ ${escapeHtml(req.phoneWarning)}</div>` : ''}
                  ${req.phoneRepaired && req.phoneRepaired.length
                    ? `<div class="form-hint" style="margin-top:6px">Tidied automatically: ${escapeHtml(req.phoneRepaired.join('; '))}.
                       Entered as <code>${escapeHtml(req.phone)}</code>.</div>` : ''}
                </div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Country</div>
                <div class="detail-value">${renderCountry(req)}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Status</div>
                <div class="detail-value">
                  <span class="status-badge status-${escapeHtml(req.status)}">${this.statusLabel(req.status)}</span>
                </div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Asked at</div>
                <div class="detail-value">${formatWhen(req.requestedAt)}</div>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h3>What they asked for</h3>
            <div class="detail-value">
              ${req.demoSlot && req.demoSlot.raw
                ? renderSlot(req.demoSlot) +
                  (req.demoSlot.localTime
                    ? `<div class="form-hint" style="margin-top:6px">Their local time: ${escapeHtml(req.demoSlot.localTime)}</div>`
                    : '')
                : `<span class="slot-empty">They did not pick a demo time — the call-back pop-up only asks for a
                   phone number, so there is nothing else they could tell us. Arrange a time on the call.</span>`}
            </div>
          </div>

          <div class="detail-section">
            <h3>Where they came from</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <div class="detail-label">First page they saw</div>
                <div class="detail-value">${attr.landingPage
                  ? `<span class="source-page">${escapeHtml(attr.landingPage)}</span>`
                  : '<span class="source-unknown">Not recorded</span>'}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Asked from</div>
                <div class="detail-value">${attr.formPage
                  ? `<span class="source-page">${escapeHtml(attr.formPage)}</span>`
                  : '<span class="source-unknown">Not recorded</span>'}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Arrived via</div>
                <div class="detail-value">${escapeHtml(CHANNEL_LABELS[attr.channel] || 'Not recorded')}${
                  attr.referrerHost ? ' &middot; ' + escapeHtml(attr.referrerHost) : ''}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">First seen</div>
                <div class="detail-value">${attr.firstSeenAt ? formatWhen(attr.firstSeenAt) : '&mdash;'}</div>
              </div>
            </div>
            ${attr.journey && attr.journey.length > 1 ? `
              <div style="margin-top:14px">
                <div class="detail-label">Pages they read before asking</div>
                ${renderJourney(attr.journey)}
              </div>` : ''}
            ${!attr.formPage && !attr.landingPage ? `
              <div class="form-hint" style="margin-top:10px">
                Source tracking started in July 2026. Requests from before then have none, which is why
                this says "Not recorded" rather than showing a page that would be a guess.
              </div>` : ''}
          </div>

          <div class="detail-section">
            <h3>What we have done</h3>
            ${this.renderActivity(req)}
            <div class="detail-note-box">
              <label class="detail-label" for="cbNoteInput">Add to this record</label>
              <textarea id="cbNoteInput" class="form-input" rows="2"
                        placeholder="e.g. Rang at 6pm, no answer — trying again tomorrow morning"></textarea>
              <button class="btn btn-primary btn-sm" style="margin-top:8px"
                      onclick="CallbackRequestsComponent.addNoteFromDetail('${escapeHtml(req._id)}')">Save note</button>
            </div>
          </div>

          ${req.ipAddress || req.userAgent ? `
            <div class="detail-section">
              <h3>Technical</h3>
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-label">IP address</div>
                  <div class="detail-value"><code>${escapeHtml(req.ipAddress || '—')}</code></div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">Device</div>
                  <div class="detail-value" style="font-size:12px">${escapeHtml(truncateText(req.userAgent || '—', 90))}</div>
                </div>
              </div>
            </div>` : ''}

        </div>
      `);
    } catch (error) {
      showToast('Could not open this callback: ' + (error.message || 'unknown error'), 'error');
    }
  },

  /**
   * The activity trail, newest last so it reads like a story.
   */
  renderActivity(req) {
    const trail = Array.isArray(req.activity) ? req.activity.slice() : [];

    // The request itself is the first event. Showing it means the trail always
    // starts somewhere rather than opening on an empty box.
    const rows = [{
      at: req.requestedAt,
      kind: 'created',
      by: 'Website',
      text: 'Asked for a callback from the pop-up'
    }].concat(trail);

    // Records created before the trail existed still know when they were
    // called, even if not by whom. Say the honest thing.
    if (!trail.length && req.calledAt) {
      rows.push({
        at: req.calledAt,
        kind: 'status',
        by: req.calledBy || 'not recorded',
        to: req.status
      });
    }
    if (!trail.length && req.notes) {
      rows.push({ at: null, kind: 'note', by: 'not recorded', text: req.notes });
    }

    return '<div class="activity-trail">' + rows.map(row => {
      const what = row.kind === 'note'
        ? escapeHtml(row.text || '')
        : row.kind === 'created'
          ? escapeHtml(row.text)
          : `Marked <b>${escapeHtml(row.to || '')}</b>${row.from ? ` (was ${escapeHtml(row.from)})` : ''}`;

      return `
        <div class="activity-row activity-${escapeHtml(row.kind)}">
          <div class="activity-when">${row.at ? formatWhen(row.at) : '<span class="when-empty">time not recorded</span>'}</div>
          <div class="activity-what">
            <div>${what}</div>
            <div class="activity-who">${escapeHtml(row.by || 'unknown')}</div>
          </div>
        </div>
      `;
    }).join('') + '</div>';
  },

  async addNoteFromDetail(id) {
    const box = document.getElementById('cbNoteInput');
    if (!box) return;
    const note = box.value.trim();
    if (!note) {
      showToast('Write something first', 'error');
      return;
    }
    await this.save(id, { notes: note }, 'Note saved');
    closeModal();
    this.openDetail(id);
  },

  // ── Mutations ───────────────────────────────────────────────────────────

  async save(id, body, successMessage) {
    try {
      const data = await api.updateCallbackRequest(id, body);
      if (data.success) {
        showToast(successMessage, 'success');
        await this.loadRequests();
        return true;
      }
      showToast(data.message || 'Could not save', 'error');
    } catch (error) {
      showToast('Could not save: ' + (error.message || 'unknown error'), 'error');
    }
    return false;
  },

  updateStatus(id, status) {
    return this.save(id, { status }, 'Status updated');
  },

  async deleteRequest(id) {
    if (!confirm('Delete this callback request? This cannot be undone.')) return;
    try {
      const data = await api.deleteCallbackRequest(id);
      if (data.success) {
        showToast('Request deleted', 'success');
        this.loadRequests();
      } else {
        showToast('Could not delete', 'error');
      }
    } catch (error) {
      showToast('Could not delete: ' + (error.message || 'unknown error'), 'error');
    }
  },

  // ── Export ──────────────────────────────────────────────────────────────

  /**
   * Exports everything the current filters match, not just the page on screen.
   *
   * The first version exported `lastLoaded`, which is one page of twenty. A
   * button labelled "Export CSV" that quietly hands back the first twenty of
   * fifty-two records is the same kind of untrustworthy artefact as a mangled
   * phone number, so it walks the pages instead.
   *
   * Numbers go out in international form so the file can be dialled or
   * imported straight into a phone's contacts — a local number with no
   * country code is useless in a spreadsheet.
   */
  async exportCsv() {
    let rows = [];

    try {
      showToast('Collecting records…', 'info');

      let page = 1;
      let pages = 1;
      // Hard stop as a runaway guard; at 200 a page this is 20,000 records,
      // far beyond anything this business will have.
      while (page <= pages && page <= 100) {
        const data = await api.getCallbackRequests(Object.assign(
          { page, limit: 200 }, this.filters
        ));
        rows = rows.concat(data.requests || []);
        pages = (data.pagination && data.pagination.pages) || 1;
        page++;
      }
    } catch (error) {
      showToast('Could not build the export: ' + (error.message || 'unknown error'), 'error');
      return;
    }

    if (!rows.length) {
      showToast('Nothing to export', 'error');
      return;
    }

    const header = [
      'Number', 'Country', 'Asked at (IST)', 'Demo time asked for',
      'Landing page', 'Asked from page', 'Channel', 'Status',
      'First called at (IST)', 'Called by', 'Notes', 'Number warning'
    ];

    const istPlain = d => d
      ? new Date(d).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false })
      : '';

    // A leading =, +, - or @ makes a spreadsheet treat the cell as a formula,
    // and every phone number here starts with +. Prefixing an apostrophe keeps
    // Excel showing the number instead of trying to evaluate it.
    const cell = value => {
      const text = String(value === null || value === undefined ? '' : value);
      const safe = /^[=+\-@]/.test(text) ? "'" + text : text;
      return '"' + safe.replace(/"/g, '""') + '"';
    };

    const body = rows.map(r => [
      r.phoneE164 || r.phone,
      r.countryName || r.countryIso || 'Not recorded',
      istPlain(r.requestedAt),
      (r.demoSlot && r.demoSlot.raw) || '',
      (r.attribution && r.attribution.landingPage) || '',
      (r.attribution && r.attribution.formPage) || '',
      (r.attribution && (CHANNEL_LABELS[r.attribution.channel] || r.attribution.channel)) || '',
      r.status,
      istPlain(r.calledAt),
      r.calledBy || '',
      (r.notes || '').replace(/\n/g, ' | '),
      r.phoneWarning || ''
    ].map(cell).join(','));

    // The BOM makes Excel read the file as UTF-8, without which country names
    // with accents arrive mangled.
    const csv = '﻿' + [header.map(cell).join(','), ...body].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'callbacks-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Exported ${rows.length} callbacks`, 'success');
  },

  // ── Pagination ──────────────────────────────────────────────────────────

  renderPagination(pagination) {
    const container = document.getElementById('callbackPagination');
    if (!container || !pagination) return;

    if (pagination.pages <= 1) {
      container.innerHTML = '';
      return;
    }

    const first = (pagination.page - 1) * pagination.limit + 1;
    const last = Math.min(pagination.page * pagination.limit, pagination.total);

    container.innerHTML = `
      <div class="pagination-info">Showing ${first}–${last} of ${pagination.total}</div>
      <div class="pagination-controls">
        <button class="pagination-btn" ${pagination.page === 1 ? 'disabled' : ''}
                onclick="CallbackRequestsComponent.goToPage(${pagination.page - 1})">Previous</button>
        <button class="pagination-btn active">${pagination.page}</button>
        <button class="pagination-btn" ${pagination.page >= pagination.pages ? 'disabled' : ''}
                onclick="CallbackRequestsComponent.goToPage(${pagination.page + 1})">Next</button>
      </div>
    `;
  },

  goToPage(page) {
    this.currentPage = page;
    this.loadRequests();
  }
};

window.CallbackRequestsComponent = CallbackRequestsComponent;
