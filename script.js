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
fetch('https://formsubmit.co/ajax/jtogeh@stu.ucc.edu.gh', {
  method: 'POST',
  headers: {
    'Accept': 'application/json'       
  },
  body: new FormData(this)             
})
.then(response => response.json())
.then(data => {
  alert('Message sent successfully!');
})
.catch(error => {
  console.error(error);
  alert('Error sending message');
});
