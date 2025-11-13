// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Language Switcher
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // For now, just log the language change
        // In the future, this will load the Armenian version
        if (lang === 'hy') {
            console.log('Armenian version coming soon!');
            // TODO: Implement language switching
        }
    });
});

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage');
    if (preferredLang) {
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === preferredLang) {
                button.classList.add('active');
                document.documentElement.lang = preferredLang;
            } else {
                button.classList.remove('active');
            }
        });
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = navbar.offsetHeight;
        const sectionPosition = section.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// Active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navbarHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Contact form removed - replaced with Google Maps

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.product-card, .manual-card, .workshop-card, .partnership-card, .services-content, .contact-content'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Ensure workshops section is visible and properly initialized
    const workshopsSection = document.getElementById('workshops');
    if (workshopsSection) {
        // Force visibility
        workshopsSection.style.display = 'block';
        workshopsSection.style.visibility = 'visible';
        workshopsSection.style.opacity = '1';
        workshopsSection.style.height = 'auto';
        workshopsSection.style.minHeight = '400px';
        
        // Ensure all child elements are visible
        const workshopsChildren = workshopsSection.querySelectorAll('*');
        workshopsChildren.forEach(child => {
            if (getComputedStyle(child).display === 'none') {
                child.style.display = '';
            }
            if (getComputedStyle(child).visibility === 'hidden') {
                child.style.visibility = '';
            }
        });
        
        // Add to observer for animation
        observer.observe(workshopsSection);
    }
});

// Manual download buttons - links are now direct PDF downloads, no need for placeholder

// Product links - PDF links work directly, only handle contact links
const productLinks = document.querySelectorAll('.product-link');
productLinks.forEach(link => {
    if (link.getAttribute('href') === '#contact') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection('contact');
        });
    }
});

// Services button
const servicesBtns = document.querySelectorAll('.services-btn');
servicesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollToSection('contact');
    });
});

// Add scroll to top button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Console welcome message
console.log('%c VerinLegno Armenia ', 'background: #D70000; color: white; font-size: 20px; padding: 10px;');
console.log('%c High-technology, reliable and increasingly green coatings ', 'font-size: 14px; color: #4A5568;');

// Form validation removed - contact form replaced with map

