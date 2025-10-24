/**
 * AUDIT LOGS COMPONENT
 */

let auditLogsFilters = {
  page: 1,
  limit: 50
};

async function loadAuditLogs() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getAuditLogs(auditLogsFilters);
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Audit Logs</h1>
        <p class="page-subtitle">Track all administrative actions</p>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">Activity Log (${data.pagination.total})</h2>
        </div>
        
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
            ${data.logs.map(log => `
              <tr>
                <td>${formatDate(log.timestamp)}</td>
                <td>${log.admin.email}</td>
                <td><span class="badge badge-info">${log.action}</span></td>
                <td>${capitalizeFirst(log.resource)}</td>
                <td>${log.details.count ? `Count: ${log.details.count}` : ''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="pagination">
          <div class="pagination-info">
            Showing ${(data.pagination.page - 1) * data.pagination.limit + 1} to ${Math.min(data.pagination.page * data.pagination.limit, data.pagination.total)} of ${data.pagination.total}
          </div>
          <div class="pagination-controls">
            <button class="pagination-btn" ${data.pagination.page === 1 ? 'disabled' : ''} onclick="changeAuditLogsPage(${data.pagination.page - 1})">Previous</button>
            <button class="pagination-btn active">${data.pagination.page}</button>
            <button class="pagination-btn" ${data.pagination.page === data.pagination.pages ? 'disabled' : ''} onclick="changeAuditLogsPage(${data.pagination.page + 1})">Next</button>
          </div>
        </div>
      </div>
    `;
    
  } catch (error) {
    throw error;
  }
}

function changeAuditLogsPage(page) {
  auditLogsFilters.page = page;
  loadAuditLogs();
}

window.loadAuditLogs = loadAuditLogs;
window.changeAuditLogsPage = changeAuditLogsPage;
