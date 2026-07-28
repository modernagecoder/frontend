/**
 * TODAY
 *
 * The opening screen. It answers "what do I need to do right now" rather than
 * showing general statistics, because that is the actual job: ring the parents
 * whose demo is today, and chase the leads nobody has answered yet.
 *
 * The demo schedule is the hero of the page and the counts sit above it as
 * small marks. That ordering is deliberate - the list of people to call is
 * worth more than a number describing it.
 */

const TodayComponent = {

  data: null,

  render() {
    return `
      <div class="page-header">
        <div>
          <h1 class="page-title">Today</h1>
          <p class="page-subtitle" id="todayDate"></p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary btn-sm" id="todayRefresh">Refresh</button>
        </div>
      </div>

      <div id="todayBody">
        <div class="loading-spinner"><div class="spinner"></div><p>Loading</p></div>
      </div>
    `;
  },

  async init() {
    const dateEl = document.getElementById('todayDate');
    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString('en-GB', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
    }

    const refresh = document.getElementById('todayRefresh');
    if (refresh) refresh.addEventListener('click', () => this.load());

    await this.load();
  },

  async load() {
    const body = document.getElementById('todayBody');
    if (!body) return;

    try {
      this.data = await api.getToday();
      body.innerHTML = this.renderBody(this.data);
      this.updateNavCount(this.data);
    } catch (error) {
      body.innerHTML = `
        <div class="error-message">
          Could not load today's work: ${escapeHtml(error.message)}
          <button class="btn btn-secondary btn-sm" style="margin-top:10px" onclick="loadPage('today')">Try again</button>
        </div>
      `;
    }
  },

  /**
   * Mirrors the follow-up count onto the sidebar so it stays visible from any
   * screen, not only this one.
   */
  updateNavCount(data) {
    const el = document.getElementById('navCountToday');
    if (!el) return;

    const count = (data.needsFollowUp && data.needsFollowUp.total) || 0;
    if (count > 0) {
      el.textContent = count;
      el.classList.add('is-urgent');
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  },

  renderBody(data) {
    const newToday = data.newToday || {};
    const followUp = data.needsFollowUp || {};
    const demos = Array.isArray(data.demos) ? data.demos : [];

    const breakdown = [
      newToday.contacts ? `${newToday.contacts} enquiries` : '',
      newToday.callbacks ? `${newToday.callbacks} callbacks` : '',
      newToday.corporate ? `${newToday.corporate} corporate` : '',
      newToday.business ? `${newToday.business} business` : ''
    ].filter(Boolean).join(' &middot; ');

    return `
      <div class="ledger-marks">
        <div class="ledger-mark">
          <div class="ledger-mark-label">New today</div>
          <div class="ledger-mark-value">${newToday.total || 0}</div>
          <div class="ledger-mark-note">${breakdown || 'Nothing yet today'}</div>
        </div>

        <div class="ledger-mark">
          <div class="ledger-mark-label">Demos booked</div>
          <div class="ledger-mark-value">${demos.length}</div>
          <div class="ledger-mark-note">Today and tomorrow</div>
        </div>

        <div class="ledger-mark${followUp.total ? ' is-urgent' : ''}">
          <div class="ledger-mark-label">Waiting over 24h</div>
          <div class="ledger-mark-value">${followUp.total || 0}</div>
          <div class="ledger-mark-note">${followUp.total ? 'Nobody has replied to these' : 'All caught up'}</div>
        </div>
      </div>

      ${this.renderSchedule(demos)}
    `;
  },

  renderSchedule(demos) {
    if (!demos.length) {
      return `
        <div class="rail-section">
          <div class="rail-heading"><h2>Demo schedule</h2></div>
          <div class="time-rail">
            <div class="empty-cell">
              <div class="empty-state">
                <strong>No demos booked for today or tomorrow</strong>
                <span>Times picked on the booking form and the callback pop-up appear here automatically.</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    const today = demos.filter(d => !d.isTomorrow);
    const tomorrow = demos.filter(d => d.isTomorrow);

    let rows = '';
    if (today.length) {
      rows += '<div class="rail-daymark">Today</div>';
      rows += today.map(d => this.renderEntry(d)).join('');
    }
    if (tomorrow.length) {
      rows += '<div class="rail-daymark">Tomorrow</div>';
      rows += tomorrow.map(d => this.renderEntry(d)).join('');
    }

    return `
      <div class="rail-section">
        <div class="rail-heading">
          <h2>Demo schedule</h2>
          <span class="rail-note">Times as the parent chose them, in IST</span>
        </div>
        <div class="time-rail">${rows}</div>
      </div>
    `;
  },

  renderEntry(demo) {
    const slot = demo.slot || {};

    // Prefer the parsed time; fall back to the raw string when the picker's
    // wording could not be resolved to an exact moment.
    const time = slot.time || (slot.raw || '').split(',').pop().trim() || '--';
    const day = slot.day || '';

    const name = demo.name || 'Callback request';
    const source = demo.type === 'callback' ? 'Callback pop-up' : 'Booking form';

    const contactBits = [];
    if (demo.phone) {
      contactBits.push(`<span class="mono">${escapeHtml((demo.countryCode || '') + ' ' + demo.phone)}</span>`);
    }
    contactBits.push(escapeHtml(source));
    if (demo.status) contactBits.push(`<span class="badge status-${escapeHtml(demo.status)}">${escapeHtml(capitalizeFirst(demo.status))}</span>`);

    return `
      <div class="rail-entry">
        <div class="rail-time">
          ${escapeHtml(time)}
          <small>${escapeHtml(day)}</small>
        </div>
        <div class="rail-who">
          <div class="rail-name">${escapeHtml(name)}</div>
          <div class="rail-meta">${contactBits.join('')}</div>
        </div>
        <div class="rail-actions">
          ${renderContactActions(demo.countryCode, demo.phone, demo.email)}
        </div>
      </div>
    `;
  }
};

window.TodayComponent = TodayComponent;
