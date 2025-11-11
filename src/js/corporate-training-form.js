// // Corporate Training Form Handler
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Corporate training form script loaded');
    
//     const form = document.getElementById('corporateTrainingForm');
    
//     if (!form) {
//         console.log('Form not found!');
//         return;
//     }
    
//     console.log('Form found:', form);

//     // Form submission handler
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData.entries());
        
//         // Show loading state
//         const submitBtn = form.querySelector('.submit-btn');
//         const originalBtnText = submitBtn.innerHTML;
//         submitBtn.disabled = true;
//         submitBtn.innerHTML = `
//             <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
//             </svg>
//             Submitting...
//         `;
        
//         // Simulate form submission (replace with actual API call)
//         setTimeout(() => {
//             // Log form data (in production, send to backend)
//             console.log('Corporate Training Request:', data);
            
//             // Show success message
//             showSuccessMessage();
            
//             // Reset form
//             form.reset();
            
//             // Restore button
//             submitBtn.disabled = false;
//             submitBtn.innerHTML = originalBtnText;
//         }, 2000);
//     });
    
//     // Show success message
//     function showSuccessMessage() {
//         const formWrapper = document.querySelector('.corporate-form-wrapper');
        
//         // Create success message
//         const successMessage = document.createElement('div');
//         successMessage.className = 'success-message';
//         successMessage.innerHTML = `
//             <div class="success-content">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <h3>Request Submitted Successfully!</h3>
//                 <p>Thank you for your interest in our corporate training programs. Our team will contact you within 24 hours to discuss your requirements.</p>
//                 <button class="close-success-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
//             </div>
//         `;
        
//         // Insert at the top of form wrapper
//         formWrapper.insertBefore(successMessage, formWrapper.firstChild);
        
//         // Scroll to success message
//         successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
//         // Auto-remove after 10 seconds
//         setTimeout(() => {
//             if (successMessage.parentElement) {
//                 successMessage.remove();
//             }
//         }, 10000);
//     }
    
//     // Dynamic form field interactions based on training type
//     const trainingTypeSelect = document.getElementById('trainingType');
//     const corporateFields = document.getElementById('corporateFields');
//     const individualFields = document.getElementById('individualFields');
    
//     const companyNameInput = document.getElementById('companyName');
//     const teamSizeSelect = document.getElementById('teamSize');
//     const currentEmploymentSelect = document.getElementById('currentEmployment');
//     const careerGoalSelect = document.getElementById('careerGoal');
    
//     console.log('Form elements found:', {
//         trainingTypeSelect: !!trainingTypeSelect,
//         corporateFields: !!corporateFields,
//         individualFields: !!individualFields
//     });
    
//     // Function to show/hide fields based on selection
//     function updateFormFields() {
//         if (!trainingTypeSelect) {
//             console.log('Training type select not found!');
//             return;
//         }
        
//         const selectedValue = trainingTypeSelect.value;
//         console.log('Selected value:', selectedValue);
        
//         // Hide all conditional fields first
//         if (corporateFields) {
//             corporateFields.style.display = 'none';
//             console.log('Hiding corporate fields');
//         }
//         if (individualFields) {
//             individualFields.style.display = 'none';
//             console.log('Hiding individual fields');
//         }
        
//         // Reset required attributes
//         if (companyNameInput) companyNameInput.required = false;
//         if (teamSizeSelect) teamSizeSelect.required = false;
//         if (currentEmploymentSelect) currentEmploymentSelect.required = false;
//         if (careerGoalSelect) careerGoalSelect.required = false;
        
//         // Show relevant fields based on selection
//         if (selectedValue === 'company') {
//             // Corporate Training - show company fields
//             console.log('Showing corporate fields');
//             if (corporateFields) {
//                 corporateFields.style.display = 'grid';
//                 if (companyNameInput) {
//                     companyNameInput.required = true;
//                     const label = companyNameInput.parentElement.querySelector('label');
//                     if (label) label.innerHTML = 'Company Name *';
//                 }
//                 if (teamSizeSelect) teamSizeSelect.required = true;
//             }
            
//         } else if (selectedValue === 'individual-upskill' || 
//                    selectedValue === 'individual-career' || 
//                    selectedValue === 'individual-promotion') {
//             // Individual Upskilling/Career Change/Promotion - show individual fields
//             console.log('Showing individual fields');
//             if (individualFields) {
//                 individualFields.style.display = 'grid';
//                 if (currentEmploymentSelect) currentEmploymentSelect.required = true;
//                 if (careerGoalSelect) careerGoalSelect.required = true;
//             }
//         }
//     }
    
//     // Listen for changes
//     if (trainingTypeSelect) {
//         console.log('Adding change listener to training type select');
//         trainingTypeSelect.addEventListener('change', function() {
//             console.log('Training type changed!');
//             updateFormFields();
//         });
//         // Initialize on page load
//         updateFormFields();
//     } else {
//         console.log('Training type select not found!');
//     }
    
//     // Phone number formatting
//     const phoneInput = document.getElementById('phone');
//     if (phoneInput) {
//         phoneInput.addEventListener('input', function(e) {
//             let value = e.target.value.replace(/\D/g, '');
//             if (value.length > 10) {
//                 value = value.slice(0, 10);
//             }
//             e.target.value = value;
//         });
//     }
// });

// // Add CSS for success message and animations
// const style = document.createElement('style');
// style.textContent = `
//     .success-message {
//         background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
//         border: 2px solid rgba(34, 197, 94, 0.3);
//         border-radius: 1rem;
//         padding: 2rem;
//         margin-bottom: 2rem;
//         animation: slideInDown 0.5s ease-out;
//     }
    
//     .success-content {
//         text-align: center;
//     }
    
//     .success-content svg {
//         width: 64px;
//         height: 64px;
//         stroke: #22c55e;
//         margin: 0 auto 1rem;
//     }
    
//     .success-content h3 {
//         font-size: 1.5rem;
//         font-weight: 700;
//         color: #22c55e;
//         margin-bottom: 0.5rem;
//     }
    
//     .success-content p {
//         font-size: 1rem;
//         color: var(--text-secondary);
//         margin-bottom: 1.5rem;
//         line-height: 1.6;
//     }
    
//     .close-success-btn {
//         padding: 0.75rem 2rem;
//         background: rgba(34, 197, 94, 0.2);
//         color: #22c55e;
//         border: 1px solid rgba(34, 197, 94, 0.3);
//         border-radius: 0.5rem;
//         font-weight: 600;
//         cursor: pointer;
//         transition: all 0.3s ease;
//     }
    
//     .close-success-btn:hover {
//         background: rgba(34, 197, 94, 0.3);
//         border-color: rgba(34, 197, 94, 0.5);
//     }
    
//     @keyframes slideInDown {
//         from {
//             opacity: 0;
//             transform: translateY(-30px);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     }
    
//     @keyframes spin {
//         from {
//             transform: rotate(0deg);
//         }
//         to {
//             transform: rotate(360deg);
//         }
//     }
    
//     .animate-spin {
//         animation: spin 1s linear infinite;
//     }
    
//     @media (prefers-reduced-motion: reduce) {
//         .success-message {
//             animation: none;
//         }
//         .animate-spin {
//             animation: none;
//         }
//     }
    
//     /* Dynamic field visibility with smooth transitions */
//     #corporateFields,
//     #individualFields {
//         transition: opacity 0.3s ease, max-height 0.4s ease;
//         overflow: hidden;
//     }
    
//     #corporateFields[style*="display: none"],
//     #individualFields[style*="display: none"] {
//         opacity: 0;
//         max-height: 0;
//     }
    
//     #corporateFields[style*="display: grid"],
//     #individualFields[style*="display: grid"] {
//         opacity: 1;
//         max-height: 500px;
//         animation: fadeInFields 0.4s ease-out;
//     }
    
//     @keyframes fadeInFields {
//         from {
//             opacity: 0;
//             transform: translateY(-10px);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     }
// `;
// document.head.appendChild(style);


// Corporate Training Form Handler
document.addEventListener('DOMContentLoaded', function() {
    console.log('Corporate training form script loaded');
    
    const form = document.getElementById('corporateTrainingForm');
    
    if (!form) {
        console.log('Form not found!');
        return;
    }
    
    console.log('Form found:', form);

    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Submitting...
        `;
        
        try {
            // Get API URL from environment or use default
            // const API_URL = window.API_URL || 'https://modernagecoders.vercel.app';
             // Get API URL - check if running locally first
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const API_URL = isLocal ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
            
            console.log('Submitting to:', `${API_URL}/api/corporate-training/submit`);
            

            // Submit to backend
            const response = await fetch(`${API_URL}/api/corporate-training/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                console.log('✅ Corporate Training Request submitted:', result.requestId);
                
                // Show success message
                showSuccessMessage();
                
                // Reset form
                form.reset();
                
                // Reset dynamic fields
                updateFormFields();
            } else {
                throw new Error(result.message || 'Failed to submit request');
            }
            
        } catch (error) {
            console.error('❌ Submission error:', error);
            showErrorMessage(error.message || 'Failed to submit request. Please try again.');
        } finally {
            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
    
    // Show success message
    function showSuccessMessage() {
        const formWrapper = document.querySelector('.corporate-form-wrapper');
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3>Request Submitted Successfully!</h3>
                <p>Thank you for your interest in our training programs. Our team will contact you within 24 hours to discuss your requirements.</p>
                <button class="close-success-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        // Insert at the top of form wrapper
        formWrapper.insertBefore(successMessage, formWrapper.firstChild);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (successMessage.parentElement) {
                successMessage.remove();
            }
        }, 10000);
    }
    
    // Show error message
    function showErrorMessage(message) {
        const formWrapper = document.querySelector('.corporate-form-wrapper');
        
        // Remove any existing error messages
        const existingError = formWrapper.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <div class="error-content">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <h3>Submission Failed</h3>
                <p>${message}</p>
                <button class="close-error-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        // Insert at the top of form wrapper
        formWrapper.insertBefore(errorMessage, formWrapper.firstChild);
        
        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (errorMessage.parentElement) {
                errorMessage.remove();
            }
        }, 8000);
    }
    
    // Dynamic form field interactions based on training type
    const trainingTypeSelect = document.getElementById('trainingType');
    const corporateFields = document.getElementById('corporateFields');
    const individualFields = document.getElementById('individualFields');
    
    const companyNameInput = document.getElementById('companyName');
    const teamSizeSelect = document.getElementById('teamSize');
    const currentEmploymentSelect = document.getElementById('currentEmployment');
    const careerGoalSelect = document.getElementById('careerGoal');
    
    console.log('Form elements found:', {
        trainingTypeSelect: !!trainingTypeSelect,
        corporateFields: !!corporateFields,
        individualFields: !!individualFields
    });
    
    // Function to show/hide fields based on selection
    function updateFormFields() {
        if (!trainingTypeSelect) {
            console.log('Training type select not found!');
            return;
        }
        
        const selectedValue = trainingTypeSelect.value;
        console.log('Selected value:', selectedValue);
        
        // Hide all conditional fields first
        if (corporateFields) {
            corporateFields.style.display = 'none';
            console.log('Hiding corporate fields');
        }
        if (individualFields) {
            individualFields.style.display = 'none';
            console.log('Hiding individual fields');
        }
        
        // Reset required attributes
        if (companyNameInput) companyNameInput.required = false;
        if (teamSizeSelect) teamSizeSelect.required = false;
        if (currentEmploymentSelect) currentEmploymentSelect.required = false;
        if (careerGoalSelect) careerGoalSelect.required = false;
        
        // Show relevant fields based on selection
        if (selectedValue === 'company') {
            // Corporate Training - show company fields
            console.log('Showing corporate fields');
            if (corporateFields) {
                corporateFields.style.display = 'grid';
                if (companyNameInput) {
                    companyNameInput.required = true;
                    const label = companyNameInput.parentElement.querySelector('label');
                    if (label) label.innerHTML = 'Company Name *';
                }
                if (teamSizeSelect) teamSizeSelect.required = true;
            }
            
        } else if (selectedValue === 'individual-upskill' || 
                   selectedValue === 'individual-career' || 
                   selectedValue === 'individual-promotion') {
            // Individual Upskilling/Career Change/Promotion - show individual fields
            console.log('Showing individual fields');
            if (individualFields) {
                individualFields.style.display = 'grid';
                if (currentEmploymentSelect) currentEmploymentSelect.required = true;
                if (careerGoalSelect) careerGoalSelect.required = true;
            }
        }
    }
    
    // Listen for changes
    if (trainingTypeSelect) {
        console.log('Adding change listener to training type select');
        trainingTypeSelect.addEventListener('change', function() {
            console.log('Training type changed!');
            updateFormFields();
        });
        // Initialize on page load
        updateFormFields();
    } else {
        console.log('Training type select not found!');
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            e.target.value = value;
        });
    }
});

// Add CSS for success message and animations
const style = document.createElement('style');
style.textContent = `
    .success-message {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
        border: 2px solid rgba(34, 197, 94, 0.3);
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 2rem;
        animation: slideInDown 0.5s ease-out;
    }
    
    .error-message {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1));
        border: 2px solid rgba(239, 68, 68, 0.3);
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 2rem;
        animation: slideInDown 0.5s ease-out;
    }
    
    .success-content {
        text-align: center;
    }
    
    .success-content,
    .error-content {
        text-align: center;
    }
    
    .success-content svg {
        width: 64px;
        height: 64px;
        stroke: #22c55e;
        margin: 0 auto 1rem;
    }
    
    .error-content svg {
        width: 64px;
        height: 64px;
        stroke: #ef4444;
        margin: 0 auto 1rem;
    }
    
    .success-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #22c55e;
        margin-bottom: 0.5rem;
    }
    
    .error-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #ef4444;
        margin-bottom: 0.5rem;
    }
    
    .success-content p,
    .error-content p {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }
    
    .close-success-btn {
        padding: 0.75rem 2rem;
        background: rgba(34, 197, 94, 0.2);
        color: #22c55e;
        border: 1px solid rgba(34, 197, 94, 0.3);
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .close-success-btn:hover {
        background: rgba(34, 197, 94, 0.3);
        border-color: rgba(34, 197, 94, 0.5);
    }
    
    .close-error-btn {
        padding: 0.75rem 2rem;
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.3);
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .close-error-btn:hover {
        background: rgba(239, 68, 68, 0.3);
        border-color: rgba(239, 68, 68, 0.5);
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .success-message {
            animation: none;
        }
        .animate-spin {
            animation: none;
        }
    }
    
    /* Dynamic field visibility with smooth transitions */
    #corporateFields,
    #individualFields {
        transition: opacity 0.3s ease, max-height 0.4s ease;
        overflow: hidden;
    }
    
    #corporateFields[style*="display: none"],
    #individualFields[style*="display: none"] {
        opacity: 0;
        max-height: 0;
    }
    
    #corporateFields[style*="display: grid"],
    #individualFields[style*="display: grid"] {
        opacity: 1;
        max-height: 500px;
        animation: fadeInFields 0.4s ease-out;
    }
    
    @keyframes fadeInFields {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
