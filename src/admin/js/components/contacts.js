/**
 * CONTACTS MANAGEMENT COMPONENT
 */

let contactsData = [];
let contactsFilters = {
  status: 'all',
  search: '',
  page: 1,
  limit: 20
};

async function loadContacts() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getContacts(contactsFilters);
    contactsData = data.contacts;
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Contacts Management</h1>
        <p class="page-subtitle">Manage inquiries from the Try Coding form</p>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">All Contacts (${data.pagination.total})</h2>
          <div class="table-actions">
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input type="text" placeholder="Search contacts..." id="contactSearch" value="${contactsFilters.search}">
            </div>
            <select class="filter-select" id="statusFilter">
              <option value="all" ${contactsFilters.status === 'all' ? 'selected' : ''}>All Status</option>
              <option value="new" ${contactsFilters.status === 'new' ? 'selected' : ''}>New</option>
              <option value="contacted" ${contactsFilters.status === 'contacted' ? 'selected' : ''}>Contacted</option>
              <option value="converted" ${contactsFilters.status === 'converted' ? 'selected' : ''}>Converted</option>
              <option value="archived" ${contactsFilters.status === 'archived' ? 'selected' : ''}>Archived</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="exportContacts()">Export CSV</button>
          </div>
        </div>
        
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="selectAll"></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${contactsData.map(contact => `
              <tr>
                <td><input type="checkbox" class="contact-checkbox" value="${contact._id}"></td>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.contact}</td>
                <td><span class="badge badge-${contact.status}">${capitalizeFirst(contact.status)}</span></td>
                <td>${formatDateShort(contact.submittedAt)}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-icon" onclick="viewContact('${contact._id}')">👁️</button>
                    <button class="btn-icon" onclick="editContact('${contact._id}')">✏️</button>
                    <button class="btn-icon btn-danger" onclick="deleteContact('${contact._id}')">🗑️</button>
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
            <button class="pagination-btn" ${data.pagination.page === 1 ? 'disabled' : ''} onclick="changeContactsPage(${data.pagination.page - 1})">Previous</button>
            <button class="pagination-btn active">${data.pagination.page}</button>
            <button class="pagination-btn" ${data.pagination.page === data.pagination.pages ? 'disabled' : ''} onclick="changeContactsPage(${data.pagination.page + 1})">Next</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    document.getElementById('contactSearch').addEventListener('input', debounce(handleContactSearch, 500));
    document.getElementById('statusFilter').addEventListener('change', handleStatusFilter);
    
    // Bulk selection
    document.getElementById('selectAll').addEventListener('change', handleSelectAll);
    document.querySelectorAll('.contact-checkbox').forEach(cb => {
      cb.addEventListener('change', updateBulkActions);
    });
    
    updateBulkActions();
    
  } catch (error) {
    throw error;
  }
}

function handleSelectAll(e) {
  const checkboxes = document.querySelectorAll('.contact-checkbox');
  checkboxes.forEach(cb => cb.checked = e.target.checked);
  updateBulkActions();
}

function updateBulkActions() {
  const selected = document.querySelectorAll('.contact-checkbox:checked');
  const tableHeader = document.querySelector('.table-header');
  
  let bulkToolbar = document.querySelector('.bulk-actions');
  
  if (selected.length > 0) {
    if (!bulkToolbar) {
      bulkToolbar = document.createElement('div');
      bulkToolbar.className = 'bulk-actions';
      tableHeader.parentNode.insertBefore(bulkToolbar, tableHeader.nextSibling);
    }
    
    bulkToolbar.innerHTML = `
      <div class="bulk-actions-info">${selected.length} contact(s) selected</div>
      <div class="bulk-actions-buttons">
        <select id="bulkStatusSelect" class="filter-select">
          <option value="">Update Status...</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
          <option value="archived">Archived</option>
        </select>
        <button class="btn btn-sm btn-secondary" onclick="bulkUpdateStatus()">Apply</button>
        <button class="btn btn-sm btn-danger" onclick="bulkDeleteContacts()">Delete Selected</button>
      </div>
    `;
  } else if (bulkToolbar) {
    bulkToolbar.remove();
  }
}

async function bulkUpdateStatus() {
  const status = document.getElementById('bulkStatusSelect').value;
  if (!status) {
    showToast('Please select a status', 'warning');
    return;
  }
  
  const selected = Array.from(document.querySelectorAll('.contact-checkbox:checked')).map(cb => cb.value);
  
  try {
    await api.bulkUpdateContacts(selected, { status });
    showToast(`Updated ${selected.length} contact(s)`, 'success');
    loadContacts();
  } catch (error) {
    showToast('Bulk update failed: ' + error.message, 'error');
  }
}

async function bulkDeleteContacts() {
  const selected = Array.from(document.querySelectorAll('.contact-checkbox:checked')).map(cb => cb.value);
  
  if (!confirm(`Are you sure you want to delete ${selected.length} contact(s)?`)) return;
  
  try {
    await api.bulkDeleteContacts(selected);
    showToast(`Deleted ${selected.length} contact(s)`, 'success');
    loadContacts();
  } catch (error) {
    showToast('Bulk delete failed: ' + error.message, 'error');
  }
}

function handleContactSearch(e) {
  contactsFilters.search = e.target.value;
  contactsFilters.page = 1;
  loadContacts();
}

function handleStatusFilter(e) {
  contactsFilters.status = e.target.value;
  contactsFilters.page = 1;
  loadContacts();
}

function changeContactsPage(page) {
  contactsFilters.page = page;
  loadContacts();
}

async function deleteContact(id) {
  if (!confirm('Are you sure you want to delete this contact?')) return;
  
  try {
    await api.deleteContact(id);
    showToast('Contact deleted successfully', 'success');
    loadContacts();
  } catch (error) {
    showToast('Failed to delete contact: ' + error.message, 'error');
  }
}

async function exportContacts() {
  try {
    await api.exportData('contacts', 'csv', contactsFilters);
    showToast('Export started', 'success');
  } catch (error) {
    showToast('Export failed: ' + error.message, 'error');
  }
}

async function viewContact(id) {
  try {
    const data = await api.getContact(id);
    const contact = data.contact;
    
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">Contact Details</h2>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.contact}</p>
        <p><strong>Message:</strong> ${contact.message}</p>
        <p><strong>Status:</strong> <span class="badge badge-${contact.status}">${capitalizeFirst(contact.status)}</span></p>
        <p><strong>Submitted:</strong> ${formatDate(contact.submittedAt)}</p>
        ${contact.notes ? `<p><strong>Notes:</strong> ${contact.notes}</p>` : ''}
        ${contact.ipAddress ? `<p><strong>IP Address:</strong> ${contact.ipAddress}</p>` : ''}
        ${contact.userAgent ? `<p><strong>User Agent:</strong> ${contact.userAgent}</p>` : ''}
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="closeModal(); editContact('${id}')">Edit</button>
      </div>
    `);
  } catch (error) {
    showToast('Failed to load contact: ' + error.message, 'error');
  }
}

async function editContact(id) {
  try {
    const data = await api.getContact(id);
    const contact = data.contact;
    
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">Edit Contact</h2>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <form id="editContactForm">
          <div class="form-group">
            <label>Status</label>
            <select name="status" class="filter-select" style="width: 100%;">
              <option value="new" ${contact.status === 'new' ? 'selected' : ''}>New</option>
              <option value="contacted" ${contact.status === 'contacted' ? 'selected' : ''}>Contacted</option>
              <option value="converted" ${contact.status === 'converted' ? 'selected' : ''}>Converted</option>
              <option value="archived" ${contact.status === 'archived' ? 'selected' : ''}>Archived</option>
            </select>
          </div>
          <div class="form-group">
            <label>Notes</label>
            <textarea name="notes" rows="4" style="width: 100%; padding: 12px; background: var(--surface-light); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">${contact.notes || ''}</textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveContactEdit('${id}')">Save Changes</button>
      </div>
    `);
  } catch (error) {
    showToast('Failed to load contact: ' + error.message, 'error');
  }
}

async function saveContactEdit(id) {
  const form = document.getElementById('editContactForm');
  const formData = new FormData(form);
  const updates = {
    status: formData.get('status'),
    notes: formData.get('notes')
  };
  
  try {
    await api.updateContact(id, updates);
    showToast('Contact updated successfully', 'success');
    closeModal();
    loadContacts();
  } catch (error) {
    showToast('Failed to update contact: ' + error.message, 'error');
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.loadContacts = loadContacts;
window.deleteContact = deleteContact;
window.viewContact = viewContact;
window.editContact = editContact;
window.saveContactEdit = saveContactEdit;
window.changeContactsPage = changeContactsPage;
window.exportContacts = exportContacts;
window.bulkUpdateStatus = bulkUpdateStatus;
window.bulkDeleteContacts = bulkDeleteContacts;
