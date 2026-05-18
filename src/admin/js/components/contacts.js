/**
 * CONTACTS MANAGEMENT COMPONENT
 */

let contactsData = [];
let contactsFilters = {
  status: 'all',
  country: 'all',
  search: '',
  page: 1,
  limit: 20
};

// Render the country as a visually obvious badge so foreign-student inquiries
// stand out at a glance. Records saved before the country-code feature shipped
// have no country fields — show them as "Unknown" so the admin knows the data
// is missing (rather than silently defaulting to India and hiding the gap).
function renderCountryCell(record) {
  const iso = record.countryIso || record.customerCountryIso || '';
  const name = record.countryName || record.customerCountryName || '';
  const dial = record.countryCode || record.customerCountryCode || '';

  if (!iso && !name && !dial) {
    return '<span class="country-badge country-badge--unknown" title="Submitted before the country picker was added">— Unknown</span>';
  }

  const flag = iso && iso.length === 2
    ? iso.toUpperCase().replace(/./g, c => String.fromCodePoint(0x1F1A5 + c.charCodeAt(0)))
    : '🌍';
  const isIndia = (iso || '').toUpperCase() === 'IN';
  const cls = isIndia ? 'country-badge country-badge--india' : 'country-badge country-badge--foreign';
  const displayName = name || (iso ? iso.toUpperCase() : 'Unknown');

  return `<span class="${cls}" title="${displayName} (${iso || 'unknown'})"><span class="country-flag">${flag}</span> ${displayName}${iso ? ` <small>(${iso})</small>` : ''}</span>`;
}

// Inject styles for the country badge once.
(function injectCountryBadgeStyles() {
  if (document.getElementById('mac-admin-country-badge-styles')) return;
  const style = document.createElement('style');
  style.id = 'mac-admin-country-badge-styles';
  style.textContent = `
    .country-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font-size:12.5px;font-weight:600;line-height:1.2;white-space:nowrap;}
    .country-badge .country-flag{font-size:15px;line-height:1;}
    .country-badge small{opacity:.7;font-weight:500;}
    .country-badge--india{background:rgba(34,197,94,.12);color:#16a34a;border:1px solid rgba(34,197,94,.3);}
    .country-badge--foreign{background:rgba(168,85,247,.14);color:#a855f7;border:1px solid rgba(168,85,247,.35);}
    .country-badge--unknown{background:rgba(148,163,184,.14);color:#64748b;border:1px solid rgba(148,163,184,.3);font-style:italic;}
    .phone-with-code{font-variant-numeric:tabular-nums;white-space:nowrap;}
    .phone-with-code .dial{color:var(--text-secondary,#94a3b8);margin-right:4px;}
  `;
  document.head.appendChild(style);
})();

function renderPhoneCell(record) {
  const dial = record.countryCode || record.customerCountryCode || '';
  const phone = record.contact || record.phone || record.customerPhone || '';
  return `<span class="phone-with-code"><span class="dial">${dial || ''}</span>${phone}</span>`;
}

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
            <select class="filter-select" id="countryFilter" title="Filter by country">
              <option value="all" ${contactsFilters.country === 'all' ? 'selected' : ''}>🌍 All Countries</option>
              <option value="IN" ${contactsFilters.country === 'IN' ? 'selected' : ''}>🇮🇳 India only</option>
              <option value="foreign" ${contactsFilters.country === 'foreign' ? 'selected' : ''}>✈️ Foreign only</option>
              <option value="unknown" ${contactsFilters.country === 'unknown' ? 'selected' : ''}>❓ Unknown / pre-2026</option>
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
              <th>Country</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filteredContacts().map(contact => `
              <tr>
                <td><input type="checkbox" class="contact-checkbox" value="${contact._id}"></td>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${renderPhoneCell(contact)}</td>
                <td>${renderCountryCell(contact)}</td>
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
    const cf = document.getElementById('countryFilter');
    if (cf) cf.addEventListener('change', handleCountryFilter);
    
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

function handleCountryFilter(e) {
  contactsFilters.country = e.target.value;
  // Client-side filtering — re-render without refetching since the API
  // doesn't (yet) accept a country query param.
  loadContacts();
}

// Return the page slice of contactsData filtered by the country selector.
function filteredContacts() {
  if (!contactsFilters.country || contactsFilters.country === 'all') return contactsData;
  return contactsData.filter(c => {
    const iso = (c.countryIso || '').toUpperCase();
    if (contactsFilters.country === 'IN') return iso === 'IN';
    if (contactsFilters.country === 'foreign') return iso && iso !== 'IN';
    if (contactsFilters.country === 'unknown') return !iso;
    return true;
  });
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

function exportContacts() {
  try {
    const csv = [
      ['Name', 'Email', 'Country', 'Country Code', 'Phone', 'Message', 'Status', 'Submitted Date', 'Notes'].join(','),
      ...contactsData.map(c => [
        c.name,
        c.email,
        // Leave the cell blank rather than guessing India — matches the
        // "Unknown" badge in the admin table for records that were saved
        // before the country picker existed (or without it).
        c.countryName || '',
        c.countryCode || '',
        c.contact,
        `"${(c.message || '').replace(/"/g, '""')}"`,
        c.status,
        formatDateShort(c.submittedAt),
        `"${(c.notes || '').replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast('Export successful', 'success');
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
        <p><strong>Phone:</strong> ${renderPhoneCell(contact)}</p>
        <p><strong>Country:</strong> ${renderCountryCell(contact)}</p>
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
