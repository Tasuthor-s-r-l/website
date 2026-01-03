/**
 * TASUTHOR Website - Main JavaScript
 * Handles theme toggle, smooth scroll, animations, and navbar behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initNavbarScroll();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavLinks();
    initFormValidation();
    initCookieBanner();
});

/**
 * Theme Toggle (Dark/Light Mode)
 * Persists preference in localStorage
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

/**
 * Navbar Scroll Behavior
 * Adds background and reduces padding on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        function handleScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
                
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll-triggered Fade-in Animations
 * Uses Intersection Observer API
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Active Navigation Link Highlighting
 * Highlights nav link based on current scroll position
 */
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Check initial state
}

/**
 * WhatsApp Link Generator
 * Creates WhatsApp links with pre-filled messages
 */
function getWhatsAppLink(message) {
    const phoneNumber = '393711369107';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// Update WhatsApp links on page load
document.addEventListener('DOMContentLoaded', function() {
    // Demo request link
    const demoLinks = document.querySelectorAll('.whatsapp-demo');
    demoLinks.forEach(link => {
        link.href = getWhatsAppLink('Ciao! Vorrei prenotare una demo gratuita di Agendo.');
    });
    
    // Contact link
    const contactLinks = document.querySelectorAll('.whatsapp-contact');
    contactLinks.forEach(link => {
        link.href = getWhatsAppLink('Ciao! Vorrei maggiori informazioni sui servizi TASUTHOR.');
    });
});

/**
 * Form Validation for Contact Form
 */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const consenso = document.getElementById('consenso').checked;
        
        if (!nome || !email || !consenso) {
            e.preventDefault();
            alert('Per favore, compila tutti i campi obbligatori e acconsenti al trattamento dei dati.');
            return;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Per favore, inserisci un indirizzo email valido.');
            return;
        }
        
        // Form is valid, allow submission (mailto will open email client)
        alert('Grazie! Il tuo messaggio sarà inviato via email. Riceverai presto una risposta.');
    });
}

/**
 * Cookie Banner
 * Shows banner if user hasn't made a choice, handles accept/reject actions
 */
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    
    if (!cookieChoice) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }
    
    // Handle accept button
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieChoice', 'accepted');
            hideCookieBanner();
        });
    }
    
    // Handle reject button
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            localStorage.setItem('cookieChoice', 'rejected');
            hideCookieBanner();
        });
    }
    
    function hideCookieBanner() {
        cookieBanner.classList.remove('show');
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 300);
    }
}

/**
 * Console Easter Egg
 */
console.log(
    '%c TASUTHOR %c Soluzioni AI ',
    'background: #1e3a8a; color: #fbbf24; padding: 10px; font-size: 20px; font-weight: bold;',
    'background: #fbbf24; color: #1e3a8a; padding: 10px; font-size: 14px;'
);

