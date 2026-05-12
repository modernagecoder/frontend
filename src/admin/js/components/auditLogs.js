/**
 * AUDIT LOGS COMPONENT
 */

let auditLogsFilters = {
  page: 1,
  limit: 50
};

function describeAuditDetails(log) {
  const d = log && log.details ? log.details : null;
  if (!d) return '—';
  const bits = [];
  if (d.count) bits.push(`Count: ${d.count}`);
  if (d.reason) bits.push(`Reason: ${escapeHtml(d.reason)}`);
  if (d.after && d.after.status) bits.push(`→ ${escapeHtml(d.after.status)}`);
  if (log.resourceId) bits.push(`<code style="opacity:.6">${String(log.resourceId).slice(-6)}</code>`);
  return bits.length ? bits.join(' · ') : '—';
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function loadAuditLogs() {
  const mainContent = document.getElementById('mainContent');

  try {
    const data = await api.getAuditLogs(auditLogsFilters);
    const logs = Array.isArray(data && data.logs) ? data.logs : [];
    const pagination = (data && data.pagination) || { total: 0, page: 1, pages: 0, limit: auditLogsFilters.limit };

    const hasLogs = logs.length > 0;

    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Audit Logs</h1>
        <p class="page-subtitle">Track every administrative action</p>
      </div>

      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">Activity Log (${pagination.total})</h2>
        </div>

        ${hasLogs ? `
          <table class="data-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Admin</th>
                <th>Action</th>
                <th>Resource</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              ${logs.map(log => {
                const adminLabel = (log.admin && (log.admin.email || log.admin.name)) || 'system';
                const action = log.action || 'UNKNOWN';
                const resource = log.resource ? capitalizeFirst(log.resource) : '—';
                const ts = log.timestamp ? formatDate(log.timestamp) : '—';
                return `
                  <tr>
                    <td>${escapeHtml(ts)}</td>
                    <td>${escapeHtml(adminLabel)}</td>
                    <td><span class="badge badge-info">${escapeHtml(action)}</span></td>
                    <td>${escapeHtml(resource)}</td>
                    <td>${describeAuditDetails(log)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>

          <div class="pagination">
            <div class="pagination-info">
              Showing ${(pagination.page - 1) * pagination.limit + 1} to ${Math.min(pagination.page * pagination.limit, pagination.total)} of ${pagination.total}
            </div>
            <div class="pagination-controls">
              <button class="pagination-btn" ${pagination.page === 1 ? 'disabled' : ''} onclick="changeAuditLogsPage(${pagination.page - 1})">Previous</button>
              <button class="pagination-btn active">${pagination.page}</button>
              <button class="pagination-btn" ${pagination.page >= pagination.pages ? 'disabled' : ''} onclick="changeAuditLogsPage(${pagination.page + 1})">Next</button>
            </div>
          </div>
        ` : `
          <div style="padding:48px 24px;text-align:center;color:var(--text-secondary,#94a3b8);">
            <div style="font-size:48px;margin-bottom:12px;">📋</div>
            <h3 style="margin:0 0 8px;color:var(--text-primary,#f1f5f9);font-size:18px;">No audit events recorded yet</h3>
            <p style="margin:0;max-width:480px;margin:0 auto;font-size:14px;">
              Actions like bulk updates, deletes and exports will appear here as
              soon as admins perform them.
            </p>
          </div>
        `}
      </div>
    `;

  } catch (error) {
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Audit Logs</h1>
      </div>
      <div class="table-container" style="padding:32px;text-align:center;">
        <p style="color:#ef4444;font-weight:600;margin:0 0 6px;">Failed to load audit logs</p>
        <p style="color:var(--text-secondary,#94a3b8);font-size:13px;margin:0;">${escapeHtml(error && error.message || 'Network error')}</p>
      </div>
    `;
    console.error(error);
  }
}

function changeAuditLogsPage(page) {
  auditLogsFilters.page = page;
  loadAuditLogs();
}

window.loadAuditLogs = loadAuditLogs;
window.changeAuditLogsPage = changeAuditLogsPage;
