/**
 * Mobile-Optimized Form Validation Utility
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5
 * 
 * Provides clear validation messages and mobile-friendly form handling
 */

class FormValidator {
  constructor(formElement) {
    this.form = formElement;
    this.inputs = this.form.querySelectorAll('input, textarea, select');
    this.init();
  }

  init() {
    // Add validation on blur for each input
    this.inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });

    // Add form submit validation
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  /**
   * Validate a single field - Requirement 9.3
   */
  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    let isValid = true;
    let message = '';

    // Clear previous validation
    this.clearFieldError(field);

    // Required field validation
    if (required && !value) {
      isValid = false;
      message = `${this.getFieldLabel(field)} is required`;
    }
    // Email validation - Requirement 9.1
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Please enter a valid email address';
      }
    }
    // Phone validation - Requirement 9.1
    else if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
        isValid = false;
        message = 'Please enter a valid phone number (at least 10 digits)';
      }
    }
    // Number validation - Requirement 9.1
    else if (type === 'number' && value) {
      const min = field.getAttribute('min');
      const max = field.getAttribute('max');
      const numValue = parseFloat(value);

      if (isNaN(numValue)) {
        isValid = false;
        message = 'Please enter a valid number';
      } else if (min !== null && numValue < parseFloat(min)) {
        isValid = false;
        message = `Value must be at least ${min}`;
      } else if (max !== null && numValue > parseFloat(max)) {
        isValid = false;
        message = `Value must be at most ${max}`;
      }
    }
    // URL validation
    else if (type === 'url' && value) {
      try {
        new URL(value);
      } catch {
        isValid = false;
        message = 'Please enter a valid URL';
      }
    }
    // Min/max length validation
    else if (value) {
      const minLength = field.getAttribute('minlength');
      const maxLength = field.getAttribute('maxlength');

      if (minLength && value.length < parseInt(minLength)) {
        isValid = false;
        message = `Must be at least ${minLength} characters`;
      } else if (maxLength && value.length > parseInt(maxLength)) {
        isValid = false;
        message = `Must be at most ${maxLength} characters`;
      }
    }

    if (!isValid) {
      this.showFieldError(field, message);
    } else if (value) {
      this.showFieldSuccess(field);
    }

    return isValid;
  }

  /**
   * Show error message for a field - Requirement 9.3
   */
  showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');

    let messageElement = field.parentElement.querySelector('.validation-message');
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.className = 'validation-message';
      field.parentElement.appendChild(messageElement);
    }

    messageElement.className = 'validation-message error';
    messageElement.textContent = message;
    messageElement.setAttribute('role', 'alert');
    messageElement.setAttribute('aria-live', 'polite');
  }

  /**
   * Show success state for a field
   */
  showFieldSuccess(field) {
    field.classList.add('success');
    field.classList.remove('error');

    const messageElement = field.parentElement.querySelector('.validation-message');
    if (messageElement) {
      messageElement.remove();
    }
  }

  /**
   * Clear error state for a field
   */
  clearFieldError(field) {
    field.classList.remove('error', 'success');

    const messageElement = field.parentElement.querySelector('.validation-message');
    if (messageElement) {
      messageElement.remove();
    }
  }

  /**
   * Get user-friendly label for a field
   */
  getFieldLabel(field) {
    const label = field.parentElement.querySelector('label');
    if (label) {
      return label.textContent.replace('*', '').trim();
    }
    return field.name || field.id || 'This field';
  }

  /**
   * Handle form submission - Requirement 9.3
   */
  handleSubmit(event) {
    event.preventDefault();

    let isFormValid = true;
    const invalidFields = [];

    // Validate all fields
    this.inputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
        invalidFields.push(input);
      }
    });

    if (!isFormValid) {
      // Focus on first invalid field
      if (invalidFields.length > 0) {
        invalidFields[0].focus();
        invalidFields[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Show general error message
      this.showFormMessage('Please correct the errors above', 'error');
      return false;
    }

    // Form is valid, proceed with submission
    this.onValidSubmit();
    return true;
  }

  /**
   * Show form-level message
   */
  showFormMessage(message, type = 'info') {
    let messageElement = this.form.querySelector('.form-message');
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.className = 'form-message';
      this.form.insertBefore(messageElement, this.form.firstChild);
    }

    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    messageElement.setAttribute('role', 'alert');
    messageElement.setAttribute('aria-live', 'polite');

    // Auto-hide after 5 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 5000);
  }

  /**
   * Override this method to handle valid form submission
   */
  onValidSubmit() {
    // Default behavior - can be overridden
    console.log('Form is valid and ready to submit');
    
    // Show success message
    this.showFormMessage('Form submitted successfully!', 'success');
    
    // Reset form after short delay
    setTimeout(() => {
      this.form.reset();
      this.inputs.forEach(input => this.clearFieldError(input));
    }, 1500);
  }
}

/**
 * Initialize form validation for all forms on the page
 */
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    new FormValidator(form);
  });
});

/**
 * Export for use in other scripts
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FormValidator;
}
