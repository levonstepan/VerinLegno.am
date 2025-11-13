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

// CRITICAL: Ensure ALL sections remain visible - prevents any section from being hidden or removed
function ensureAllSectionsVisible() {
    // Get all sections by class and by tag
    const allSections = document.querySelectorAll('section.section, section[id]');
    
    allSections.forEach(section => {
        // Prevent removal - ensure section stays in DOM
        if (!section.parentNode || !document.body.contains(section)) {
            console.warn('Section was removed from DOM, restoring:', section.id || section.className);
            // If section was removed, try to restore it (this shouldn't happen, but protects against it)
            if (section.parentNode === null) {
                document.body.appendChild(section);
            }
        }
        
        // Force visibility - ensure section is always visible
        if (getComputedStyle(section).display === 'none') {
            section.style.display = 'block';
        }
        if (getComputedStyle(section).visibility === 'hidden') {
            section.style.visibility = 'visible';
        }
        if (getComputedStyle(section).opacity === '0') {
            section.style.opacity = '1';
        }
        
        // Ensure section has proper dimensions
        if (section.offsetHeight === 0 && section.offsetWidth === 0) {
            section.style.minHeight = '100px';
        }
        
        // Ensure all child elements within sections are visible
        const children = section.querySelectorAll('*');
        children.forEach(child => {
            const computedStyle = getComputedStyle(child);
            if (computedStyle.display === 'none') {
                // Only restore if it's not intentionally hidden (like mobile menu)
                if (!child.classList.contains('nav-menu') || child.classList.contains('active')) {
                    child.style.display = '';
                }
            }
            if (computedStyle.visibility === 'hidden' && !child.classList.contains('scroll-to-top')) {
                child.style.visibility = '';
            }
        });
    });
    
    // Special handling for workshops section (handles both 'workshops' and 'gago' IDs)
    const workshopsSection = document.getElementById('workshops') || document.getElementById('gago');
    if (workshopsSection) {
        workshopsSection.style.display = 'block';
        workshopsSection.style.visibility = 'visible';
        workshopsSection.style.opacity = '1';
        workshopsSection.style.minHeight = '400px';
        
        // Ensure workshops grid is visible
        const workshopsGrid = workshopsSection.querySelector('.workshops-grid');
        if (workshopsGrid) {
            workshopsGrid.style.display = 'grid';
            workshopsGrid.style.visibility = 'visible';
            workshopsGrid.style.opacity = '1';
        }
    }
}

// Override any attempts to hide sections
const originalRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function(child) {
    // Prevent removal of sections
    if (child && (child.tagName === 'SECTION' || child.classList?.contains('section'))) {
        console.warn('Attempted to remove section prevented:', child.id || child.className);
        return child; // Return the child without removing it
    }
    return originalRemoveChild.call(this, child);
};

// Prevent setting display: none on sections
const originalSetProperty = CSSStyleDeclaration.prototype.setProperty;
CSSStyleDeclaration.prototype.setProperty = function(property, value, priority) {
    // Get the element this style belongs to
    let element = null;
    try {
        // Try to find the element by checking if this is attached to an element
        if (this._ownerElement) {
            element = this._ownerElement;
        } else {
            // Fallback: check all sections to see if any match this style object
            const allSections = document.querySelectorAll('section');
            for (let section of allSections) {
                if (section.style === this) {
                    element = section;
                    break;
                }
            }
        }
    } catch (e) {
        // If we can't determine the element, allow the property to be set
    }
    
    // Prevent hiding sections
    if (property === 'display' && value === 'none') {
        if (element && (element.tagName === 'SECTION' || element.classList?.contains('section'))) {
            console.warn('Attempted to hide section prevented:', element.id || element.className);
            // Still set it but immediately restore visibility
            originalSetProperty.call(this, property, value, priority);
            setTimeout(() => ensureAllSectionsVisible(), 0);
            return;
        }
    }
    if (property === 'visibility' && value === 'hidden') {
        if (element && (element.tagName === 'SECTION' || element.classList?.contains('section'))) {
            console.warn('Attempted to hide section visibility prevented:', element.id || element.className);
            // Still set it but immediately restore visibility
            originalSetProperty.call(this, property, value, priority);
            setTimeout(() => ensureAllSectionsVisible(), 0);
            return;
        }
    }
    return originalSetProperty.call(this, property, value, priority);
};

// Run immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureAllSectionsVisible);
} else {
    ensureAllSectionsVisible();
}

// Run multiple times to catch any late-loading issues or dynamic changes
setTimeout(ensureAllSectionsVisible, 100);
setTimeout(ensureAllSectionsVisible, 500);
setTimeout(ensureAllSectionsVisible, 1000);

// Monitor for any changes that might hide sections
const sectionObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
            const target = mutation.target;
            if (target.tagName === 'SECTION' || target.classList?.contains('section')) {
                // Check if section was hidden
                const display = getComputedStyle(target).display;
                const visibility = getComputedStyle(target).visibility;
                if (display === 'none' || visibility === 'hidden') {
                    ensureAllSectionsVisible();
                }
            }
        }
        if (mutation.type === 'childList') {
            // Check if any sections were removed
            mutation.removedNodes.forEach((node) => {
                if (node.nodeType === 1 && (node.tagName === 'SECTION' || node.classList?.contains('section'))) {
                    ensureAllSectionsVisible();
                }
            });
        }
    });
});

// Start observing when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Observe all sections for changes
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        sectionObserver.observe(section, {
            attributes: true,
            attributeFilter: ['style', 'class'],
            childList: true,
            subtree: true
        });
    });
    
    // Also observe document body for section removals
    sectionObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.product-card, .manual-card, .workshop-card, .partnership-card, .services-content, .contact-content'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Ensure workshops section is added to observer (handles both IDs)
    const workshopsSection = document.getElementById('workshops') || document.getElementById('gago');
    if (workshopsSection) {
        observer.observe(workshopsSection);
    }
    
    // Final check after animations are set up - ensure all sections are visible
    ensureAllSectionsVisible();
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

