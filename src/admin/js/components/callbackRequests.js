/**
 * CALLBACK REQUESTS COMPONENT
 * Admin panel component for managing callback requests
 */

const CallbackRequestsComponent = {
    currentPage: 1,
    currentStatus: 'all',
    
    // Render the callback requests page
    render: function() {
        return `
            <div class="page-header">
                <div>
                    <h1 class="page-title">Callbacks</h1>
                    <p class="page-subtitle">People who asked to be rung back, and the page they asked from</p>
                </div>
            </div>

            <div class="stats-grid" id="callbackStats">
                <div class="stat-card">
                    <div class="stat-label">Waiting for a call</div>
                    <div class="stat-value" id="pendingCount">-</div>
                    <div class="stat-trend info">Ring these first</div>
                </div>
            </div>

            <div class="table-container">
              <div class="filters-bar">
                <div class="filter-group">
                    <label for="statusFilter">Status</label>
                    <select id="statusFilter" class="filter-select">
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="called">Called</option>
                        <option value="no-answer">No answer</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="CallbackRequestsComponent.loadRequests()">Refresh</button>
              </div>
            
            <div class="data-table-container">
                <table class="data-table" id="callbackTable">
                    <thead>
                        <tr>
                            <th>Phone number</th>
                            <th>Came from</th>
                            <th>Demo slot</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Requested</th>
                            <th>Called</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="callbackTableBody">
                        <tr>
                            <td colspan="9" class="loading-cell">Loading</td>
                        </tr>
                    </tbody>
                </table>
              </div>

              <div class="pagination" id="callbackPagination"></div>
            </div>
        `;
    },
    
    // Initialize the component
    init: function() {
        this.currentPage = 1;
        this.currentStatus = 'all';
        
        // Add event listener for status filter
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.currentStatus = e.target.value;
                this.currentPage = 1;
                this.loadRequests();
            });
        }
        
        this.loadRequests();
    },
    
    // Load callback requests from API
    loadRequests: async function() {
        const tbody = document.getElementById('callbackTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '<tr><td colspan="9" class="loading-cell">Loading</td></tr>';
        
        try {
            const token = localStorage.getItem('adminToken');
            const params = new URLSearchParams({
                page: this.currentPage,
                limit: 20,
                status: this.currentStatus
            });
            
            const response = await fetch(`${API_BASE_URL}/admin/callback-requests?${params}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.renderTable(data.requests);
                this.renderPagination(data.pagination);
                
                // Update pending count
                const pendingCount = document.getElementById('pendingCount');
                if (pendingCount) {
                    pendingCount.textContent = data.pendingCount || 0;
                }
            } else {
                tbody.innerHTML = '<tr><td colspan="9" class="error-cell">Could not load callback requests</td></tr>';
            }
        } catch (error) {
            console.error('Error loading callback requests:', error);
            tbody.innerHTML = '<tr><td colspan="9" class="error-cell">Could not load callback requests</td></tr>';
        }
    },
    
    // Render table rows
    renderTable: function(requests) {
        const tbody = document.getElementById('callbackTableBody');
        if (!tbody) return;
        
        if (!requests || requests.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" class="empty-cell"><div class="empty-state"><strong>No callback requests yet</strong><span>Requests from the call-back pop-up appear here.</span></div></td></tr>';
            return;
        }

        tbody.innerHTML = requests.map(req => {
            const iso = (req.countryIso || '').toUpperCase();
            const dial = req.countryCode || '';
            const cName = req.countryName || '';
            const hasCountry = !!(iso || dial || cName);
            const flag = iso && iso.length === 2
                ? iso.replace(/./g, c => String.fromCodePoint(0x1F1A5 + c.charCodeAt(0)))
                : '🌍';
            const isIndia = iso === 'IN';
            const badgeCls = !hasCountry
                ? 'country-badge country-badge--unknown'
                : (isIndia ? 'country-badge country-badge--india' : 'country-badge country-badge--foreign');
            const badgeText = !hasCountry
                ? '— Unknown'
                : `<span class="country-flag">${flag}</span> ${cName || iso}${iso ? ` <small>(${iso})</small>` : ''}`;
            return `
            <tr data-id="${req._id}">
                <td data-label="Phone number">
                    <div style="display:flex;align-items:center;gap:10px;justify-content:flex-end;flex-wrap:wrap">
                        <a href="tel:${dial}${req.phone}" class="phone-link">
                            <span class="phone-with-code"><span class="dial">${dial}</span>${this.formatPhone(req.phone)}</span>
                        </a>
                        ${renderContactActions(req.countryCode, req.phone, null)}
                    </div>
                </td>
                <td data-label="Came from">${renderSource(req.attribution)}</td>
                <td data-label="Demo slot">${renderSlot(req.demoSlot, true)}</td>
                <td data-label="Country"><span class="${badgeCls}" title="${escapeHtml(cName || 'Unknown')}">${badgeText}</span></td>
                <td data-label="Status">
                    <span class="status-badge status-${req.status}">${this.formatStatus(req.status)}</span>
                </td>
                <td data-label="Requested" class="cell-date">${this.formatDate(req.requestedAt)}</td>
                <td data-label="Called" class="cell-date">${req.calledAt ? this.formatDate(req.calledAt) : '—'}</td>
                <td data-label="Notes" class="notes-cell">${escapeHtml(req.notes || '—')}</td>
                <td data-label="Actions" class="actions-cell">
                    <div class="action-buttons">
                        <select class="status-select" onchange="CallbackRequestsComponent.updateStatus('${req._id}', this.value)">
                            <option value="pending" ${req.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="called" ${req.status === 'called' ? 'selected' : ''}>Called</option>
                            <option value="no-answer" ${req.status === 'no-answer' ? 'selected' : ''}>No answer</option>
                            <option value="completed" ${req.status === 'completed' ? 'selected' : ''}>Completed</option>
                        </select>
                        <button class="btn btn-sm btn-secondary" onclick="CallbackRequestsComponent.addNote('${req._id}')">Note</button>
                        ${can('deleteLeads')
                            ? `<button class="btn-icon btn-danger" onclick="CallbackRequestsComponent.deleteRequest('${req._id}')" title="Delete" aria-label="Delete">&times;</button>`
                            : ''}
                    </div>
                </td>
            </tr>
        `;
        }).join('');
    },
    
    // Render pagination
    renderPagination: function(pagination) {
        const container = document.getElementById('callbackPagination');
        if (!container || !pagination) return;
        
        if (pagination.pages <= 1) {
            container.innerHTML = '';
            return;
        }
        
        let html = '';
        
        if (pagination.page > 1) {
            html += `<button class="btn btn-sm" onclick="CallbackRequestsComponent.goToPage(${pagination.page - 1})">← Prev</button>`;
        }
        
        html += `<span class="page-info">Page ${pagination.page} of ${pagination.pages}</span>`;
        
        if (pagination.page < pagination.pages) {
            html += `<button class="btn btn-sm" onclick="CallbackRequestsComponent.goToPage(${pagination.page + 1})">Next →</button>`;
        }
        
        container.innerHTML = html;
    },
    
    // Go to specific page
    goToPage: function(page) {
        this.currentPage = page;
        this.loadRequests();
    },
    
    // Update request status
    updateStatus: async function(id, status) {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`${API_BASE_URL}/admin/callback-requests/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showToast('Status updated', 'success');
                this.loadRequests();
            } else {
                showToast('Failed to update status', 'error');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            showToast('Error updating status', 'error');
        }
    },
    
    // Add note to request
    addNote: async function(id) {
        const note = prompt('Enter note for this callback request:');
        if (note === null) return;
        
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`${API_BASE_URL}/admin/callback-requests/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notes: note })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showToast('Note added', 'success');
                this.loadRequests();
            } else {
                showToast('Failed to add note', 'error');
            }
        } catch (error) {
            console.error('Error adding note:', error);
            showToast('Error adding note', 'error');
        }
    },
    
    // Delete request
    deleteRequest: async function(id) {
        if (!confirm('Are you sure you want to delete this callback request?')) return;
        
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`${API_BASE_URL}/admin/callback-requests/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                showToast('Request deleted', 'success');
                this.loadRequests();
            } else {
                showToast('Failed to delete request', 'error');
            }
        } catch (error) {
            console.error('Error deleting request:', error);
            showToast('Error deleting request', 'error');
        }
    },
    
    // Format phone number
    formatPhone: function(phone) {
        if (!phone) return '-';
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    },
    
    // Format status
    formatStatus: function(status) {
        const statusMap = {
            'pending': '🔔 Pending',
            'called': '📞 Called',
            'no-answer': '❌ No Answer',
            'completed': '✅ Completed'
        };
        return statusMap[status] || status;
    },
    
    // Format date
    formatDate: function(dateStr) {
        if (!dateStr) return '-';
        const date = new Date(dateStr);
        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
};

// Make it globally available
window.CallbackRequestsComponent = CallbackRequestsComponent;
