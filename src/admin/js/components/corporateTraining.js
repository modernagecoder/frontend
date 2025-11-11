/**
 * CORPORATE TRAINING MANAGEMENT COMPONENT
 */

let corporateTrainingsData = [];
let corporateFilters = {
  status: 'all',
  trainingType: 'all',
  search: '',
  page: 1,
  limit: 20
};

async function loadCorporateTraining() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getCorporateTrainings(corporateFilters);
    corporateTrainingsData = data.trainings;
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Corporate Training Requests</h1>
        <p class="page-subtitle">Manage corporate training and upskilling requests</p>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">All Requests (${data.pagination.total})</h2>
          <div class="table-actions">
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input type="text" placeholder="Search requests..." id="corporateSearch" value="${corporateFilters.search}">
            </div>
            <select class="filter-select" id="trainingTypeFilter">
              <option value="all" ${corporateFilters.trainingType === 'all' ? 'selected' : ''}>All Types</option>
              <option value="company" ${corporateFilters.trainingType === 'company' ? 'selected' : ''}>Corporate Training</option>
              <option value="individual-upskill" ${corporateFilters.trainingType === 'individual-upskill' ? 'selected' : ''}>Individual Upskill</option>
              <option value="individual-career" ${corporateFilters.trainingType === 'individual-career' ? 'selected' : ''}>Career Change</option>
              <option value="individual-promotion" ${corporateFilters.trainingType === 'individual-promotion' ? 'selected' : ''}>Promotion/Growth</option>
            </select>
            <select class="filter-select" id="corporateStatusFilter">
              <option value="all" ${corporateFilters.status === 'all' ? 'selected' : ''}>All Status</option>
              <option value="new" ${corporateFilters.status === 'new' ? 'selected' : ''}>New</option>
              <option value="contacted" ${corporateFilters.status === 'contacted' ? 'selected' : ''}>Contacted</option>
              <option value="proposal-sent" ${corporateFilters.status === 'proposal-sent' ? 'selected' : ''}>Proposal Sent</option>
              <option value="negotiating" ${corporateFilters.status === 'negotiating' ? 'selected' : ''}>Negotiating</option>
              <option value="converted" ${corporateFilters.status === 'converted' ? 'selected' : ''}>Converted</option>
              <option value="archived" ${corporateFilters.status === 'archived' ? 'selected' : ''}>Archived</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="exportCorporateTrainings()">Export CSV</button>
          </div>
        </div>
        
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="selectAllCorporate"></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Training Area</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${corporateTrainingsData.map(training => `
              <tr>
                <td><input type="checkbox" class="corporate-checkbox" value="${training._id}"></td>
                <td>${training.fullName}</td>
                <td>${training.email}</td>
                <td>${training.phone}</td>
                <td><span class="badge badge-info">${formatTrainingType(training.trainingType)}</span></td>
                <td>${formatTrainingArea(training.trainingArea)}</td>
                <td><span class="badge badge-${training.status}">${capitalizeFirst(training.status)}</span></td>
                <td>${formatDateShort(training.submittedAt)}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-icon" onclick="viewCorporateTraining('${training._id}')">👁️</button>
                    <button class="btn-icon" onclick="editCorporateTraining('${training._id}')">✏️</button>
                    <button class="btn-icon btn-danger" onclick="deleteCorporateTraining('${training._id}')">🗑️</button>
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
            <button class="pagination-btn" ${data.pagination.page === 1 ? 'disabled' : ''} onclick="changeCorporatePage(${data.pagination.page - 1})">Previous</button>
            <button class="pagination-btn active">${data.pagination.page}</button>
            <button class="pagination-btn" ${data.pagination.page === data.pagination.pages ? 'disabled' : ''} onclick="changeCorporatePage(${data.pagination.page + 1})">Next</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    document.getElementById('corporateSearch').addEventListener('input', debounce(handleCorporateSearch, 500));
    document.getElementById('corporateStatusFilter').addEventListener('change', handleCorporateStatusFilter);
    document.getElementById('trainingTypeFilter').addEventListener('change', handleTrainingTypeFilter);
    
    // Bulk selection
    document.getElementById('selectAllCorporate').addEventListener('change', handleSelectAllCorporate);
    document.querySelectorAll('.corporate-checkbox').forEach(cb => {
      cb.addEventListener('change', updateCorporateBulkActions);
    });
    
    updateCorporateBulkActions();
    
  } catch (error) {
    throw error;
  }
}

function formatTrainingType(type) {
  const types = {
    'company': 'Corporate Team',
    'individual-upskill': 'Individual Upskill',
    'individual-career': 'Career Change',
    'individual-promotion': 'Promotion/Growth'
  };
  return types[type] || type;
}

function formatTrainingArea(area) {
  const areas = {
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App',
    'ai-ml': 'AI & ML',
    'data-science': 'Data Science',
    'cloud-computing': 'Cloud Computing',
    'devops': 'DevOps',
    'cybersecurity': 'Cybersecurity',
    'blockchain': 'Blockchain',
    'python': 'Python',
    'java': 'Java',
    'javascript': 'JavaScript',
    'custom': 'Custom'
  };
  return areas[area] || area;
}

function handleSelectAllCorporate(e) {
  const checkboxes = document.querySelectorAll('.corporate-checkbox');
  checkboxes.forEach(cb => cb.checked = e.target.checked);
  updateCorporateBulkActions();
}

function updateCorporateBulkActions() {
  const selected = document.querySelectorAll('.corporate-checkbox:checked');
  const tableHeader = document.querySelector('.table-header');
  
  let bulkToolbar = document.querySelector('.bulk-actions');
  
  if (selected.length > 0) {
    if (!bulkToolbar) {
      bulkToolbar = document.createElement('div');
      bulkToolbar.className = 'bulk-actions';
      tableHeader.parentNode.insertBefore(bulkToolbar, tableHeader.nextSibling);
    }
    
    bulkToolbar.innerHTML = `
      <div class="bulk-actions-info">${selected.length} request(s) selected</div>
      <div class="bulk-actions-buttons">
        <select id="bulkCorporateStatusSelect" class="filter-select">
          <option value="">Update Status...</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="proposal-sent">Proposal Sent</option>
          <option value="negotiating">Negotiating</option>
          <option value="converted">Converted</option>
          <option value="archived">Archived</option>
        </select>
        <button class="btn btn-sm btn-secondary" onclick="bulkUpdateCorporateStatus()">Apply</button>
        <button class="btn btn-sm btn-danger" onclick="bulkDeleteCorporateTrainings()">Delete Selected</button>
      </div>
    `;
  } else if (bulkToolbar) {
    bulkToolbar.remove();
  }
}

async function bulkUpdateCorporateStatus() {
  const status = document.getElementById('bulkCorporateStatusSelect').value;
  if (!status) {
    showToast('Please select a status', 'warning');
    return;
  }
  
  const selected = Array.from(document.querySelectorAll('.corporate-checkbox:checked')).map(cb => cb.value);
  
  try {
    for (const id of selected) {
      await api.updateCorporateTraining(id, { status });
    }
    showToast(`Updated ${selected.length} request(s)`, 'success');
    loadCorporateTraining();
  } catch (error) {
    showToast('Bulk update failed: ' + error.message, 'error');
  }
}

async function bulkDeleteCorporateTrainings() {
  const selected = Array.from(document.querySelectorAll('.corporate-checkbox:checked')).map(cb => cb.value);
  
  if (!confirm(`Are you sure you want to delete ${selected.length} request(s)?`)) return;
  
  try {
    for (const id of selected) {
      await api.deleteCorporateTraining(id);
    }
    showToast(`Deleted ${selected.length} request(s)`, 'success');
    loadCorporateTraining();
  } catch (error) {
    showToast('Bulk delete failed: ' + error.message, 'error');
  }
}

function handleCorporateSearch(e) {
  corporateFilters.search = e.target.value;
  corporateFilters.page = 1;
  loadCorporateTraining();
}

function handleCorporateStatusFilter(e) {
  corporateFilters.status = e.target.value;
  corporateFilters.page = 1;
  loadCorporateTraining();
}

function handleTrainingTypeFilter(e) {
  corporateFilters.trainingType = e.target.value;
  corporateFilters.page = 1;
  loadCorporateTraining();
}

function changeCorporatePage(page) {
  corporateFilters.page = page;
  loadCorporateTraining();
}

async function deleteCorporateTraining(id) {
  if (!confirm('Are you sure you want to delete this training request?')) return;
  
  try {
    await api.deleteCorporateTraining(id);
    showToast('Training request deleted successfully', 'success');
    loadCorporateTraining();
  } catch (error) {
    showToast('Delete failed: ' + error.message, 'error');
  }
}

async function viewCorporateTraining(id) {
  try {
    const data = await api.getCorporateTraining(id);
    const training = data.training;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h2>Training Request Details</h2>
          <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
        </div>
        <div class="modal-body">
          <div class="detail-grid">
            <div class="detail-section">
              <h3>Contact Information</h3>
              <div class="detail-item">
                <span class="detail-label">Full Name:</span>
                <span class="detail-value">${training.fullName}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Email:</span>
                <span class="detail-value">${training.email}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${training.phone}</span>
              </div>
            </div>
            
            <div class="detail-section">
              <h3>Training Details</h3>
              <div class="detail-item">
                <span class="detail-label">Training Type:</span>
                <span class="detail-value">${formatTrainingType(training.trainingType)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Training Area:</span>
                <span class="detail-value">${formatTrainingArea(training.trainingArea)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Skill Level:</span>
                <span class="detail-value">${capitalizeFirst(training.currentSkillLevel)}</span>
              </div>
              ${training.companyName ? `
              <div class="detail-item">
                <span class="detail-label">Company:</span>
                <span class="detail-value">${training.companyName}</span>
              </div>
              ` : ''}
              ${training.teamSize ? `
              <div class="detail-item">
                <span class="detail-label">Team Size:</span>
                <span class="detail-value">${training.teamSize}</span>
              </div>
              ` : ''}
              ${training.currentEmployment ? `
              <div class="detail-item">
                <span class="detail-label">Employment Status:</span>
                <span class="detail-value">${capitalizeFirst(training.currentEmployment)}</span>
              </div>
              ` : ''}
              ${training.careerGoal ? `
              <div class="detail-item">
                <span class="detail-label">Career Goal:</span>
                <span class="detail-value">${training.careerGoal}</span>
              </div>
              ` : ''}
            </div>
            
            <div class="detail-section full-width">
              <h3>Training Goals</h3>
              <p class="detail-text">${training.trainingGoals}</p>
            </div>
            
            <div class="detail-section">
              <h3>Status Information</h3>
              <div class="detail-item">
                <span class="detail-label">Status:</span>
                <span class="badge badge-${training.status}">${capitalizeFirst(training.status)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Submitted:</span>
                <span class="detail-value">${formatDateLong(training.submittedAt)}</span>
              </div>
              ${training.notes ? `
              <div class="detail-item full-width">
                <span class="detail-label">Notes:</span>
                <p class="detail-text">${training.notes}</p>
              </div>
              ` : ''}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
          <button class="btn btn-primary" onclick="editCorporateTraining('${training._id}'); this.closest('.modal').remove();">Edit</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
  } catch (error) {
    showToast('Failed to load training details: ' + error.message, 'error');
  }
}

async function editCorporateTraining(id) {
  try {
    const data = await api.getCorporateTraining(id);
    const training = data.training;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Edit Training Request</h2>
          <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
        </div>
        <form id="editCorporateForm">
          <div class="modal-body">
            <div class="form-group">
              <label for="editStatus">Status</label>
              <select id="editStatus" class="form-control" required>
                <option value="new" ${training.status === 'new' ? 'selected' : ''}>New</option>
                <option value="contacted" ${training.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                <option value="proposal-sent" ${training.status === 'proposal-sent' ? 'selected' : ''}>Proposal Sent</option>
                <option value="negotiating" ${training.status === 'negotiating' ? 'selected' : ''}>Negotiating</option>
                <option value="converted" ${training.status === 'converted' ? 'selected' : ''}>Converted</option>
                <option value="archived" ${training.status === 'archived' ? 'selected' : ''}>Archived</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="editNotes">Notes</label>
              <textarea id="editNotes" class="form-control" rows="4" placeholder="Add internal notes...">${training.notes || ''}</textarea>
            </div>
            
            <div class="form-group">
              <label for="editEstimatedValue">Estimated Value (₹)</label>
              <input type="number" id="editEstimatedValue" class="form-control" value="${training.estimatedValue || ''}" placeholder="50000">
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
    
    document.getElementById('editCorporateForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const updates = {
        status: document.getElementById('editStatus').value,
        notes: document.getElementById('editNotes').value,
        estimatedValue: document.getElementById('editEstimatedValue').value || null
      };
      
      try {
        await api.updateCorporateTraining(id, updates);
        showToast('Training request updated successfully', 'success');
        modal.remove();
        loadCorporateTraining();
      } catch (error) {
        showToast('Update failed: ' + error.message, 'error');
      }
    });
    
  } catch (error) {
    showToast('Failed to load training details: ' + error.message, 'error');
  }
}

function exportCorporateTrainings() {
  try {
    const csv = [
      ['Name', 'Email', 'Phone', 'Type', 'Training Area', 'Skill Level', 'Company', 'Team Size', 'Status', 'Date', 'Goals'].join(','),
      ...corporateTrainingsData.map(t => [
        t.fullName,
        t.email,
        t.phone,
        formatTrainingType(t.trainingType),
        formatTrainingArea(t.trainingArea),
        t.currentSkillLevel,
        t.companyName || '',
        t.teamSize || '',
        t.status,
        formatDateShort(t.submittedAt),
        `"${t.trainingGoals.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `corporate-training-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast('Export successful', 'success');
  } catch (error) {
    showToast('Export failed: ' + error.message, 'error');
  }
}
