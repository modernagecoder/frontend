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
          <button class="btn btn-secondary btn-sm" id="todaySetupWhatsApp"
                  title="Create the WhatsApp template so alerts keep working past the 24-hour window">Set up WhatsApp template</button>
          <button class="btn btn-secondary btn-sm" id="todayTestWhatsApp"
                  title="Send yourself one sample alert to check WhatsApp is working">Test WhatsApp</button>
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

    const test = document.getElementById('todayTestWhatsApp');
    if (test) test.addEventListener('click', () => this.testWhatsApp());

    const setup = document.getElementById('todaySetupWhatsApp');
    if (setup) setup.addEventListener('click', () => this.setupWhatsAppTemplate());

    await this.load();
  },

  /**
   * CREATE THE WHATSAPP TEMPLATE
   *
   * Plain-text alerts only reach you within 24 hours of you last messaging the
   * business number, so without a template the alerts go quiet after a day.
   * This asks the server to create one and submit it to Meta, using the access
   * token it already holds — nothing sensitive passes through this browser.
   *
   * Once approved, alerts switch to it on their own. There is nothing further
   * to configure, because the template name is defaulted rather than read from
   * a setting someone would have to remember to add.
   */
  async setupWhatsAppTemplate(wabaId) {
    const button = document.getElementById('todaySetupWhatsApp');
    if (button) { button.disabled = true; button.textContent = 'Creating…'; }

    let result;
    try {
      result = await api.createWhatsAppTemplate(wabaId);
    } catch (error) {
      result = error.data || { success: false, message: error.message };
    } finally {
      if (button) { button.disabled = false; button.textContent = 'Set up WhatsApp template'; }
    }

    // The server could not work out which WhatsApp Business Account to create
    // the template on. Ask for it once — it is an account identifier sitting in
    // the address bar of WhatsApp Manager, not a secret.
    if (result.needsWabaId) {
      const entered = prompt(
        'Which WhatsApp Business Account?\n\n'
        + 'Open business.facebook.com → WhatsApp Manager → Phone numbers.\n'
        + 'Copy the number in the address bar after "asset_id=" and paste it here.'
      );
      if (entered && entered.trim()) return this.setupWhatsAppTemplate(entered.trim());
      return;
    }

    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">${result.success ? '✅ Template created' : '❌ Could not create the template'}</h2>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <p>${escapeHtml(result.message || result.error || '')}</p>

        ${result.success ? `
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Name</div>
              <div class="detail-value"><code>${escapeHtml(result.name || '')}</code></div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Status</div>
              <div class="detail-value">${escapeHtml(result.status || (result.alreadyExisted ? 'Already existed' : 'Submitted'))}</div>
            </div>
          </div>` : ''}

        ${result.hint ? `<div class="detail-warning">${escapeHtml(result.hint)}</div>` : ''}

        ${result.body ? `
          <div class="detail-section">
            <h3>The template</h3>
            <pre class="wa-preview">${escapeHtml(result.body)}</pre>
            <div class="form-hint" style="margin-top:8px">
              ${result.success
                ? 'Nothing else to do. While Meta reviews it, alerts keep arriving as plain text; they move over to the template automatically once it is approved.'
                : 'If you would rather create it by hand, paste exactly this body into WhatsApp Manager → Message templates, category Utility, named new_lead_alert.'}
            </div>
          </div>` : ''}
      </div>
    `);
  },

  /**
   * WHATSAPP SELF-TEST
   *
   * WhatsApp fails silently by nature — a bad token, a template still awaiting
   * Meta's approval and a number trying to message itself all look identical
   * from here: nothing arrives. This asks the server to send one sample alert
   * and shows Meta's own words back, which is the only way to tell those apart.
   */
  async testWhatsApp() {
    const button = document.getElementById('todayTestWhatsApp');
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }

    let result;
    try {
      result = await api.testWhatsApp();
    } catch (error) {
      // The endpoint answers 502 when Meta refuses, and that response body
      // holds the actual reason. api.js attaches it to the error, so prefer it
      // over the bare message.
      result = error.data || { success: false, message: error.message };
    } finally {
      if (button) { button.disabled = false; button.textContent = 'Test WhatsApp'; }
    }

    const problems = (result.results || [])
      .filter(r => !r.success)
      .map(r => `<li><b>${escapeHtml(r.to || '')}</b> — ${escapeHtml(r.error || 'unknown error')}</li>`)
      .join('');

    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">${result.success ? '✅ WhatsApp is working' : '❌ WhatsApp did not send'}</h2>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <p>${escapeHtml(result.message || '')}</p>

        ${result.missing && result.missing.length ? `
          <div class="detail-warning">
            Still missing in Vercel: <b>${escapeHtml(result.missing.join(', '))}</b>.
            Add them, redeploy, then try again.
          </div>` : ''}

        ${problems ? `
          <div class="detail-section">
            <h3>What Meta said</h3>
            <ul class="wa-errors">${problems}</ul>
          </div>` : ''}

        ${result.preview ? `
          <div class="detail-section">
            <h3>${result.success ? 'What was sent' : 'What would be sent'}</h3>
            <pre class="wa-preview">${escapeHtml(result.preview)}</pre>
            <div class="form-hint" style="margin-top:8px">
              ${result.usingTemplate
                ? 'Sent through your approved template.'
                : 'Sent as plain text. That only works within 24 hours of you messaging your own WhatsApp API number. Set WHATSAPP_TEMPLATE_NAME once Meta approves your template and it will work at any hour.'}
            </div>
          </div>` : ''}
      </div>
    `);
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
      // phoneDisplay is the server-normalised number, so this shows the same
      // digits the Call button dials. Gluing countryCode onto the raw stored
      // number here was producing "+91 91..." style doubled codes.
      contactBits.push(`<span class="mono">${escapeHtml(demo.phoneDisplay || ((demo.countryCode || '') + ' ' + demo.phone))}</span>`);
    }
    contactBits.push(escapeHtml(source));
    if (demo.status) contactBits.push(`<span class="badge status-${escapeHtml(demo.status)}">${escapeHtml(capitalizeFirst(demo.status))}</span>`);
    if (demo.phoneWarning) {
      contactBits.push(`<span class="phone-flag" title="${escapeHtml(demo.phoneWarning)}">⚠ check number</span>`);
    }

    return `
      <div class="rail-entry">
        <div class="rail-time">
          ${escapeHtml(time)}
          <small>${escapeHtml(day)}</small>
        </div>
        <div class="rail-who">
          <div class="rail-name">${escapeHtml(name)}</div>
          <div class="rail-meta">${contactBits.join('<span class="rail-sep">&middot;</span>')}</div>
        </div>
        <div class="rail-actions">
          ${renderContactActions(demo.countryCode, demo.phone, demo.email, demo.phoneE164)}
        </div>
      </div>
    `;
  }
};

window.TodayComponent = TodayComponent;
