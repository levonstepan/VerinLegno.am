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

// Wave animation on scroll for manuals section
function initWaveAnimation() {
    const manualsSection = document.getElementById('manuals');
    const wavePaths = document.querySelectorAll('.wave-path');
    
    if (!manualsSection || wavePaths.length === 0) return;
    
    let baseOffset = [0, 0, 0];
    let lastScrollY = window.scrollY;
    
    function updateWaves() {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        
        const rect = manualsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && Math.abs(scrollDelta) > 0) {
            // Update base offset based on scroll
            wavePaths.forEach((wave, index) => {
                const speed = (index + 1) * 0.6;
                const direction = index % 2 === 0 ? 1 : -1;
                baseOffset[index] = (baseOffset[index] + scrollDelta * speed * direction) % 400;
            });
        }
        
        // Apply continuous animation + scroll offset
        const time = Date.now() * 0.001;
        wavePaths.forEach((wave, index) => {
            const floatAmount = Math.sin(time * 0.5 + index) * 10;
            const translateX = baseOffset[index] + floatAmount;
            wave.style.transform = `translateX(${translateX}px)`;
        });
        
        requestAnimationFrame(updateWaves);
    }
    
    // Start animation loop
    updateWaves();
}

// Initialize wave animation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initWaveAnimation();
});

