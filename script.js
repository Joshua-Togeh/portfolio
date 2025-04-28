// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Form Submission
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        // Remove headers to prevent CORS issues
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        });

        // Check if response is successful (2xx status)
        if (response.status >= 200 && response.status < 300) {
            // Redirect to thank-you page
            window.location.href = form.querySelector('[name="_next"]').value;
        } else {
            // Get error message from response
            const errorText = await response.text();
            throw new Error(`Server responded with ${response.status}: ${errorText}`);
        }
    } catch (error) {
        console.error('Form submission error:', error);
        // Only show error if message didn't send
        if (navigator.onLine) { // Check if user is online
            alert('Message may not have sent. Please email me directly at togeh00@gmail.com');
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
