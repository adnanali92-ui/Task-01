// Simple Javascript for ToyJoy Landing Page

document.addEventListener('DOMContentLoaded', () => {
    
    // Form submission handler
    const contactForm = document.getElementById('toyJoyContactForm');
    const successAlert = document.getElementById('formSuccessAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent actual page reload
            event.preventDefault();

            // Simple validation check using HTML5 reportValidity
            if (contactForm.checkValidity()) {
                // Show the success message banner
                successAlert.style.display = 'block';
                
                // Clear the form fields
                contactForm.reset();

                // Hide the alert after 4 seconds
                setTimeout(() => {
                    successAlert.style.display = 'none';
                }, 4000);
            } else {
                // Trigger browser's default validation UI
                contactForm.reportValidity();
            }
        });
    }
});
