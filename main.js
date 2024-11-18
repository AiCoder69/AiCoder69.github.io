import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Modal functionality
const modal = document.getElementById('signupModal');
const getStartedBtn = document.querySelector('.cta-button');
const closeModalBtn = document.querySelector('.close-modal');
const signupForm = document.querySelector('.signup-form');

getStartedBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Handle signup form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Add your signup logic here
  console.log('Signup successful!', { name, email });
  
  // Reset form and close modal
  signupForm.reset();
  modal.classList.remove('active');
  alert('Account created successfully!');
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  contactForm.reset();
});
