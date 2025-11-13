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
    // Get all sections by class and by tag - this includes dynamically added sections
    const allSections = document.querySelectorAll('section.section, section[id], section');
    
    allSections.forEach(section => {
        // Skip if not a real section element
        if (!section || section.nodeType !== 1) return;
        
        // Prevent removal - ensure section stays in DOM
        if (!section.parentNode || !document.body.contains(section)) {
            console.warn('Section was removed from DOM, restoring:', section.id || section.className);
            // If section was removed, try to restore it (this shouldn't happen, but protects against it)
            if (section.parentNode === null) {
                document.body.appendChild(section);
            }
        }
        
        // Force visibility - ensure section is always visible
        const computedStyle = getComputedStyle(section);
        if (computedStyle.display === 'none') {
            section.style.display = 'block';
        }
        if (computedStyle.visibility === 'hidden') {
            section.style.visibility = 'visible';
        }
        if (parseFloat(computedStyle.opacity) === 0) {
            section.style.opacity = '1';
        }
        
        // Ensure section has proper dimensions - prevent collapsing
        if (section.offsetHeight === 0 && section.offsetWidth === 0 && computedStyle.display !== 'none') {
            // Only set min-height if section is actually collapsed
            const hasContent = section.querySelector('.container, .section-header, .workshops-grid, .products-grid, .manuals-grid');
            if (hasContent) {
                section.style.minHeight = '200px';
            }
        }
        
        // Ensure section has proper padding (matches other sections)
        if (!section.style.padding && !section.style.paddingTop && !section.style.paddingBottom) {
            // Let CSS handle padding, but ensure it's not zero
            if (parseInt(computedStyle.paddingTop) === 0 && parseInt(computedStyle.paddingBottom) === 0) {
                // Only if truly collapsed
            }
        }
        
        // Ensure all critical child elements within sections are visible
        const criticalChildren = section.querySelectorAll('.container, .section-header, .workshops-grid, .products-grid, .manuals-grid, .services-content, .partnership-content, .contact-content');
        criticalChildren.forEach(child => {
            const childStyle = getComputedStyle(child);
            if (childStyle.display === 'none') {
                // Restore display for critical structural elements
                if (child.classList.contains('container')) {
                    child.style.display = 'block';
                } else if (child.classList.contains('workshops-grid') || child.classList.contains('products-grid') || child.classList.contains('manuals-grid')) {
                    child.style.display = 'grid';
                } else {
                    child.style.display = '';
                }
            }
            if (childStyle.visibility === 'hidden') {
                child.style.visibility = 'visible';
            }
        });
    });
    
    // Special handling for workshops section
    const workshopsSection = document.getElementById('workshops');
    if (workshopsSection) {
        // Ensure workshops section is fully visible and not collapsed
        workshopsSection.style.display = 'block';
        workshopsSection.style.visibility = 'visible';
        workshopsSection.style.opacity = '1';
        
        // Ensure workshops grid is visible
        const workshopsGrid = workshopsSection.querySelector('.workshops-grid');
        if (workshopsGrid) {
            const gridStyle = getComputedStyle(workshopsGrid);
            if (gridStyle.display === 'none' || gridStyle.display === '') {
                workshopsGrid.style.display = 'grid';
            }
            workshopsGrid.style.visibility = 'visible';
            workshopsGrid.style.opacity = '1';
        }
        
        // Ensure container is visible
        const container = workshopsSection.querySelector('.container');
        if (container) {
            container.style.display = 'block';
        }
    }
}

// Helper function to initialize new sections properly
function initializeNewSection(section) {
    if (!section || section.nodeType !== 1) return;
    
    // Ensure section has proper classes if missing
    if (!section.classList.contains('section')) {
        section.classList.add('section');
    }
    
    // Set basic visibility properties
    section.style.display = 'block';
    section.style.visibility = 'visible';
    section.style.opacity = '1';
    
    // Ensure section has proper padding if missing
    const computedStyle = getComputedStyle(section);
    if (parseInt(computedStyle.paddingTop) === 0 && parseInt(computedStyle.paddingBottom) === 0) {
        section.style.padding = '80px 20px';
    }
    
    // Ensure container exists and is visible
    let container = section.querySelector('.container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'container';
        // Move existing content into container if needed
        const children = Array.from(section.childNodes);
        children.forEach(child => {
            if (child.nodeType === 1) {
                container.appendChild(child);
            }
        });
        section.appendChild(container);
    }
    container.style.display = 'block';
    
    // Ensure grid elements are properly displayed
    const grids = section.querySelectorAll('.workshops-grid, .products-grid, .manuals-grid');
    grids.forEach(grid => {
        grid.style.display = 'grid';
        grid.style.visibility = 'visible';
    });
    
    console.log('New section initialized:', section.id || section.className);
}

// Override any attempts to hide sections - but allow legitimate DOM operations
const originalRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function(child) {
    // Prevent removal of sections that are part of the main page structure
    if (child && (child.tagName === 'SECTION' || child.classList?.contains('section'))) {
        // Only prevent if it's a section with an ID (main page sections)
        // Allow removal of temporary/dynamic sections if needed
        if (child.id && document.querySelector(`section#${child.id}`) === child) {
            console.warn('Attempted to remove main page section prevented:', child.id || child.className);
            // Restore visibility instead of preventing removal
            ensureAllSectionsVisible();
            return child; // Return the child without removing it
        }
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

// Monitor for any changes that might hide sections or detect new sections being added
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
            
            // IMPORTANT: Detect NEW sections being added and ensure they're visible
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && (node.tagName === 'SECTION' || node.classList?.contains('section'))) {
                    console.log('New section detected, initializing:', node.id || node.className);
                    // Initialize the new section properly
                    initializeNewSection(node);
                    // Ensure all sections are visible
                    ensureAllSectionsVisible();
                    // Also observe the new section for future changes
                    sectionObserver.observe(node, {
                        attributes: true,
                        attributeFilter: ['style', 'class'],
                        childList: true,
                        subtree: true
                    });
                }
            });
        }
    });
});

// Start observing when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Observe all existing sections for changes
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        sectionObserver.observe(section, {
            attributes: true,
            attributeFilter: ['style', 'class'],
            childList: true,
            subtree: true
        });
    });
    
    // Observe document body for section additions/removals - CRITICAL for new sections
    sectionObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Initial check to ensure all sections are visible
    ensureAllSectionsVisible();
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

