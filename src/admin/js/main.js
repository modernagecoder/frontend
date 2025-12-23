/**
 * MAIN DASHBOARD CONTROLLER
 * 
 * Handles navigation, authentication, and page loading
 */

let currentPage = 'dashboard';
let adminInfo = null;

document.addEventListener('DOMContentLoaded', async () => {
  // Check authentication
  await checkAuth();
  
  // Initialize UI
  initializeUI();
  
  // Load initial page
  loadPage('dashboard');
});

/**
 * Check if user is authenticated
 */
async function checkAuth() {
  try {
    const response = await api.verifyToken();
    
    if (response.valid && response.admin) {
      adminInfo = response.admin;
      updateAdminInfo();
    } else {
      redirectToLogin();
    }
  } catch (error) {
    console.error('Auth check failed:', error);
    redirectToLogin();
  }
}

/**
 * Update admin info in header
 */
function updateAdminInfo() {
  const adminNameEl = document.getElementById('adminName');
  const adminEmailEl = document.getElementById('adminEmail');
  
  if (adminInfo) {
    const name = adminInfo.firstName && adminInfo.lastName
      ? `${adminInfo.firstName} ${adminInfo.lastName}`
      : adminInfo.username;
    
    adminNameEl.textContent = name;
    adminEmailEl.textContent = adminInfo.email;
  }
}

/**
 * Redirect to login page
 */
function redirectToLogin() {
  window.location.href = 'login.html';
}

/**
 * Initialize UI event listeners
 */
function initializeUI() {
  // Navigation items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      loadPage(page);
      
      // Update active state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Close mobile menu
      closeMobileMenu();
    });
  });
  
  // Logout button
  const logoutButton = document.getElementById('logoutButton');
  logoutButton.addEventListener('click', handleLogout);
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const sidebar = document.getElementById('sidebar');
  
  mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('open');
}

/**
 * Handle logout
 */
async function handleLogout() {
  try {
    await api.logout();
    redirectToLogin();
  } catch (error) {
    console.error('Logout error:', error);
    // Redirect anyway
    api.clearToken();
    redirectToLogin();
  }
}

/**
 * Load page content
 */
async function loadPage(page) {
  currentPage = page;
  const mainContent = document.getElementById('mainContent');
  
  // Show loading
  mainContent.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `;
  
  try {
    switch (page) {
      case 'dashboard':
        await loadDashboard();
        break;
      case 'contacts':
        await loadContacts();
        break;
      case 'users':
        await loadUsers();
        break;
     case 'corporate-training':
        await loadCorporateTraining();
        break;
      case 'business-solutions':
        await loadBusinessSolutions();
        break;
      case 'callback-requests':
        await loadCallbackRequests();
        break;
      case 'analytics':
        await loadAnalytics();
        break;
      case 'audit-logs':
        await loadAuditLogs();
        break;
      default:
        mainContent.innerHTML = '<p>Page not found</p>';
    }
  } catch (error) {
    console.error('Error loading page:', error);
    mainContent.innerHTML = `
      <div class="error-message">
        <p>Failed to load page: ${error.message}</p>
        <button class="btn btn-primary" onclick="loadPage('${page}')">Retry</button>
      </div>
    `;
  }
}

/**
 * Load dashboard page
 */
async function loadDashboard() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const data = await api.getAnalyticsSummary();
    const summary = data.summary;
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Dashboard</h1>
        <p class="page-subtitle">Welcome back, ${adminInfo.firstName || adminInfo.username}!</p>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Total Contacts</div>
          <div class="stat-value">${summary.contacts.total}</div>
          <div class="stat-trend up">↑ ${summary.trends.recentContacts} in last 7 days</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-label">New Inquiries</div>
          <div class="stat-value">${summary.contacts.new}</div>
          <div class="stat-trend info">Pending follow-up</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-label">Conversions</div>
          <div class="stat-value">${summary.contacts.converted}</div>
          <div class="stat-trend up">${summary.contacts.conversionRate}% conversion rate</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-label">Total Users</div>
          <div class="stat-value">${summary.users.total}</div>
          <div class="stat-trend up">↑ ${summary.trends.recentUsers} in last 7 days</div>
        </div>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">Quick Stats</h2>
        </div>
        <div style="padding: 24px;">
          <p><strong>Students:</strong> ${summary.users.students}</p>
          <p><strong>Teachers:</strong> ${summary.users.teachers}</p>
          <p><strong>Admins:</strong> ${summary.users.admins}</p>
          <br>
          <p><strong>Contacted:</strong> ${summary.contacts.contacted}</p>
          <p><strong>Archived:</strong> ${summary.contacts.archived}</p>
        </div>
      </div>
    `;
  } catch (error) {
    throw error;
  }
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

/**
 * Show modal
 */
function showModal(content) {
  // Remove existing modal if any
  closeModal();
  
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modalOverlay';
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = content;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', handleEscKey);
}

/**
 * Close modal
 */
function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.remove();
  }
  document.removeEventListener('keydown', handleEscKey);
}

/**
 * Handle ESC key
 */
function handleEscKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

// Make functions globally available
window.loadPage = loadPage;
window.showToast = showToast;
window.showModal = showModal;
window.closeModal = closeModal;

/**
 * Load callback requests page
 */
async function loadCallbackRequests() {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = CallbackRequestsComponent.render();
  CallbackRequestsComponent.init();
}
