/**
 * Login Page JavaScript
 * Handles tab switching and form submission for dedicated login page
 */

(function() {
    'use strict';
    
    // API Configuration
    const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
        ? 'http://localhost:5000/api'
        : 'https://backend-modernagecoders.vercel.app/api';
    
    // DOM Elements
    const tabs = document.querySelectorAll('.login-tab');
    const forms = document.querySelectorAll('.login-form');
    const studentForm = document.getElementById('studentForm');
    const teacherForm = document.getElementById('teacherForm');
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    // Tab Switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active form
            forms.forEach(form => {
                if (form.getAttribute('data-role') === targetTab) {
                    form.classList.add('active');
                } else {
                    form.classList.remove('active');
                }
            });
        });
    });
    
    // Password Toggle
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const wrapper = this.closest('.password-wrapper');
            const input = wrapper.querySelector('input');
            const eyeOpen = this.querySelector('.eye-open');
            const eyeClosed = this.querySelector('.eye-closed');
            
            if (input.type === 'password') {
                input.type = 'text';
                eyeOpen.style.display = 'none';
                eyeClosed.style.display = 'block';
            } else {
                input.type = 'password';
                eyeOpen.style.display = 'block';
                eyeClosed.style.display = 'none';
            }
        });
    });
    
    // Form Submission Handler
    async function handleFormSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const role = form.getAttribute('data-role');
        const errorElement = form.querySelector('.error-message');
        const submitBtn = form.querySelector('.submit-btn');
        
        // Get form data
        // const username = form.querySelector('input[type="text"]').value.trim();
        // const password = form.querySelector('input[type="password"]').value;
        
    let username, password;
        
        if (role === 'student') {
            username = document.getElementById('studentUsername')?.value.trim() || '';
            password = document.getElementById('studentPassword')?.value || '';
        } else {
            username = document.getElementById('teacherUsername')?.value.trim() || '';
            password = document.getElementById('teacherPassword')?.value || '';
        }
        

        // Validate
        if (!username || !password) {
            showError(errorElement, 'Please enter both username and password');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Logging in...';
        hideError(errorElement);
        
        try {
            // Send login request
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    role: role
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Login successful
                console.log('✅ Login successful:', data);
                
                // Save auth data
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userData', JSON.stringify(data.user));
                
                // Show success message
                showSuccessMessage(`Welcome back, ${data.user.firstName || data.user.username}!`);
                
                // Redirect to dashboard after short delay
                setTimeout(() => {
                    if (role === 'teacher') {
                        window.location.href = '/src/admin/index.html';
                    } else {
                        window.location.href = 'index.html';
                    }
                }, 1500);
                
            } else {
                // Login failed
                console.error('❌ Login failed:', data);
                showError(errorElement, data.message || data.error || 'Login failed. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = role === 'teacher' ? 'Login as Teacher' : 'Login as Student';
            }
            
        } catch (error) {
            console.error('❌ Network error:', error);
            showError(errorElement, 'Unable to connect to server. Please check your connection and try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = role === 'teacher' ? 'Login as Teacher' : 'Login as Student';
        }
    }
    
    // Error Display Functions
    function showError(element, message) {
        element.textContent = message;
        element.classList.add('show');
    }
    
    function hideError(element) {
        element.classList.remove('show');
    }
    
    // Success Message
    function showSuccessMessage(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Attach form submit handlers
    studentForm.addEventListener('submit', handleFormSubmit);
    teacherForm.addEventListener('submit', handleFormSubmit);
    
    // Check if already logged in
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (userData.role === 'teacher') {
            window.location.href = '/src/admin/index.html';
        } else {
            window.location.href = 'index.html';
        }
    }
    
})();
