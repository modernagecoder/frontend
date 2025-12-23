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
                <h1>📞 Callback Requests</h1>
                <p>Manage phone callback requests from visitors</p>
            </div>
            
            <div class="stats-row" id="callbackStats">
                <div class="stat-card pending">
                    <div class="stat-icon">🔔</div>
                    <div class="stat-info">
                        <span class="stat-value" id="pendingCount">-</span>
                        <span class="stat-label">Pending</span>
                    </div>
                </div>
            </div>
            
            <div class="filters-bar">
                <div class="filter-group">
                    <label>Status:</label>
                    <select id="statusFilter" class="filter-select">
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="called">Called</option>
                        <option value="no-answer">No Answer</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="CallbackRequestsComponent.loadRequests()">
                    🔄 Refresh
                </button>
            </div>
            
            <div class="data-table-container">
                <table class="data-table" id="callbackTable">
                    <thead>
                        <tr>
                            <th>Phone Number</th>
                            <th>Status</th>
                            <th>Requested At</th>
                            <th>Called At</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="callbackTableBody">
                        <tr>
                            <td colspan="6" class="loading-cell">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="pagination" id="callbackPagination"></div>
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
        
        tbody.innerHTML = '<tr><td colspan="6" class="loading-cell">Loading...</td></tr>';
        
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
                tbody.innerHTML = '<tr><td colspan="6" class="error-cell">Failed to load requests</td></tr>';
            }
        } catch (error) {
            console.error('Error loading callback requests:', error);
            tbody.innerHTML = '<tr><td colspan="6" class="error-cell">Error loading requests</td></tr>';
        }
    },
    
    // Render table rows
    renderTable: function(requests) {
        const tbody = document.getElementById('callbackTableBody');
        if (!tbody) return;
        
        if (!requests || requests.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="empty-cell">No callback requests found</td></tr>';
            return;
        }
        
        tbody.innerHTML = requests.map(req => `
            <tr data-id="${req._id}">
                <td>
                    <a href="tel:${req.phone}" class="phone-link">
                        📱 ${this.formatPhone(req.phone)}
                    </a>
                </td>
                <td>
                    <span class="status-badge status-${req.status}">${this.formatStatus(req.status)}</span>
                </td>
                <td>${this.formatDate(req.requestedAt)}</td>
                <td>${req.calledAt ? this.formatDate(req.calledAt) : '-'}</td>
                <td class="notes-cell">${req.notes || '-'}</td>
                <td class="actions-cell">
                    <div class="action-buttons">
                        <a href="tel:${req.phone}" class="btn btn-sm btn-success" title="Call Now">
                            📞 Call
                        </a>
                        <select class="status-select" onchange="CallbackRequestsComponent.updateStatus('${req._id}', this.value)">
                            <option value="pending" ${req.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="called" ${req.status === 'called' ? 'selected' : ''}>Called</option>
                            <option value="no-answer" ${req.status === 'no-answer' ? 'selected' : ''}>No Answer</option>
                            <option value="completed" ${req.status === 'completed' ? 'selected' : ''}>Completed</option>
                        </select>
                        <button class="btn btn-sm btn-secondary" onclick="CallbackRequestsComponent.addNote('${req._id}')" title="Add Note">
                            📝
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="CallbackRequestsComponent.deleteRequest('${req._id}')" title="Delete">
                            🗑️
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
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
