// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const contactForm = document.getElementById('contact-form');
const ctaButton = document.getElementById('cta-button');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed header
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        nav.classList.remove('show');
    });
});

// Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For demo, we'll just log it and show an alert
    console.log({ name, email, message });
    
    alert(`Thanks for your message, ${name}! We'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// CTA Button Action
ctaButton.addEventListener('click', () => {
    alert('Download button clicked! This would initiate a download process.');
});

// Service Worker Registration for PWA (Progressive Web App)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
