/**
 * USERS MANAGEMENT COMPONENT
 */

let usersData = [];
let usersFilters = {
  role: 'all',
  search: '',
  page: 1,
  limit: 20
};

async function loadUsers() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getUsers(usersFilters);
    usersData = data.users;
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Users Management</h1>
        <p class="page-subtitle">Manage registered users and accounts</p>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">All Users (${data.pagination.total})</h2>
          <div class="table-actions">
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input type="text" placeholder="Search users..." id="userSearch" value="${usersFilters.search}">
            </div>
            <select class="filter-select" id="roleFilter">
              <option value="all" ${usersFilters.role === 'all' ? 'selected' : ''}>All Roles</option>
              <option value="student" ${usersFilters.role === 'student' ? 'selected' : ''}>Students</option>
              <option value="teacher" ${usersFilters.role === 'teacher' ? 'selected' : ''}>Teachers</option>
              <option value="admin" ${usersFilters.role === 'admin' ? 'selected' : ''}>Admins</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="exportUsers()">Export CSV</button>
          </div>
        </div>
        
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="selectAll"></th>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Registered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${usersData.map(user => `
              <tr>
                <td><input type="checkbox" class="user-checkbox" value="${user._id}"></td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.firstName || ''} ${user.lastName || ''}</td>
                <td><span class="badge badge-${user.role}">${capitalizeFirst(user.role)}</span></td>
                <td>${formatDateShort(user.createdAt)}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-icon" onclick="viewUser('${user._id}')">👁️</button>
                    <button class="btn-icon" onclick="editUser('${user._id}')">✏️</button>
                    <button class="btn-icon btn-danger" onclick="deleteUser('${user._id}')">🗑️</button>
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
            <button class="pagination-btn" ${data.pagination.page === 1 ? 'disabled' : ''} onclick="changeUsersPage(${data.pagination.page - 1})">Previous</button>
            <button class="pagination-btn active">${data.pagination.page}</button>
            <button class="pagination-btn" ${data.pagination.page === data.pagination.pages ? 'disabled' : ''} onclick="changeUsersPage(${data.pagination.page + 1})">Next</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    document.getElementById('userSearch').addEventListener('input', debounce(handleUserSearch, 500));
    document.getElementById('roleFilter').addEventListener('change', handleRoleFilter);
    
    // Bulk selection
    document.getElementById('selectAll').addEventListener('change', handleSelectAllUsers);
    document.querySelectorAll('.user-checkbox').forEach(cb => {
      cb.addEventListener('change', updateUserBulkActions);
    });
    
    updateUserBulkActions();
    
  } catch (error) {
    throw error;
  }
}

function handleSelectAllUsers(e) {
  const checkboxes = document.querySelectorAll('.user-checkbox');
  checkboxes.forEach(cb => cb.checked = e.target.checked);
  updateUserBulkActions();
}

function updateUserBulkActions() {
  const selected = document.querySelectorAll('.user-checkbox:checked');
  const tableHeader = document.querySelector('.table-header');
  
  let bulkToolbar = document.querySelector('.bulk-actions');
  
  if (selected.length > 0) {
    if (!bulkToolbar) {
      bulkToolbar = document.createElement('div');
      bulkToolbar.className = 'bulk-actions';
      tableHeader.parentNode.insertBefore(bulkToolbar, tableHeader.nextSibling);
    }
    
    bulkToolbar.innerHTML = `
      <div class="bulk-actions-info">${selected.length} user(s) selected</div>
      <div class="bulk-actions-buttons">
        <button class="btn btn-sm btn-danger" onclick="bulkDeleteUsers()">Delete Selected</button>
      </div>
    `;
  } else if (bulkToolbar) {
    bulkToolbar.remove();
  }
}

async function bulkDeleteUsers() {
  const selected = Array.from(document.querySelectorAll('.user-checkbox:checked')).map(cb => cb.value);
  
  if (!confirm(`Are you sure you want to delete ${selected.length} user(s)? Admin accounts will be skipped.`)) return;
  
  try {
    const result = await api.bulkDeleteUsers(selected);
    showToast(`Deleted ${result.deleted} user(s)${result.skipped > 0 ? `, skipped ${result.skipped}` : ''}`, 'success');
    loadUsers();
  } catch (error) {
    showToast('Bulk delete failed: ' + error.message, 'error');
  }
}

function handleUserSearch(e) {
  usersFilters.search = e.target.value;
  usersFilters.page = 1;
  loadUsers();
}

function handleRoleFilter(e) {
  usersFilters.role = e.target.value;
  usersFilters.page = 1;
  loadUsers();
}

function changeUsersPage(page) {
  usersFilters.page = page;
  loadUsers();
}

async function deleteUser(id) {
  if (!confirm('Are you sure you want to delete this user?')) return;
  
  try {
    await api.deleteUser(id);
    showToast('User deleted successfully', 'success');
    loadUsers();
  } catch (error) {
    showToast('Failed to delete user: ' + error.message, 'error');
  }
}

function exportUsers() {
  try {
    const csv = [
      ['Username', 'Email', 'First Name', 'Last Name', 'Role', 'Registered', 'Last Login'].join(','),
      ...usersData.map(u => [
        u.username,
        u.email,
        u.firstName || '',
        u.lastName || '',
        u.role,
        formatDateShort(u.createdAt),
        u.lastLogin ? formatDateShort(u.lastLogin) : 'Never'
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast('Export successful', 'success');
  } catch (error) {
    showToast('Export failed: ' + error.message, 'error');
  }
}

async function viewUser(id) {
  try {
    const data = await api.getUser(id);
    const user = data.user;
    
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">User Details</h2>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>First Name:</strong> ${user.firstName || 'N/A'}</p>
        <p><strong>Last Name:</strong> ${user.lastName || 'N/A'}</p>
        <p><strong>Role:</strong> <span class="badge badge-${user.role}">${capitalizeFirst(user.role)}</span></p>
        <p><strong>Registered:</strong> ${formatDate(user.createdAt)}</p>
        <p><strong>Last Login:</strong> ${user.lastLogin ? formatDate(user.lastLogin) : 'Never'}</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="closeModal(); editUser('${id}')">Edit</button>
      </div>
    `);
  } catch (error) {
    showToast('Failed to load user: ' + error.message, 'error');
  }
}

async function editUser(id) {
  try {
    const data = await api.getUser(id);
    const user = data.user;
    
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">Edit User</h2>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <form id="editUserForm">
          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" value="${user.username}" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" value="${user.email}" required>
          </div>
          <div class="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value="${user.firstName || ''}">
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value="${user.lastName || ''}">
          </div>
          <div class="form-group">
            <label>Role</label>
            <select name="role" class="filter-select" style="width: 100%;">
              <option value="student" ${user.role === 'student' ? 'selected' : ''}>Student</option>
              <option value="teacher" ${user.role === 'teacher' ? 'selected' : ''}>Teacher</option>
              <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveUserEdit('${id}')">Save Changes</button>
      </div>
    `);
  } catch (error) {
    showToast('Failed to load user: ' + error.message, 'error');
  }
}

async function saveUserEdit(id) {
  const form = document.getElementById('editUserForm');
  const formData = new FormData(form);
  const updates = {
    username: formData.get('username'),
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    role: formData.get('role')
  };
  
  try {
    await api.updateUser(id, updates);
    showToast('User updated successfully', 'success');
    closeModal();
    loadUsers();
  } catch (error) {
    showToast('Failed to update user: ' + error.message, 'error');
  }
}

window.loadUsers = loadUsers;
window.deleteUser = deleteUser;
window.viewUser = viewUser;
window.editUser = editUser;
window.saveUserEdit = saveUserEdit;
window.changeUsersPage = changeUsersPage;
window.exportUsers = exportUsers;
window.bulkDeleteUsers = bulkDeleteUsers;
