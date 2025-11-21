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

// Translations object
const translations = {
    en: {
        // Navigation
        'nav.products': 'Products',
        'nav.manuals': 'Manuals',
        'nav.services': 'Services',
        'nav.partnership': 'Partnership',
        'nav.workshops': 'Workshops',
        'nav.contact': 'Contact Us',
        
        // Hero Section
        'hero.badge': 'Since 1975 • Italian Excellence',
        'hero.title': 'VerinLegno in Armenia',
        'hero.subtitle': 'Verinlegno Spa, founded in Massa e Cozzile in 1975 — high-technology, reliable and increasingly green coatings for wood, metal and glass. Roots Furniture LLC — official representative in Armenia.',
        'hero.btnDiscover': 'Discover more',
        'hero.btnLearn': 'Learn More',
        'hero.statYears': 'Years Experience',
        'hero.statCountries': 'Countries',
        'hero.statEco': 'Eco-Friendly',
        
        // Legal
        'legal.badge': 'Legal',
        
        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.subtitle': 'How we handle your information',
        'privacy.lastUpdated': 'Last Updated:',
        'privacy.commitment': 'Our Commitment to Privacy',
        'privacy.commitmentText': 'At VerinLegno Armenia (Roots Furniture LLC), we respect your privacy. This website does not collect, store, or process any personal data from visitors.',
        'privacy.dataCollection': 'Data Collection',
        'privacy.dataCollectionText': 'We do not use cookies for tracking purposes, and we do not share any information with third parties. Any information you voluntarily provide through contact forms or email communications is used solely for the purpose of responding to your inquiries.',
        'privacy.contactInfo': 'Contact Information',
        'privacy.contactInfoText': 'If you have any questions about this privacy policy, please contact us at:',
        'privacy.contactEmail': 'Email: info@roots.am',
        'privacy.contactPhone': 'Phone: +374 91 665520',
        'privacy.contactAddress': 'Address: 20/1 Ter-Gabrielyan Street, Vagharshapat, Armenia',
        'privacy.backHome': '← Back to Home',
        
        // Terms of Service
        'terms.title': 'Terms of Service',
        'terms.subtitle': 'Terms and conditions for using our website',
        'terms.lastUpdated': 'Last Updated:',
        'terms.agreement': 'Agreement to Terms',
        'terms.agreementText': 'By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.',
        'terms.useOfWebsite': 'Use of Website',
        'terms.useOfWebsiteText': 'This website is provided for informational purposes only. The content is subject to change without notice. You may use this website for lawful purposes only and in accordance with these Terms of Service.',
        'terms.intellectualProperty': 'Intellectual Property',
        'terms.intellectualPropertyText': 'All content, including text, images, logos, and other materials on this website, is the property of VerinLegno Armenia and Roots Furniture LLC and is protected by copyright laws. You may not reproduce, distribute, or use any content from this website without prior written permission.',
        'terms.limitation': 'Limitation of Liability',
        'terms.limitationText': 'We are not liable for any damages arising from the use of this website or the information contained herein. The information on this website is provided "as is" without warranty of any kind.',
        'terms.contactUs': 'Contact Us',
        'terms.contactUsText': 'If you have any questions about these Terms of Service, please contact us at:',
        'terms.contactEmail': 'Email: info@roots.am',
        'terms.contactPhone': 'Phone: +374 91 665520',
        'terms.backHome': '← Back to Home',
        
        // Legal Notes
        'legal.title': 'Legal Notes',
        'legal.subtitle': 'Important legal information about our company',
        'legal.companyInfo': 'Company Information',
        'legal.companyName': 'Company Name:',
        'legal.addressLabel': 'Address:',
        'legal.address': '20/1 Ter-Gabrielyan Street, Vagharshapat, Armenia',
        'legal.phoneLabel': 'Phone:',
        'legal.emailLabel': 'Email:',
        'legal.ceo': 'CEO:',
        'legal.representation': 'Representation',
        'legal.representationText': 'Roots Furniture LLC is the official and exclusive representative of VerinLegno S.p.A. in Armenia. The supply of VerinLegno coatings and preparation solutions in Armenia is carried out by Roots Furniture LLC.',
        'legal.brandInfo': 'Brand Information',
        'legal.brandInfoText': 'Roots Furniture LLC is represented in the market by the Acobian Furniture brand. Acobian is the brand name, while Roots is the company name (similar to Apple → iPhone).',
        'legal.disclaimer': 'Disclaimer',
        'legal.disclaimerText': 'Product specifications and information are subject to change. Please contact us for the most current information regarding our products and services. All product images and descriptions are for illustrative purposes only.',
        'legal.verinlegnoInfo': 'VerinLegno S.p.A. is an Italian company founded in Massa e Cozzile in 1975. The company develops high-technology, reliable and increasingly green coatings for wood, metal, glass, interiors and exteriors. With over 40 years of experience, VerinLegno has distribution in many countries and offers a wide catalogue of products.',
        'legal.verinlegnoHeading': 'VerinLegno S.p.A.',
        'legal.backHome': '← Back to Home',
        
        // Footer
        'footer.companyTitle': 'VerinLegno Armenia',
        'footer.companyDesc': 'Roots Furniture LLC — Official representative of VerinLegno S.p.A. in Armenia',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.legal': 'Legal',
        'footer.privacyPolicy': 'Privacy Policy',
        'footer.termsOfService': 'Terms of Service',
        'footer.legalNotes': 'Legal Notes',
        'footer.copyright': '© 2024 Roots Furniture LLC - VerinLegno Armenia. All rights reserved.',
        'footer.madeWith': 'Made with ❤️ in Armenia'
    },
    hy: {
        // Navigation
        'nav.products': 'Ապրանքներ',
        'nav.manuals': 'Ձեռնարկներ',
        'nav.services': 'Ծառայություններ',
        'nav.partnership': 'Գործընկերություն',
        'nav.workshops': 'Վարպետաց դասեր',
        'nav.contact': 'Կապ',
        
        // Hero Section
        'hero.badge': '1975-ից • Իտալական Գերազանցություն',
        'hero.title': 'VerinLegno Հայաստանում',
        'hero.subtitle': 'Verinlegno-ն, հիմնադրված Տոսկանայում 1975թ.-ին, ոլորտում առաջատար իտալական ընկերություն է, որն արտադրում է բարձրորակ ու էկոլոգիապես մաքուր ծածկույթներ՝ փայտի, մետաղի և ապակու համար։ Հայաստանում VerinLegno-ի պաշտոնական և բացառիկ ներկայացուցիչն է Roots Furniture ընկերությունը։',
        'hero.btnDiscover': 'Ավելին բացահայտել',
        'hero.btnLearn': 'Ավելին իմանալ',
        'hero.statYears': 'Տարիների Փորձառություն',
        'hero.statCountries': 'Երկրներ',
        'hero.statEco': 'Էկոլոգիապես Մաքուր',
        
        // Legal
        'legal.badge': 'Իրավական',
        
        // Privacy Policy
        'privacy.title': 'Գաղտնիության Քաղաքականություն',
        'privacy.subtitle': 'Գաղտնիությունը մեզ համար',
        'privacy.lastUpdated': 'Վերջին թարմացում:',
        'privacy.commitment': 'Գաղտնիությունը մեզ համար',
        'privacy.commitmentText': 'Մենք հարգում ենք ձեր գաղտնիությունը․ այս կայքը չի հավաքում, չի պահում կամ չի մշակում այցելուներից անձնական տվյալներ:',
        'privacy.dataCollection': 'Տվյալների Հավաքագրում',
        'privacy.dataCollectionText': 'Մենք չենք օգտագործում cookies  և չենք կիսվում որևէ տեղեկատվությամբ երրորդ կողմերի հետ: Կոնտակտային ձևերի կամ էլեկտրոնային փոստի հաղորդագրությունների միջոցով կամավոր տրամադրած ցանկացած տեղեկատվություն օգտագործվում է բացառապես ձեր հարցումներին պատասխանելու նպատակով:',
        'privacy.contactInfo': 'Կոնտակտային Տեղեկատվություն',
        'privacy.contactInfoText': 'Եթե ունեք հարցեր այս գաղտնիության քաղաքականության վերաբերյալ, խնդրում ենք կապ հաստատել մեզ հետ:',
        'privacy.contactEmail': 'Էլ. փոստ info@roots.am',
        'privacy.contactPhone': 'Հեռախոս +374 91 665520',
        'privacy.contactAddress': 'Հասցե Վաղարշապատ, Տեր-Գաբրիելյան փողոց 20/1',
        'privacy.backHome': '← Վերադառնալ գլխավոր էջ',
        
        // Terms of Service
        'terms.title': 'Ծառայությունների Մատուցման Պայմաններ',
        'terms.subtitle': 'Մեր կայքը օգտագործելու պայմաններ և կանոններ',
        'terms.lastUpdated': 'Վերջին թարմացում:',
        'terms.agreement': 'Պայմանների Համաձայնություն',
        'terms.agreementText': 'Այս կայք մուտք գործելով և օգտագործելով, դուք համաձայնում եք հետևել և պարտավորվում եք հետևյալ պայմաններին և կանոններին:',
        'terms.useOfWebsite': 'Կայքի Օգտագործում',
        'terms.useOfWebsiteText': 'Այս կայքը ստեղծվել է բացառապես տեղեկատվական նպատակներով: Բովանդակությունը կարող է փոխվել առանց նախապես ծանուցման: Դուք կարող եք օգտագործել այս կայքը միայն օրինական նպատակներով և այս Ծառայությունների Մատուցման Պայմաններին համապատասխան:',
        'terms.intellectualProperty': 'Ինտելեկտուալ Սեփականություն',
        'terms.intellectualPropertyText': 'Այս կայքի ամբողջ բովանդակությունը, ներառյալ տեքստերը, պատկերները, լոգոները և այլ նյութեր, VerinLegno Հայաստանի և Roots Furniture LLC-ի սեփականությունն են և պաշտպանված են հեղինակային իրավունքների օրենքներով: Դուք չեք կարող վերարտադրել, տարածել կամ օգտագործել այս կայքի որևէ բովանդակություն առանց նախապես գրավոր թույլտվության:',
        'terms.limitation': 'Պատասխանատվության Սահմանափակում',
        'terms.limitationText': 'Մենք պատասխանատվություն չենք կրում այս կայքը կամ դրա մեջ պարունակվող տեղեկատվությունը օգտագործելուց առաջացած որևէ վնասի համար: Այս կայքի տեղեկատվությունը տրամադրվում է "ինչպես կա"՝ առանց որևէ երաշխիքի:',
        'terms.contactUs': 'Կապ Մեզ Հետ',
        'terms.contactUsText': 'Եթե ունեք հարցեր այս Ծառայությունների Մատուցման Պայմանների վերաբերյալ, խնդրում ենք կապ հաստատել մեզ հետ:',
        'terms.contactEmail': 'Էլ. փոստ info@roots.am',
        'terms.contactPhone': 'Հեռախոս +374 91 665520',
        'terms.backHome': '← Վերադառնալ գլխավոր էջ',
        
        // Legal Notes
        'legal.title': 'Իրավական Նշումներ',
        'legal.subtitle': 'Կարևոր իրավական տեղեկատվություն մեր ընկերության մասին',
        'legal.companyInfo': 'Ընկերության Տեղեկատվություն',
        'legal.companyName': 'Ընկերության Անվանում:',
        'legal.addressLabel': 'Հասցե:',
        'legal.address': 'Վաղարշապատ, Տեր-Գաբրիելյան փողոց 20/1',
        'legal.phoneLabel': 'Հեռախոս:',
        'legal.emailLabel': 'Էլ. փոստ:',
        'legal.ceo': 'Գլխավոր Տնօրեն:',
        'legal.representation': 'Ներկայացում',
        'legal.representationText': 'Roots Furniture LLC-ն VerinLegno S.p.A.-ի պաշտոնական և բացառիկ ներկայացուցիչն է Հայաստանում: VerinLegno ծածկույթների և նախապատրաստական լուծումների մատակարարումը Հայաստանում իրականացվում է Roots Furniture LLC-ի կողմից:',
        'legal.brandInfo': 'Ապրանքանիշի Տեղեկատվություն',
        'legal.brandInfoText': 'Roots Furniture LLC-ն շուկայում ներկայացված է Acobian Furniture ապրանքանիշով: Roots-ը Հայաստանի առաջատար կահույքի արտադրողներից մեկն է՝ տասնամյակների փորձառությամբ ճշգրիտ փայտամշակման, մեքենայացման ավտոմատացման և ժամանակակից արտադրական մեթոդների ոլորտում:',
        'legal.disclaimer': 'Հրաժարում',
        'legal.disclaimerText': 'Արտադրանքի բնութագրերը և տեղեկատվությունը կարող են փոխվել: Խնդրում ենք կապ հաստատել մեզ հետ մեր արտադրանքների և ծառայությունների վերաբերյալ ամենավերջին տեղեկատվության համար: Բոլոր արտադրանքի պատկերները և նկարագրությունները նախատեսված են միայն նկարագրական նպատակների համար:',
        'legal.verinlegnoInfo': 'VerinLegno S.p.A.-ը իտալական ընկերություն է, որը հիմնադրվել է Մասսա է Կոզիլեում 1975 թվականին: Ընկերությունը մշակում է բարձր տեխնոլոգիական, հուսալի և ավելի ու ավելի կանաչ ծածկույթներ փայտի, մետաղի, ապակու, ներքին և արտաքին մակերեսների համար: 40 տարուց ավելի փորձառությամբ VerinLegno-ն ունի բաշխում շատ երկրներում և առաջարկում է արտադրանքի լայն կատալոգ:',
        'legal.verinlegnoHeading': 'VerinLegno S.p.A.',
        'legal.backHome': '← Վերադառնալ գլխավոր էջ',
        
        // Footer
        'footer.companyTitle': 'VerinLegno Հայաստան',
        'footer.companyDesc': 'Roots Furniture LLC — VerinLegno S.p.A.-ի պաշտոնական ներկայացուցիչը Հայաստանում',
        'footer.quickLinks': 'Արագ հղումներ',
        'footer.contact': 'Կապ',
        'footer.legal': 'Իրավական',
        'footer.privacyPolicy': 'Գաղտնիության Քաղաքականություն',
        'footer.termsOfService': 'Ծառայությունների Մատուցման Պայմաններ',
        'footer.legalNotes': 'Իրավական Նշումներ',
        'footer.copyright': '© 2024 Roots Furniture LLC - VerinLegno Հայաստան: Բոլոր իրավունքները պաշտպանված են:',
        'footer.madeWith': 'Ստեղծված է ❤️-ով Հայաստանում'
    }
};

// Language Switcher
let currentLanguage = 'en';

const langButtons = document.querySelectorAll('.lang-btn');

// Function to translate the page
function translatePage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has child elements (like SVG icons)
            if (element.children.length > 0) {
                // For elements with children, find text nodes or spans to replace
                const textSpan = element.querySelector('span[data-i18n="' + key + '"]');
                if (textSpan) {
                    textSpan.textContent = translations[lang][key];
                } else {
                    // Replace only text nodes, preserve HTML
                    const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === 3);
                    if (textNodes.length > 0) {
                        textNodes[0].textContent = translations[lang][key];
                    } else {
                        // Fallback: prepend translation text
                        element.insertBefore(document.createTextNode(translations[lang][key]), element.firstChild);
                    }
                }
            } else {
                // For elements without children, replace entire textContent
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title and meta description based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const metaDesc = document.querySelector('meta[name="description"]');
    
    if (currentPage === 'privacy-policy.html') {
        if (lang === 'hy') {
            document.title = 'Գաղտնիության Քաղաքականություն - VerinLegno Հայաստան';
            if (metaDesc) metaDesc.setAttribute('content', 'VerinLegno Հայաստանի գաղտնիության քաղաքականություն:');
        } else {
            document.title = 'Privacy Policy - VerinLegno';
            if (metaDesc) metaDesc.setAttribute('content', 'Privacy Policy for VerinLegno Armenia website.');
        }
    } else if (currentPage === 'terms-of-service.html') {
        if (lang === 'hy') {
            document.title = 'Ծառայությունների Մատուցման Պայմաններ - VerinLegno Հայաստան';
            if (metaDesc) metaDesc.setAttribute('content', 'VerinLegno Հայաստանի կայքի օգտագործման պայմաններ:');
        } else {
            document.title = 'Terms of Service - VerinLegno';
            if (metaDesc) metaDesc.setAttribute('content', 'Terms and conditions for using VerinLegno Armenia website.');
        }
    } else if (currentPage === 'legal-notes.html') {
        if (lang === 'hy') {
            document.title = 'Իրավական Նշումներ - VerinLegno Հայաստան';
            if (metaDesc) metaDesc.setAttribute('content', 'VerinLegno Հայաստանի իրավական նշումներ և ընկերության տեղեկատվություն:');
        } else {
            document.title = 'Legal Notes - VerinLegno';
            if (metaDesc) metaDesc.setAttribute('content', 'Legal notes and company information for VerinLegno Armenia.');
        }
    }
}

langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Translate the page
        translatePage(lang);
        
        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    });
});

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set active button
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === preferredLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Translate page if not English
    if (preferredLang !== 'en') {
        translatePage(preferredLang);
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
    
    // Special handling for workshops section - FORCE visibility with highest priority
    const workshopsSection = document.getElementById('workshops');
    if (workshopsSection) {
        // Use setProperty with important flag to override any existing styles
        workshopsSection.style.setProperty('display', 'block', 'important');
        workshopsSection.style.setProperty('visibility', 'visible', 'important');
        workshopsSection.style.setProperty('opacity', '1', 'important');
        workshopsSection.style.setProperty('min-height', '400px', 'important');
        workshopsSection.style.setProperty('padding', '80px 20px', 'important');
        workshopsSection.style.setProperty('position', 'relative', 'important');
        workshopsSection.style.setProperty('width', '100%', 'important');
        workshopsSection.style.setProperty('height', 'auto', 'important');
        workshopsSection.style.setProperty('overflow', 'visible', 'important');
        
        // Ensure workshops grid is visible
        const workshopsGrid = workshopsSection.querySelector('.workshops-grid');
        if (workshopsGrid) {
            workshopsGrid.style.setProperty('display', 'grid', 'important');
            workshopsGrid.style.setProperty('visibility', 'visible', 'important');
            workshopsGrid.style.setProperty('opacity', '1', 'important');
        }
        
        // Ensure container is visible
        const container = workshopsSection.querySelector('.container');
        if (container) {
            container.style.setProperty('display', 'block', 'important');
            container.style.setProperty('visibility', 'visible', 'important');
            container.style.setProperty('opacity', '1', 'important');
        }
        
        // Ensure section header is visible
        const sectionHeader = workshopsSection.querySelector('.section-header');
        if (sectionHeader) {
            sectionHeader.style.setProperty('display', 'block', 'important');
            sectionHeader.style.setProperty('visibility', 'visible', 'important');
            sectionHeader.style.setProperty('opacity', '1', 'important');
        }
        
        // Ensure all workshop cards are visible
        const workshopCards = workshopsSection.querySelectorAll('.workshop-card');
        workshopCards.forEach(card => {
            card.style.setProperty('display', 'block', 'important');
            card.style.setProperty('visibility', 'visible', 'important');
            card.style.setProperty('opacity', '1', 'important');
        });
        
        // Ensure CTA is visible
        const workshopCta = workshopsSection.querySelector('.workshop-cta');
        if (workshopCta) {
            workshopCta.style.setProperty('display', 'block', 'important');
            workshopCta.style.setProperty('visibility', 'visible', 'important');
            workshopCta.style.setProperty('opacity', '1', 'important');
        }
        
        console.log('Workshops section forced visible:', workshopsSection.offsetHeight, workshopsSection.offsetWidth);
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

// CRITICAL: Run workshops section fix IMMEDIATELY - before anything else
(function forceWorkshopsVisible() {
    function fixWorkshops() {
        const workshopsSection = document.getElementById('workshops');
        if (workshopsSection) {
            // Force visibility using setProperty with important flag
            workshopsSection.style.setProperty('display', 'block', 'important');
            workshopsSection.style.setProperty('visibility', 'visible', 'important');
            workshopsSection.style.setProperty('opacity', '1', 'important');
            workshopsSection.style.setProperty('min-height', '400px', 'important');
            workshopsSection.style.setProperty('padding', '80px 20px', 'important');
            workshopsSection.style.setProperty('position', 'relative', 'important');
            workshopsSection.style.setProperty('width', '100%', 'important');
            workshopsSection.style.setProperty('height', 'auto', 'important');
            workshopsSection.style.setProperty('overflow', 'visible', 'important');
            
            const grid = workshopsSection.querySelector('.workshops-grid');
            if (grid) {
                grid.style.setProperty('display', 'grid', 'important');
                grid.style.setProperty('visibility', 'visible', 'important');
                grid.style.setProperty('opacity', '1', 'important');
            }
            
            const container = workshopsSection.querySelector('.container');
            if (container) {
                container.style.setProperty('display', 'block', 'important');
                container.style.setProperty('visibility', 'visible', 'important');
                container.style.setProperty('opacity', '1', 'important');
            }
            
            // Check if section is actually visible
            const rect = workshopsSection.getBoundingClientRect();
            if (rect.height === 0 || rect.width === 0) {
                console.warn('Workshops section collapsed, forcing dimensions');
                workshopsSection.style.setProperty('min-height', '400px', 'important');
                workshopsSection.style.setProperty('height', 'auto', 'important');
            }
        }
    }
    
    // Run immediately
    fixWorkshops();
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixWorkshops);
    }
    
    // Run multiple times to catch any issues
    setTimeout(fixWorkshops, 0);
    setTimeout(fixWorkshops, 50);
    setTimeout(fixWorkshops, 100);
    setTimeout(fixWorkshops, 200);
})();

// Run immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureAllSectionsVisible);
} else {
    ensureAllSectionsVisible();
}

// Run multiple times to catch any late-loading issues or dynamic changes
setTimeout(ensureAllSectionsVisible, 50);
setTimeout(ensureAllSectionsVisible, 100);
setTimeout(ensureAllSectionsVisible, 300);
setTimeout(ensureAllSectionsVisible, 500);
setTimeout(ensureAllSectionsVisible, 1000);
setTimeout(ensureAllSectionsVisible, 2000);

// Monitor for any changes that might hide sections or detect new sections being added
const sectionObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
            const target = mutation.target;
            if (target.tagName === 'SECTION' || target.classList?.contains('section')) {
                // Check if section was hidden
                const display = getComputedStyle(target).display;
                const visibility = getComputedStyle(target).visibility;
                const opacity = getComputedStyle(target).opacity;
                
                // Special check for workshops section
                if (target.id === 'workshops' || target.classList.contains('workshops-section')) {
                    if (display === 'none' || visibility === 'hidden' || opacity === '0' || target.offsetHeight === 0) {
                        console.warn('Workshops section being hidden, forcing visibility');
                        target.style.setProperty('display', 'block', 'important');
                        target.style.setProperty('visibility', 'visible', 'important');
                        target.style.setProperty('opacity', '1', 'important');
                        target.style.setProperty('min-height', '400px', 'important');
                        target.style.setProperty('padding', '80px 20px', 'important');
                        const grid = target.querySelector('.workshops-grid');
                        if (grid) {
                            grid.style.setProperty('display', 'grid', 'important');
                            grid.style.setProperty('visibility', 'visible', 'important');
                            grid.style.setProperty('opacity', '1', 'important');
                        }
                    }
                }
                
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

