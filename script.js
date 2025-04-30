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


// service Example interactivity if needed (currently optional)
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`You clicked on: ${card.querySelector('.service-title').innerText}`);
  });
});

