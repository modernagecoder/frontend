/**
 * MAIN DASHBOARD CONTROLLER
 * 
 * Handles navigation, authentication, and page loading
 */

let currentPage = 'today';
let adminInfo = null;

document.addEventListener('DOMContentLoaded', async () => {
  // Check authentication
  await checkAuth();

  // Initialize UI
  initializeUI();

  // Hide anything this account cannot use before showing the panel
  applyCapabilities();

  // Open on the work, not on statistics
  loadPage('today');
});

/**
 * Whether the signed-in account holds a capability.
 * Sub-admins lack 'deleteLeads' and 'manageTeam'.
 *
 * This is for presentation only. Every one of these is independently enforced
 * by the server, so a hidden button is tidiness rather than security.
 */
function can(capability) {
  return !!(adminInfo && adminInfo.capabilities && adminInfo.capabilities[capability]);
}

/**
 * Removes nav entries this account has no access to, so a sub-admin does not
 * click into a screen that can only answer 403.
 */
function applyCapabilities() {
  document.querySelectorAll('.nav-item[data-requires]').forEach(item => {
    if (!can(item.dataset.requires)) item.remove();
  });
}

window.can = can;

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

    // Show sub-admins which kind of account they are on, so the absence of
    // delete and team controls reads as intended rather than as a fault.
    if (adminInfo.role === 'subadmin') {
      const chip = document.createElement('span');
      chip.className = 'role-chip';
      chip.textContent = 'Sub-admin';
      adminNameEl.appendChild(chip);
    }
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
      case 'today':
        mainContent.innerHTML = TodayComponent.render();
        await TodayComponent.init();
        break;
      case 'lead-sources':
        mainContent.innerHTML = LeadSourcesComponent.render();
        await LeadSourcesComponent.init();
        break;
      case 'team':
        // Guarded here as well as in the nav, in case someone reaches this by
        // another route. The server refuses regardless.
        if (!can('manageTeam')) {
          mainContent.innerHTML = '<div class="error-message">Only an admin can manage staff accounts.</div>';
          break;
        }
        mainContent.innerHTML = TeamComponent.render();
        await TeamComponent.init();
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
