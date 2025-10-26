/**
 * CLIENT-SIDE AUTHENTICATION LOGIC
 * 
 * This file handles all authentication-related functionality on the frontend:
 * - Opening/closing login modal
 * - Submitting login credentials to backend
 * - Storing JWT tokens
 * - Updating UI based on authentication status
 * - Handling logout
 * 
 * HOW IT WORKS:
 * 1. User clicks "Student Login" or "Teacher Login"
 * 2. Modal opens with appropriate title
 * 3. User enters credentials and submits
 * 4. JavaScript sends request to backend API
 * 5. If successful, stores token and updates UI
 * 6. If failed, shows error message
 */

// ============================================
// CONFIGURATION
// ============================================

/**
 * API Base URL
 * Change this to your backend server URL
 * 
 * Development: http://localhost:5000
 * Production: https://your-domain.com
 */
const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
    ? 'http://localhost:5000/api'
    : 'https://backend-modernagecoders.vercel.app/api';


// ============================================
// DOM ELEMENTS
// ============================================

/**
 * Get references to HTML elements
 * We'll use these throughout the code
 */
const authModalOverlay = document.getElementById('authModalOverlay');
const authModal = document.querySelector('.auth-modal');
const authModalTitle = document.getElementById('authModalTitle');
const authModalClose = document.getElementById('authModalClose');
const authForm = document.getElementById('authForm');
const authRole = document.getElementById('authRole');
const authUsername = document.getElementById('authUsername');
const authPassword = document.getElementById('authPassword');
const authPasswordToggle = document.getElementById('authPasswordToggle');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const authErrorMessage = document.getElementById('authErrorMessage');
const authErrorText = document.getElementById('authErrorText');

// ============================================
// MODAL FUNCTIONS
// ============================================

/**
 * OPEN LOGIN MODAL
 * 
 * Opens the login modal for specified role (student or teacher)
 * 
 * @param {string} role - Either 'student' or 'teacher'
 * 
 * Example usage:
 * openLoginModal('student');  // Opens modal for student login
 * openLoginModal('teacher');  // Opens modal for teacher login
 */
function openLoginModal(role) {
    // Set the role in hidden input field
    authRole.value = role;
    
    // Update modal title based on role
    if (role === 'teacher') {
        authModalTitle.textContent = 'Teacher Login';
    } else {
        authModalTitle.textContent = 'Student Login';
    }
    
    // Clear any previous form data
    authForm.reset();
    hideError();
    
    // Show the modal with animation
    authModalOverlay.classList.add('active');
    document.body.classList.add('modal-open');  // Prevent body scroll
    
    // Focus on username input for better UX
    setTimeout(() => {
        authUsername.focus();
    }, 300);
}

/**
 * CLOSE LOGIN MODAL
 * 
 * Closes the login modal and resets form
 */
function closeLoginModal() {
    // Hide modal with animation
    authModalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');  // Re-enable body scroll
    
    // Reset form after animation completes
    setTimeout(() => {
        authForm.reset();
        hideError();
    }, 300);
}

// ============================================
// ERROR HANDLING
// ============================================

/**
 * SHOW ERROR MESSAGE
 * 
 * Displays an error message in the modal
 * 
 * @param {string} message - Error message to display
 */
function showError(message) {
    authErrorText.textContent = message;
    authErrorMessage.style.display = 'flex';
}

/**
 * HIDE ERROR MESSAGE
 * 
 * Hides the error message
 */
function hideError() {
    authErrorMessage.style.display = 'none';
}

// ============================================
// LOADING STATE
// ============================================

/**
 * SET LOADING STATE
 * 
 * Shows/hides loading spinner on submit button
 * 
 * @param {boolean} isLoading - True to show loading, false to hide
 */
function setLoading(isLoading) {
    const btnText = authSubmitBtn.querySelector('.auth-btn-text');
    const btnLoader = authSubmitBtn.querySelector('.auth-btn-loader');
    
    if (isLoading) {
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        authSubmitBtn.disabled = true;
    } else {
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
        authSubmitBtn.disabled = false;
    }
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

/**
 * HANDLE LOGIN
 * 
 * Submits login credentials to backend API
 * 
 * @param {Event} event - Form submit event
 */
async function handleLogin(event) {
    // Prevent default form submission (page reload)
    event.preventDefault();
    
    // Hide any previous errors
    hideError();
    
    // Show loading state
    setLoading(true);
    
    // Get form data
    const username = authUsername.value.trim();
    const password = authPassword.value;
    const role = authRole.value;
    
    // Validate inputs
    if (!username || !password) {
        showError('Please enter both username and password');
        setLoading(false);
        return;
    }
    
    try {
        /**
         * SEND LOGIN REQUEST TO BACKEND
         * 
         * fetch() is a modern way to make HTTP requests
         * It returns a Promise that resolves to the response
         */
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',  // HTTP method
            headers: {
                'Content-Type': 'application/json'  // Tell server we're sending JSON
            },
            body: JSON.stringify({  // Convert JavaScript object to JSON string
                username: username,
                password: password,
                role: role
            })
        });
        
        /**
         * PARSE RESPONSE
         * 
         * response.json() converts JSON string to JavaScript object
         */
        const data = await response.json();
        
        /**
         * CHECK IF LOGIN WAS SUCCESSFUL
         * 
         * HTTP status codes:
         * - 200: Success
         * - 401: Unauthorized (wrong credentials)
         * - 500: Server error
         */
        if (response.ok) {
            // Login successful!
            console.log('✅ Login successful:', data);
            
            // Save authentication data
            saveAuthData(data.token, data.user);
            
            // Update UI to show logged-in state
            updateUIForLoggedInUser(data.user);
            
            // Close modal
            closeLoginModal();
            
            // Show success message (optional)
            showSuccessNotification(`Welcome back, ${data.user.firstName || data.user.username}!`);
            
        } else {
            // Login failed
            console.error('❌ Login failed:', data);
            
            // Show error message from server
            showError(data.message || data.error || 'Login failed. Please try again.');
        }
        
    } catch (error) {
        /**
         * HANDLE NETWORK ERRORS
         * 
         * This catches errors like:
         * - Server is down
         * - No internet connection
         * - CORS issues
         */
        console.error('❌ Network error:', error);
        
        showError('Unable to connect to server. Please check your connection and try again.');
        
    } finally {
        // Always hide loading state, whether success or failure
        setLoading(false);
    }
}

/**
 * SAVE AUTHENTICATION DATA
 * 
 * Stores JWT token and user data in browser's localStorage
 * 
 * @param {string} token - JWT token from backend
 * @param {object} user - User data object
 * 
 * WHAT IS LOCALSTORAGE?
 * localStorage is a way to store data in the browser that persists
 * even after closing the browser. It's perfect for storing auth tokens.
 * 
 * Data is stored as key-value pairs:
 * - Key: 'authToken'
 * - Value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
 */
function saveAuthData(token, user) {
    // Store token
    localStorage.setItem('authToken', token);
    
    // Store user data as JSON string
    localStorage.setItem('userData', JSON.stringify(user));
    
    console.log('💾 Auth data saved to localStorage');
}

/**
 * GET AUTHENTICATION DATA
 * 
 * Retrieves stored token and user data from localStorage
 * 
 * @returns {object} Object with token and user data, or null if not logged in
 */
function getAuthData() {
    const token = localStorage.getItem('authToken');
    const userDataString = localStorage.getItem('userData');
    
    if (!token || !userDataString) {
        return null;
    }
    
    try {
        const user = JSON.parse(userDataString);
        return { token, user };
    } catch (error) {
        console.error('❌ Error parsing user data:', error);
        return null;
    }
}

/**
 * CLEAR AUTHENTICATION DATA
 * 
 * Removes token and user data from localStorage
 * Called during logout
 */
function clearAuthData() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    console.log('🗑️  Auth data cleared from localStorage');
}

// ============================================
// UI UPDATE FUNCTIONS
// ============================================

/**
 * UPDATE UI FOR LOGGED-IN USER
 * 
 * Changes navigation to show user's name and logout option
 * 
 * @param {object} user - User data object
 */
function updateUIForLoggedInUser(user) {
    // Find the login dropdown in navigation
    const loginDropdown = document.querySelector('.nav-item.dropdown .nav-link.login-btn');
    const dropdownContent = loginDropdown?.nextElementSibling;
    
    if (loginDropdown && dropdownContent) {
        // Change "Login" to user's name
        const displayName = user.firstName || user.username;
        loginDropdown.innerHTML = `Welcome, ${displayName}`;
        
        // Update dropdown content
        dropdownContent.innerHTML = `
            <a href="#" class="dropdown-item" onclick="navigateToDashboard('${user.role}'); return false;">
                <svg style="width: 16px; height: 16px; margin-right: 8px; display: inline-block; vertical-align: middle;" 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
            </a>
            <a href="#" class="dropdown-item" onclick="handleLogout(); return false;">
                <svg style="width: 16px; height: 16px; margin-right: 8px; display: inline-block; vertical-align: middle;" 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </a>
        `;
    }
}

/**
 * UPDATE UI FOR LOGGED-OUT USER
 * 
 * Resets navigation to show login options
 */
function updateUIForLoggedOutUser() {
    // Find the login dropdown in navigation
    const loginDropdown = document.querySelector('.nav-item.dropdown .nav-link.login-btn');
    const dropdownContent = loginDropdown?.nextElementSibling;
    
    if (loginDropdown && dropdownContent) {
        // Reset to "Login"
        loginDropdown.textContent = 'Login';
        
        // Reset dropdown content
        dropdownContent.innerHTML = `
            <a href="#" class="dropdown-item" onclick="openLoginModal('student'); return false;">Student Login</a>
            <a href="#" class="dropdown-item" onclick="openLoginModal('teacher'); return false;">Teacher Login</a>
        `;
    }
}

// ============================================
// LOGOUT FUNCTION
// ============================================

/**
 * HANDLE LOGOUT
 * 
 * Logs out the user and updates UI
 */
async function handleLogout() {
    try {
        // Get auth data
        const authData = getAuthData();
        
        if (authData) {
            /**
             * OPTIONAL: Notify backend about logout
             * This is optional because JWT tokens can't be invalidated server-side
             * But it's good for logging/analytics
             */
            try {
                await fetch(`${API_BASE_URL}/auth/logout`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${authData.token}`
                    }
                });
            } catch (error) {
                console.log('Note: Could not notify server about logout');
            }
        }
        
        // Clear stored auth data
        clearAuthData();
        
        // Update UI
        updateUIForLoggedOutUser();
        
        // Show logout message
        showSuccessNotification('Logged out successfully');
        
        console.log('✅ Logged out successfully');
        
    } catch (error) {
        console.error('❌ Logout error:', error);
        
        // Even if there's an error, clear local data
        clearAuthData();
        updateUIForLoggedOutUser();
    }
}

// ============================================
// SESSION VERIFICATION
// ============================================

/**
 * CHECK AUTHENTICATION STATUS
 * 
 * Verifies if user is logged in when page loads
 * Checks if stored token is still valid
 */
async function checkAuthStatus() {
    const authData = getAuthData();
    
    if (!authData) {
        // No auth data stored, user is not logged in
        return;
    }
    
    try {
        /**
         * VERIFY TOKEN WITH BACKEND
         * 
         * Send token to backend to check if it's still valid
         */
        const response = await fetch(`${API_BASE_URL}/auth/verify`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authData.token}`
            }
        });
        
        if (response.ok) {
            // Token is valid, user is still logged in
            const data = await response.json();
            console.log('✅ Session valid:', data.user.username);
            
            // Update UI to show logged-in state
            updateUIForLoggedInUser(data.user);
            
            // Update stored user data (in case it changed)
            localStorage.setItem('userData', JSON.stringify(data.user));
            
        } else {
            // Token is invalid or expired
            console.log('⚠️  Session expired or invalid');
            
            // Clear auth data and update UI
            clearAuthData();
            updateUIForLoggedOutUser();
        }
        
    } catch (error) {
        console.error('❌ Error verifying session:', error);
        
        // On error, assume session is invalid
        clearAuthData();
        updateUIForLoggedOutUser();
    }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * NAVIGATE TO DASHBOARD
 * 
 * Placeholder function for dashboard navigation
 * 
 * @param {string} role - User role (student/teacher)
 */
function navigateToDashboard(role) {
    // TODO: Implement dashboard pages
    alert(`Dashboard for ${role}s coming soon!`);
    console.log(`Navigate to ${role} dashboard`);
}

/**
 * SHOW SUCCESS NOTIFICATION
 * 
 * Displays a success message to user
 * 
 * @param {string} message - Success message to display
 */
function showSuccessNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    notification.querySelector('svg').style.cssText = `
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * FORM SUBMIT EVENT
 * Handles login form submission
 */
authForm.addEventListener('submit', handleLogin);

/**
 * CLOSE BUTTON CLICK
 * Closes modal when X button is clicked
 */
authModalClose.addEventListener('click', closeLoginModal);

/**
 * OVERLAY CLICK
 * Closes modal when clicking outside the modal box
 */
authModalOverlay.addEventListener('click', (event) => {
    // Only close if clicking on overlay, not on modal itself
    if (event.target === authModalOverlay) {
        closeLoginModal();
    }
});

/**
 * ESCAPE KEY
 * Closes modal when pressing Escape key
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && authModalOverlay.classList.contains('active')) {
        closeLoginModal();
    }
});

/**
 * PASSWORD TOGGLE
 * Shows/hides password when clicking eye icon
 */
authPasswordToggle.addEventListener('click', () => {
    const eyeOpen = authPasswordToggle.querySelector('.eye-open');
    const eyeClosed = authPasswordToggle.querySelector('.eye-closed');
    
    if (authPassword.type === 'password') {
        authPassword.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        authPassword.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
});

// ============================================
// INITIALIZATION
// ============================================

/**
 * CHECK AUTH STATUS ON PAGE LOAD
 * Verifies if user is already logged in
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔐 Authentication system initialized');
    checkAuthStatus();
});

// ============================================
// EXPORT FUNCTIONS (for use in HTML onclick)
// ============================================

/**
 * Make functions available globally
 * This allows us to call them from HTML onclick attributes
 */
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLogout = handleLogout;
window.navigateToDashboard = navigateToDashboard;
