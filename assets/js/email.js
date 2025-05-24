(function() {
    // Initialize EmailJS with your public key - shivaramkpk
    emailjs.init("ybqkdDaz4fD-NJkgL");

    const form = document.getElementById('contact-form');
    const loadingDiv = form.querySelector('.loading');
    const errorDiv = form.querySelector('.error-message');
    const successDiv = form.querySelector('.sent-message');
    const submitButton = form.querySelector('button[type="submit"]');

    // Hide all messages initially
    loadingDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading
        submitButton.disabled = true;
        loadingDiv.style.display = 'block';
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';

        // Prepare email parameters
        const templateParams = {
            name: form.querySelector('#name-field').value,
            email: form.querySelector('#email-field').value,
            subject: form.querySelector('#subject-field').value,
            message: form.querySelector('#message-field').value
        };

        // Send email using EmailJS
        emailjs.send('service_bpsk78o', 'template_frf5fod', templateParams) // Replace with your service ID and template ID
            .then(function() {
                loadingDiv.style.display = 'none';
                successDiv.style.display = 'block';
                form.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successDiv.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                loadingDiv.style.display = 'none';
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'Message could not be sent. Please try again later.';
                console.error('EmailJS error:', error);
            })
            .finally(function() {
                // Re-enable submit button
                submitButton.disabled = false;
            });
    });
})();