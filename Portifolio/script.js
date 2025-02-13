// Typing Effect
const textElement = document.querySelector('.typing-text');
const text = textElement.innerHTML;
textElement.innerHTML = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, Math.random() * 100 + 50); // Random delay for more natural typing
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Improved Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when clicking the button
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Animate elements when they come into view
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (entry.target.classList.contains('skill-level')) {
                entry.target.style.width = entry.target.getAttribute('data-level');
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all animated elements
document.querySelectorAll('.project-card, .skill-level, .about-text p').forEach(el => {
    animateOnScroll.observe(el);
});

// Page Load Animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on page load
    document.querySelector('.logo').style.opacity = '0';
    document.querySelector('.logo').style.animation = 'fadeInDown 0.8s forwards';

    // Delayed animations for nav items
    document.querySelectorAll('.nav-links li').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `fadeInDown 0.5s forwards ${index * 0.1 + 0.5}s`;
    });
});

// Enhanced Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link or outside
document.addEventListener('click', (e) => {
    if (
        navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Enhanced Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Animate nav items when menu opens
    if (navLinks.classList.contains('active')) {
        document.querySelectorAll('.nav-links li').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.animation = `fadeInDown 0.3s forwards ${index * 0.1}s`;
        });
    }
});
