// Mobile Navigation Toggle

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      navLinks.classList.remove('active');
    }
  });

  // Close menu after clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
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
// Updated JavaScript with success message
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.querySelector('.success-message');

    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="spinner"></div> Sending...';

        // Submit via iframe
        const iframe = document.createElement('iframe');
        iframe.name = 'formsubmit-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        form.target = 'formsubmit-iframe';
        form.submit();

        // Show success message after 1.5s (FormSubmit processing time)
        setTimeout(() => {
            successMessage.style.display = 'flex';
            form.reset(); // Clear form fields
        }, 1500);

        // Remove iframe after 3s
        setTimeout(() => {
            iframe.remove();
        }, 3000);

    } catch (error) {
        alert('Error sending message');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
