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
  // Brand colours only. This block previously used the retired purple
  // (#a855f7) for foreign countries and a bright green for India, which were
  // left over from the old admin skin and showed through the new one because
  // an injected stylesheet lands after components.css in the cascade.
  style.textContent = `
    .country-badge{display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;font-size:12px;font-weight:600;line-height:1.4;white-space:nowrap;}
    .country-badge .country-flag{font-size:14px;line-height:1;}
    .country-badge small{opacity:.7;font-weight:500;}
    .country-badge--india{background:rgba(31,138,85,.10);color:#16663E;border:1px solid rgba(31,138,85,.25);}
    .country-badge--foreign{background:rgba(180,83,9,.08);color:#8F3F08;border:1px solid rgba(180,83,9,.16);}
    .country-badge--unknown{background:rgba(107,98,89,.12);color:#6B6259;border:1px solid rgba(107,98,89,.2);font-style:italic;}
    .phone-with-code{font-family:var(--font-mono);font-size:12.5px;font-variant-numeric:tabular-nums;white-space:nowrap;color:var(--ink);}
    .phone-with-code .dial{color:var(--muted);margin-right:4px;}
  `;
  document.head.appendChild(style);
})();

// Delegates to the shared renderer in formatting.js so an enquiry, a callback
// and a demo on the Today screen all show the same number the same way. The
// old local version pasted the dial code straight onto the stored digits,
// which doubled the country code whenever the parent had typed it themselves.
// Also used by the corporate and business screens, whose records keep the
// number under `phone` rather than `contact` - so the key is left for
// renderPhone to work out rather than hard-coded here.
function renderPhoneCell(record) {
  return renderPhone(record);
}

async function loadContacts() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getContacts(contactsFilters);
    contactsData = data.contacts;
    
    mainContent.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Enquiries</h1>
          <p class="page-subtitle">Parents who filled in a form, and the page that brought them</p>
        </div>
      </div>

      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">${data.pagination.total} enquiries</h2>
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
              <th>Phone</th>
              <th>Came from</th>
              <th>Demo slot</th>
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
                <td data-label="Name">
                  <div class="lead-name" title="${escapeHtml(contact.name)}">${escapeHtml(contact.name)}</div>
                  <div class="lead-email" title="${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</div>
                </td>
                <td data-label="Phone">
                  <div style="display:flex;align-items:center;gap:8px;justify-content:flex-end;flex-wrap:wrap">
                    ${renderPhoneCell(contact)}
                    ${renderContactActions(contact.countryCode, contact.contact, contact.email, contact.phoneE164)}
                  </div>
                </td>
                <td data-label="Came from">${renderSource(contact.attribution)}</td>
                <td data-label="Demo slot">${renderSlot(contact.demoSlot, true)}</td>
                <td data-label="Country">${renderCountryCell(contact)}</td>
                <td data-label="Status"><span class="badge badge-${escapeHtml(contact.status)}">${escapeHtml(capitalizeFirst(contact.status))}</span></td>
                <td data-label="Date" class="cell-date">${formatWhen(contact.submittedAt)}</td>
                <td data-label="Actions">
                  <div class="action-buttons">
                    <button class="btn btn-secondary btn-sm" onclick="viewContact('${contact._id}')">Open</button>
                    <button class="btn btn-secondary btn-sm" onclick="editContact('${contact._id}')">Edit</button>
                    ${can('deleteLeads')
                      ? `<button class="btn-icon btn-danger" onclick="deleteContact('${contact._id}')" title="Delete" aria-label="Delete">&times;</button>`
                      : ''}
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
        ${can('deleteLeads')
          ? '<button class="btn btn-sm btn-danger" onclick="bulkDeleteContacts()">Delete selected</button>'
          : ''}
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
    
    const attr = contact.attribution || {};

    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">${escapeHtml(contact.name)}</h2>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">

        <div class="detail-section">
          <h3>Contact</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Phone</div>
              <div class="detail-value">
                <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
                  ${renderPhoneCell(contact)}
                  ${renderContactActions(contact.countryCode, contact.contact, contact.email, contact.phoneE164)}
                </div>
              </div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Email</div>
              <div class="detail-value">${escapeHtml(contact.email)}</div>
            </div>
            ${contact.phoneWarning ? `
              <div class="detail-item" style="grid-column:1/-1">
                <div class="detail-label">Check the number</div>
                <div class="detail-value"><div class="detail-warning">⚠ ${escapeHtml(contact.phoneWarning)}</div></div>
              </div>` : ''}
            <div class="detail-item">
              <div class="detail-label">Country</div>
              <div class="detail-value">${renderCountryCell(contact)}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Status</div>
              <div class="detail-value"><span class="badge badge-${escapeHtml(contact.status)}">${escapeHtml(capitalizeFirst(contact.status))}</span></div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3>Demo slot</h3>
          <div class="detail-value">
            ${contact.demoSlot && contact.demoSlot.raw
              ? renderSlot(contact.demoSlot) +
                (contact.demoSlot.localTime
                  ? `<div class="form-hint" style="margin-top:6px">Their local time: ${escapeHtml(contact.demoSlot.localTime)}</div>`
                  : '')
              : '<span class="slot-empty">They did not pick a time. Call to arrange one.</span>'}
          </div>
        </div>

        <div class="detail-section">
          <h3>Where they came from</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Landed on</div>
              <div class="detail-value">${attr.landingPage ? `<span class="source-page">${escapeHtml(attr.landingPage)}</span>` : '<span class="source-unknown">Not recorded</span>'}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Submitted from</div>
              <div class="detail-value">${attr.formPage ? `<span class="source-page">${escapeHtml(attr.formPage)}</span>` : '<span class="source-unknown">Not recorded</span>'}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Arrived via</div>
              <div class="detail-value">${escapeHtml(CHANNEL_LABELS[attr.channel] || 'Not recorded')}${attr.referrerHost ? ' &middot; ' + escapeHtml(attr.referrerHost) : ''}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">First seen</div>
              <div class="detail-value">${attr.firstSeenAt ? escapeHtml(formatDate(attr.firstSeenAt)) : '&mdash;'}</div>
            </div>
          </div>
          ${attr.journey && attr.journey.length > 1 ? `
            <div style="margin-top:14px">
              <div class="detail-label">Pages they read before enquiring</div>
              ${renderJourney(attr.journey)}
            </div>` : ''}
        </div>

        <div class="detail-section">
          <h3>Their message</h3>
          <div class="detail-text">${escapeHtml(contact.message)}</div>
        </div>

        ${contact.notes ? `
          <div class="detail-section">
            <h3>Internal notes</h3>
            <div class="detail-text">${escapeHtml(contact.notes)}</div>
          </div>` : ''}

        <div class="detail-section">
          <h3>Record</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Submitted</div>
              <div class="detail-value">${escapeHtml(formatDate(contact.submittedAt))}</div>
            </div>
            ${contact.ipAddress ? `
            <div class="detail-item">
              <div class="detail-label">IP address</div>
              <div class="detail-value"><span class="source-page">${escapeHtml(contact.ipAddress)}</span></div>
            </div>` : ''}
          </div>
        </div>

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
            <textarea name="notes" rows="4" style="width: 100%; padding: 12px; background: var(--surface); border: 1.5px solid var(--line); border-radius: 8px; color: var(--ink); font-family: var(--font-body);">${contact.notes || ''}</textarea>
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
