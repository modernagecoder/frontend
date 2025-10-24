/**
 * AUTHENTICATION HANDLER
 * 
 * Handles login form submission and authentication
 */

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');
  const loginButton = document.getElementById('loginButton');
  const errorMessage = document.getElementById('errorMessage');
  
  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      
      const showIcon = togglePassword.querySelector('.show-icon');
      const hideIcon = togglePassword.querySelector('.hide-icon');
      
      if (type === 'text') {
        showIcon.style.display = 'none';
        hideIcon.style.display = 'inline';
      } else {
        showIcon.style.display = 'inline';
        hideIcon.style.display = 'none';
      }
    });
  }
  
  // Handle form submission
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      
      // Validate inputs
      if (!email || !password) {
        showError('Please enter both email and password');
        return;
      }
      
      // Show loading state
      setLoading(true);
      hideError();
      
      try {
        // Call login API
        const response = await api.login(email, password);
        
        // Store admin info
        if (response.admin) {
          localStorage.setItem('adminInfo', JSON.stringify(response.admin));
        }
        
        // Redirect to dashboard
        window.location.href = 'index.html';
        
      } catch (error) {
        console.error('Login error:', error);
        showError(error.message || 'Login failed. Please check your credentials.');
        setLoading(false);
      }
    });
  }
  
  function setLoading(loading) {
    const btnText = loginButton.querySelector('.btn-text');
    const btnLoader = loginButton.querySelector('.btn-loader');
    
    if (loading) {
      btnText.style.display = 'none';
      btnLoader.style.display = 'inline-flex';
      loginButton.disabled = true;
    } else {
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      loginButton.disabled = false;
    }
  }
  
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
  
  function hideError() {
    errorMessage.style.display = 'none';
  }
});
