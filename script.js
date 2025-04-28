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

// Updated JavaScript
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="spinner"></div> Sending...';

    // Create temporary iframe for submission
    const iframe = document.createElement('iframe');
    iframe.name = 'form-submit-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Submit form to iframe
    form.target = 'form-submit-iframe';
    form.submit();

    // Refresh page after 3 seconds
    setTimeout(() => {
        window.location.reload();
    }, 3000);
});
