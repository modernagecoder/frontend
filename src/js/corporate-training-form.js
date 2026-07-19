// Corporate Training Form Handler
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('corporateTrainingForm');
    if (!form) return;

    // API config
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_URL = isLocalhost
        ? 'http://localhost:5000'
        : 'https://backend-modernagecoders.vercel.app';

    // Form submission handler
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const submitBtn = form.querySelector('.submit-btn');
        if (!submitBtn) return;
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Submitting...
        `;

        try {
            const response = await fetch(`${API_URL}/api/corporate-training/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showSuccessMessage();
                form.reset();
                updateFormFields();
            } else {
                throw new Error(result.message || 'Failed to submit request');
            }
        } catch (error) {
            if (isLocalhost) console.error('Submission error:', error);
            showErrorMessage(error.message || 'Failed to submit request. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });

    // Show success message
    function showSuccessMessage() {
        const formWrapper = document.querySelector('.corporate-form-wrapper');
        if (!formWrapper) return;

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3>Request Submitted Successfully!</h3>
                <p>We have received your response. We will reach out to you within 48 hours. If you want to connect now, please contact 9123366161 (Shivam Sir).</p>
                <button class="close-success-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;

        formWrapper.insertBefore(successMessage, formWrapper.firstChild);
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(function () {
            if (successMessage.parentElement) successMessage.remove();
        }, 10000);
    }

    // Show error message
    function showErrorMessage(message) {
        const formWrapper = document.querySelector('.corporate-form-wrapper');
        if (!formWrapper) return;

        var existingError = formWrapper.querySelector('.error-message');
        if (existingError) existingError.remove();

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

        formWrapper.insertBefore(errorMessage, formWrapper.firstChild);
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(function () {
            if (errorMessage.parentElement) errorMessage.remove();
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

    function updateFormFields() {
        if (!trainingTypeSelect) return;

        const selectedValue = trainingTypeSelect.value;

        // Hide all conditional fields first
        if (corporateFields) corporateFields.style.display = 'none';
        if (individualFields) individualFields.style.display = 'none';

        // Reset required attributes
        if (companyNameInput) companyNameInput.required = false;
        if (teamSizeSelect) teamSizeSelect.required = false;
        if (currentEmploymentSelect) currentEmploymentSelect.required = false;
        if (careerGoalSelect) careerGoalSelect.required = false;

        // Show relevant fields based on selection
        if (selectedValue === 'company') {
            if (corporateFields) {
                corporateFields.style.display = 'grid';
                if (companyNameInput) {
                    companyNameInput.required = true;
                    var label = companyNameInput.parentElement.querySelector('label');
                    if (label) label.innerHTML = 'Company Name *';
                }
                if (teamSizeSelect) teamSizeSelect.required = true;
            }
        } else if (selectedValue === 'individual-upskill' ||
            selectedValue === 'individual-career' ||
            selectedValue === 'individual-promotion') {
            if (individualFields) {
                individualFields.style.display = 'grid';
                if (currentEmploymentSelect) currentEmploymentSelect.required = true;
                if (careerGoalSelect) careerGoalSelect.required = true;
            }
        }
    }

    if (trainingTypeSelect) {
        trainingTypeSelect.addEventListener('change', updateFormFields);
        updateFormFields();
    }

    // Phone number formatting (digits only). Cap length based on the
    // country picked in the country-code dropdown — 10 for India, 15 elsewhere.
    var phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            var iso = e.target.dataset.countryIso || 'IN';
            var max = iso === 'IN' ? 10 : 15;
            var value = e.target.value.replace(/\D/g, '');
            if (value.length > max) value = value.slice(0, max);
            e.target.value = value;
        });
    }
});

// Inject CSS for success/error messages and field transitions
(function () {
    var style = document.createElement('style');
    style.textContent = `
    .success-message{background:linear-gradient(135deg,rgba(34,197,94,.1),rgba(16,185,129,.1));border:2px solid rgba(34,197,94,.3);border-radius:1rem;padding:2rem;margin-bottom:2rem;animation:slideInDown .5s ease-out}
    .error-message{background:linear-gradient(135deg,rgba(239,68,68,.1),rgba(220,38,38,.1));border:2px solid rgba(239,68,68,.3);border-radius:1rem;padding:2rem;margin-bottom:2rem;animation:slideInDown .5s ease-out}
    .success-content,.error-content{text-align:center}
    .success-content svg{width:64px;height:64px;stroke:#22c55e;margin:0 auto 1rem}
    .error-content svg{width:64px;height:64px;stroke:#ef4444;margin:0 auto 1rem}
    .success-content h3{font-size:1.5rem;font-weight:700;color:#22c55e;margin-bottom:.5rem}
    .error-content h3{font-size:1.5rem;font-weight:700;color:#ef4444;margin-bottom:.5rem}
    .success-content p,.error-content p{font-size:1rem;color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.6}
    .close-success-btn{padding:.75rem 2rem;background:rgba(34,197,94,.2);color:#22c55e;border:1px solid rgba(34,197,94,.3);border-radius:.5rem;font-weight:600;cursor:pointer;transition:all .3s ease}
    .close-success-btn:hover{background:rgba(34,197,94,.3);border-color:rgba(34,197,94,.5)}
    .close-error-btn{padding:.75rem 2rem;background:rgba(239,68,68,.2);color:#ef4444;border:1px solid rgba(239,68,68,.3);border-radius:.5rem;font-weight:600;cursor:pointer;transition:all .3s ease}
    .close-error-btn:hover{background:rgba(239,68,68,.3);border-color:rgba(239,68,68,.5)}
    @keyframes slideInDown{from{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}
    .animate-spin{animation:spin 1s linear infinite}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @media(prefers-reduced-motion:reduce){.success-message,.error-message{animation:none}.animate-spin{animation:none}}
    #corporateFields,#individualFields{transition:opacity .3s ease,max-height .4s ease;overflow:hidden}
    `;
    document.head.appendChild(style);
})();
