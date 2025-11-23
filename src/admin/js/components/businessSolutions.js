/**
 * BUSINESS SOLUTIONS MANAGEMENT COMPONENT
 */

let businessSolutionsData = [];
let businessFilters = {
  status: 'all',
  service: 'all',
  search: '',
  page: 1,
  limit: 20
};

async function loadBusinessSolutions() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getBusinessSolutions(businessFilters);
    businessSolutionsData = data.inquiries;
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Business Solutions</h1>
        <p class="page-subtitle">Manage business solution inquiries and proposals</p>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">All Inquiries (${data.pagination.total})</h2>
          <div class="table-actions">
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input type="text" placeholder="Search inquiries..." id="businessSearch" value="${businessFilters.search}">
            </div>
            <select class="filter-select" id="serviceFilter">
              <option value="all" ${businessFilters.service === 'all' ? 'selected' : ''}>All Services</option>
              <option value="software" ${businessFilters.service === 'software' ? 'selected' : ''}>Software Development</option>
              <option value="website" ${businessFilters.service === 'website' ? 'selected' : ''}>Website & Web Systems</option>
              <option value="mobile" ${businessFilters.service === 'mobile' ? 'selected' : ''}>Mobile App</option>
              <option value="ai" ${businessFilters.service === 'ai' ? 'selected' : ''}>AI & Automation</option>
              <option value="workshop" ${businessFilters.service === 'workshop' ? 'selected' : ''}>Workshops</option>
              <option value="consultation" ${businessFilters.service === 'consultation' ? 'selected' : ''}>Consultation</option>
              <option value="other" ${businessFilters.service === 'other' ? 'selected' : ''}>Other</option>
            </select>
            <select class="filter-select" id="businessStatusFilter">
              <option value="all" ${businessFilters.status === 'all' ? 'selected' : ''}>All Status</option>
              <option value="new" ${businessFilters.status === 'new' ? 'selected' : ''}>New</option>
              <option value="contacted" ${businessFilters.status === 'contacted' ? 'selected' : ''}>Contacted</option>
              <option value="proposal-sent" ${businessFilters.status === 'proposal-sent' ? 'selected' : ''}>Proposal Sent</option>
              <option value="negotiating" ${businessFilters.status === 'negotiating' ? 'selected' : ''}>Negotiating</option>
              <option value="converted" ${businessFilters.status === 'converted' ? 'selected' : ''}>Converted</option>
              <option value="archived" ${businessFilters.status === 'archived' ? 'selected' : ''}>Archived</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="exportBusinessSolutions()">Export CSV</button>
          </div>
        </div>
        
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="selectAllBusiness"></th>
              <th>Name</th>
              <th>Organization</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${businessSolutionsData.map(inquiry => `
              <tr>
                <td><input type="checkbox" class="business-checkbox" value="${inquiry._id}"></td>
                <td>${inquiry.name}</td>
                <td>${inquiry.organization}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.phone}</td>
                <td><span class="badge badge-info">${formatServiceType(inquiry.service)}</span></td>
                <td>${formatBudget(inquiry.budget)}</td>
                <td><span class="badge badge-${inquiry.status}">${capitalizeFirst(inquiry.status)}</span></td>
                <td>${formatDateShort(inquiry.submittedAt)}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-icon" onclick="viewBusinessSolution('${inquiry._id}')">👁️</button>
                    <button class="btn-icon" onclick="editBusinessSolution('${inquiry._id}')">✏️</button>
                    <button class="btn-icon btn-danger" onclick="deleteBusinessSolution('${inquiry._id}')">🗑️</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="pagination">
          <div class="pagination-info">
            Showing ${(data.pagination.page - 1) * data.pagination.limit + 1} to ${Math.min(data.pagination.page * data.pagination.limit, data.pagination.total)} of ${data.pagination.total}
          </div>
          <div class="pagination-controls">
            <button class="pagination-btn" ${data.pagination.page === 1 ? 'disabled' : ''} onclick="changeBusinessPage(${data.pagination.page - 1})">Previous</button>
            <button class="pagination-btn active">${data.pagination.page}</button>
            <button class="pagination-btn" ${data.pagination.page === data.pagination.pages ? 'disabled' : ''} onclick="changeBusinessPage(${data.pagination.page + 1})">Next</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    document.getElementById('businessSearch').addEventListener('input', debounce(handleBusinessSearch, 500));
    document.getElementById('businessStatusFilter').addEventListener('change', handleBusinessStatusFilter);
    document.getElementById('serviceFilter').addEventListener('change', handleServiceFilter);
    
    // Bulk selection
    document.getElementById('selectAllBusiness').addEventListener('change', handleSelectAllBusiness);
    document.querySelectorAll('.business-checkbox').forEach(cb => {
      cb.addEventListener('change', updateBusinessBulkActions);
    });
    
    updateBusinessBulkActions();
    
  } catch (error) {
    throw error;
  }
}

function formatServiceType(service) {
  const types = {
    'software': 'Software Dev',
    'website': 'Website',
    'mobile': 'Mobile App',
    'ai': 'AI & Automation',
    'workshop': 'Workshop',
    'consultation': 'Consultation',
    'other': 'Other'
  };
  return types[service] || service;
}

function formatBudget(budget) {
  const budgets = {
    'under-50k': '< ₹50K',
    '50k-1l': '₹50K-1L',
    '1l-3l': '₹1L-3L',
    '3l-5l': '₹3L-5L',
    'above-5l': '> ₹5L'
  };
  return budgets[budget] || 'Not specified';
}

function handleSelectAllBusiness(e) {
  const checkboxes = document.querySelectorAll('.business-checkbox');
  checkboxes.forEach(cb => cb.checked = e.target.checked);
  updateBusinessBulkActions();
}

function updateBusinessBulkActions() {
  const selected = document.querySelectorAll('.business-checkbox:checked');
  const tableHeader = document.querySelector('.table-header');
  
  let bulkToolbar = document.querySelector('.bulk-actions');
  
  if (selected.length > 0) {
    if (!bulkToolbar) {
      bulkToolbar = document.createElement('div');
      bulkToolbar.className = 'bulk-actions';
      tableHeader.parentNode.insertBefore(bulkToolbar, tableHeader.nextSibling);
    }
    
    bulkToolbar.innerHTML = `
      <div class="bulk-actions-info">${selected.length} inquiry(ies) selected</div>
      <div class="bulk-actions-buttons">
        <select id="bulkBusinessStatusSelect" class="filter-select">
          <option value="">Update Status...</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="proposal-sent">Proposal Sent</option>
          <option value="negotiating">Negotiating</option>
          <option value="converted">Converted</option>
          <option value="archived">Archived</option>
        </select>
        <button class="btn btn-sm btn-secondary" onclick="bulkUpdateBusinessStatus()">Apply</button>
        <button class="btn btn-sm btn-danger" onclick="bulkDeleteBusinessSolutions()">Delete Selected</button>
      </div>
    `;
  } else if (bulkToolbar) {
    bulkToolbar.remove();
  }
}

async function bulkUpdateBusinessStatus() {
  const status = document.getElementById('bulkBusinessStatusSelect').value;
  if (!status) {
    showToast('Please select a status', 'warning');
    return;
  }
  
  const selected = Array.from(document.querySelectorAll('.business-checkbox:checked')).map(cb => cb.value);
  
  try {
    for (const id of selected) {
      await api.updateBusinessSolution(id, { status });
    }
    showToast(`Updated ${selected.length} inquiry(ies)`, 'success');
    loadBusinessSolutions();
  } catch (error) {
    showToast('Bulk update failed: ' + error.message, 'error');
  }
}

async function bulkDeleteBusinessSolutions() {
  const selected = Array.from(document.querySelectorAll('.business-checkbox:checked')).map(cb => cb.value);
  
  if (!confirm(`Are you sure you want to delete ${selected.length} inquiry(ies)?`)) return;
  
  try {
    for (const id of selected) {
      await api.deleteBusinessSolution(id);
    }
    showToast(`Deleted ${selected.length} inquiry(ies)`, 'success');
    loadBusinessSolutions();
  } catch (error) {
    showToast('Bulk delete failed: ' + error.message, 'error');
  }
}

function handleBusinessSearch(e) {
  businessFilters.search = e.target.value;
  businessFilters.page = 1;
  loadBusinessSolutions();
}

function handleBusinessStatusFilter(e) {
  businessFilters.status = e.target.value;
  businessFilters.page = 1;
  loadBusinessSolutions();
}

function handleServiceFilter(e) {
  businessFilters.service = e.target.value;
  businessFilters.page = 1;
  loadBusinessSolutions();
}

function changeBusinessPage(page) {
  businessFilters.page = page;
  loadBusinessSolutions();
}

async function deleteBusinessSolution(id) {
  if (!confirm('Are you sure you want to delete this inquiry?')) return;
  
  try {
    await api.deleteBusinessSolution(id);
    showToast('Inquiry deleted successfully', 'success');
    loadBusinessSolutions();
  } catch (error) {
    showToast('Delete failed: ' + error.message, 'error');
  }
}

async function viewBusinessSolution(id) {
  try {
    const data = await api.getBusinessSolution(id);
    const inquiry = data.inquiry;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h2>Business Solution Inquiry Details</h2>
          <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
        </div>
        <div class="modal-body">
          <div class="detail-grid">
            <div class="detail-section">
              <h3>Contact Information</h3>
              <div class="detail-item">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${inquiry.name}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Organization:</span>
                <span class="detail-value">${inquiry.organization}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Email:</span>
                <span class="detail-value">${inquiry.email}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${inquiry.phone}</span>
              </div>
            </div>
            
            <div class="detail-section">
              <h3>Service Details</h3>
              <div class="detail-item">
                <span class="detail-label">Service Type:</span>
                <span class="detail-value">${formatServiceType(inquiry.service)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Budget:</span>
                <span class="detail-value">${formatBudget(inquiry.budget)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Status:</span>
                <span class="badge badge-${inquiry.status}">${capitalizeFirst(inquiry.status)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Submitted:</span>
                <span class="detail-value">${formatDateLong(inquiry.submittedAt)}</span>
              </div>
            </div>
            
            <div class="detail-section full-width">
              <h3>Project Details</h3>
              <p class="detail-text">${inquiry.message}</p>
            </div>
            
            ${inquiry.notes ? `
            <div class="detail-section full-width">
              <h3>Internal Notes</h3>
              <p class="detail-text">${inquiry.notes}</p>
            </div>
            ` : ''}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
          <button class="btn btn-primary" onclick="editBusinessSolution('${inquiry._id}'); this.closest('.modal').remove();">Edit</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
  } catch (error) {
    showToast('Failed to load inquiry details: ' + error.message, 'error');
  }
}

async function editBusinessSolution(id) {
  try {
    const data = await api.getBusinessSolution(id);
    const inquiry = data.inquiry;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Edit Business Solution Inquiry</h2>
          <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
        </div>
        <form id="editBusinessForm">
          <div class="modal-body">
            <div class="form-group">
              <label for="editBusinessStatus">Status</label>
              <select id="editBusinessStatus" class="form-control" required>
                <option value="new" ${inquiry.status === 'new' ? 'selected' : ''}>New</option>
                <option value="contacted" ${inquiry.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                <option value="proposal-sent" ${inquiry.status === 'proposal-sent' ? 'selected' : ''}>Proposal Sent</option>
                <option value="negotiating" ${inquiry.status === 'negotiating' ? 'selected' : ''}>Negotiating</option>
                <option value="converted" ${inquiry.status === 'converted' ? 'selected' : ''}>Converted</option>
                <option value="archived" ${inquiry.status === 'archived' ? 'selected' : ''}>Archived</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="editBusinessNotes">Internal Notes</label>
              <textarea id="editBusinessNotes" class="form-control" rows="4" placeholder="Add internal notes...">${inquiry.notes || ''}</textarea>
            </div>
            
            <div class="form-group">
              <label for="editBusinessValue">Estimated Value (₹)</label>
              <input type="number" id="editBusinessValue" class="form-control" value="${inquiry.estimatedValue || ''}" placeholder="500000">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    document.getElementById('editBusinessForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const updates = {
        status: document.getElementById('editBusinessStatus').value,
        notes: document.getElementById('editBusinessNotes').value,
        estimatedValue: document.getElementById('editBusinessValue').value || null
      };
      
      try {
        await api.updateBusinessSolution(id, updates);
        showToast('Inquiry updated successfully', 'success');
        modal.remove();
        loadBusinessSolutions();
      } catch (error) {
        showToast('Update failed: ' + error.message, 'error');
      }
    });
    
  } catch (error) {
    showToast('Failed to load inquiry details: ' + error.message, 'error');
  }
}

function exportBusinessSolutions() {
  try {
    const csv = [
      ['Name', 'Organization', 'Email', 'Phone', 'Service', 'Budget', 'Status', 'Date', 'Project Details'].join(','),
      ...businessSolutionsData.map(i => [
        i.name,
        i.organization,
        i.email,
        i.phone,
        formatServiceType(i.service),
        formatBudget(i.budget),
        i.status,
        formatDateShort(i.submittedAt),
        `"${i.message.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `business-solutions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast('Export successful', 'success');
  } catch (error) {
    showToast('Export failed: ' + error.message, 'error');
  }
}

window.loadBusinessSolutions = loadBusinessSolutions;
window.deleteBusinessSolution = deleteBusinessSolution;
window.viewBusinessSolution = viewBusinessSolution;
window.editBusinessSolution = editBusinessSolution;
window.changeBusinessPage = changeBusinessPage;
window.exportBusinessSolutions = exportBusinessSolutions;
window.bulkDeleteBusinessSolutions = bulkDeleteBusinessSolutions;
window.bulkUpdateBusinessStatus = bulkUpdateBusinessStatus;
