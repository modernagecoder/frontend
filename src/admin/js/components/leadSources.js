/**
 * LEAD SOURCES
 *
 * Which pages actually produce leads, across all four lead forms.
 *
 * Two different questions are answered side by side, because they usually have
 * different answers and confusing them leads to the wrong decision:
 *
 *   Landing page - the page that earned the visit. This is what SEO work pays
 *                  off, and it is often a blog or city page.
 *   Form page    - the page they finally submitted from, usually /book-demo.
 *
 * Crediting only the form page would make it look as though one page produces
 * every lead and the rest of the site does nothing.
 */

const LeadSourcesComponent = {

  days: 30,
  data: null,

  render() {
    return `
      <div class="page-header">
        <div>
          <h1 class="page-title">Lead sources</h1>
          <p class="page-subtitle">Where your enquiries actually come from</p>
        </div>
        <div class="page-actions">
          <div class="range-tabs" id="rangeTabs">
            <button class="range-tab" data-days="7">7 days</button>
            <button class="range-tab active" data-days="30">30 days</button>
            <button class="range-tab" data-days="90">90 days</button>
            <button class="range-tab" data-days="365">1 year</button>
          </div>
        </div>
      </div>

      <div id="sourcesBody">
        <div class="loading-spinner"><div class="spinner"></div><p>Loading</p></div>
      </div>
    `;
  },

  async init() {
    const tabs = document.getElementById('rangeTabs');
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.range-tab');
        if (!btn) return;

        tabs.querySelectorAll('.range-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');

        this.days = parseInt(btn.dataset.days, 10) || 30;
        this.load();
      });
    }

    await this.load();
  },

  async load() {
    const body = document.getElementById('sourcesBody');
    if (!body) return;

    body.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Loading</p></div>';

    try {
      this.data = await api.getLeadSources({ days: this.days, limit: 20 });
      body.innerHTML = this.renderBody(this.data);
    } catch (error) {
      body.innerHTML = `<div class="error-message">Could not load lead sources: ${escapeHtml(error.message)}</div>`;
    }
  },

  renderBody(data) {
    const totals = data.totals || {};

    return `
      ${this.renderCoverage(totals)}

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Leads in period</div>
          <div class="stat-value">${totals.leads || 0}</div>
          <div class="stat-trend">Across all four forms</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Source known</div>
          <div class="stat-value">${totals.withAttribution || 0}</div>
          <div class="stat-trend up">${this.percent(totals.withAttribution, totals.leads)}% of leads</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Source not recorded</div>
          <div class="stat-value">${totals.unknown || 0}</div>
          <div class="stat-trend">Captured before tracking, or blocked</div>
        </div>
      </div>

      <div class="sources-grid">
        ${this.renderTable('Pages that earned the visit', 'The first page each visitor landed on', data.byLandingPage, data.byLandingPageTruncated)}
        ${this.renderTable('Pages they submitted from', 'Where the form was actually filled in', data.byFormPage, data.byFormPageTruncated)}
        ${this.renderTable('How they arrived', 'Search, social, direct or a referring site', data.byChannel, 0)}
        ${this.renderTable('Referring sites', 'The site that linked them to you', data.byReferrer, 0)}
      </div>

      ${this.renderByType(data.byLeadType)}
    `;
  },

  /**
   * States the gap in the data outright. Attribution only started being
   * recorded in July 2026, so an owner looking at a year-long window will see
   * mostly unknowns and deserves to be told why rather than concluding the
   * feature is broken.
   */
  renderCoverage(totals) {
    if (!totals.unknown) return '';

    const share = this.percent(totals.unknown, totals.leads);
    return `
      <div class="coverage-note">
        <span>
          <strong>${totals.unknown} of ${totals.leads} leads (${share}%) have no recorded source.</strong>
          Source tracking started in July 2026, so anything captured before then cannot be traced.
          The figure falls on its own as new leads come in.
        </span>
      </div>
    `;
  },

  renderTable(title, subtitle, rows, truncated) {
    if (!Array.isArray(rows) || !rows.length) {
      return `
        <div class="table-container">
          <div class="table-header"><div><h2 class="table-title">${escapeHtml(title)}</h2></div></div>
          <div class="empty-cell">
            <div class="empty-state">
              <strong>Nothing recorded yet</strong>
              <span>New leads will appear here once they arrive.</span>
            </div>
          </div>
        </div>
      `;
    }

    const max = Math.max.apply(null, rows.map(r => r.leads || 0)) || 1;

    const body = rows.map(row => {
      const width = Math.round(((row.leads || 0) / max) * 100);
      const label = row.key === '(unknown)' ? 'Not recorded' : row.key;

      return `
        <div class="bar-row">
          <div class="bar-label">
            <div class="bar-name" title="${escapeHtml(label)}">${escapeHtml(label)}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
          </div>
          <div class="bar-value">
            ${row.leads || 0}
            <small>${row.converted || 0} won</small>
          </div>
        </div>
      `;
    }).join('');

    // Say what was left out rather than quietly implying this is everything.
    const more = truncated
      ? `<div class="pagination"><span class="pagination-info">${truncated} more not shown</span></div>`
      : '';

    return `
      <div class="table-container">
        <div class="table-header">
          <div>
            <h2 class="table-title">${escapeHtml(title)}</h2>
            <p class="page-subtitle" style="font-size:12.5px">${escapeHtml(subtitle)}</p>
          </div>
        </div>
        ${body}
        ${more}
      </div>
    `;
  },

  renderByType(byType) {
    if (!Array.isArray(byType) || !byType.length) return '';

    const rows = byType.map(t => `
      <tr>
        <td data-label="Form">${escapeHtml(t.label)}</td>
        <td data-label="Leads" class="mono">${t.leads || 0}</td>
        <td data-label="Won" class="mono">${t.converted || 0}</td>
        <td data-label="Rate" class="mono">${this.percent(t.converted, t.leads)}%</td>
      </tr>
    `).join('');

    return `
      <div class="table-container">
        <div class="table-header"><div><h2 class="table-title">By form</h2></div></div>
        <div class="data-table-container">
          <table class="data-table">
            <thead><tr><th>Form</th><th>Leads</th><th>Won</th><th>Rate</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  },

  percent(part, whole) {
    if (!whole) return 0;
    return Math.round((part / whole) * 1000) / 10;
  }
};

window.LeadSourcesComponent = LeadSourcesComponent;
