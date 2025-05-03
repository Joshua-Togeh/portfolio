document.addEventListener('DOMContentLoaded', () => {
  const hamburger    = document.querySelector('.hamburger');
  const navLinks     = document.querySelector('.nav-links');
  const navContainer = document.querySelector('nav .container');  

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    navLinks.classList.toggle('active');  // matches CSS below
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!navContainer.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  // Close after selecting a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});

// success message
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const successMessage = document.querySelector('.success-message');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    // Show loading state
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        const successMessage = document.querySelector('.success-message');
        successMessage.style.display = 'block';
        form.reset();
        
        // Scroll to top of section
        window.scrollTo({
            top: document.querySelector('.contact-section').offsetTop - 50,
            behavior: 'smooth'
        });

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        successMessage.style.display = 'none';
        alert('There was an error sending your message. Please try again.');
    })
    .finally(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    });
});
