// =======================
// Global Variables
// =======================
let currentLanguage = 'en';
let translations = {};

// =======================
// Supported Languages
// =======================
const SUPPORTED_LANGUAGES = {
    'en': { 
        name: 'English', 
        code: 'EN',
        flagClass: 'fi fi-gb',
        flagStyle: 'font-size: 16px;'
    },
    'de': { 
        name: 'Deutsch', 
        code: 'DE',
        flagClass: 'fi fi-de',
        flagStyle: 'font-size: 16px;'
    }
};

// =======================
// Initialize Language System
// =======================
async function initializeLanguage() {
    currentLanguage = localStorage.getItem('vgu-language') || 'en';
    await loadTranslations();
    updateLanguageToggle();
    translatePage();
    console.log("Language initialized:", currentLanguage);
}

// =======================
// Load Translation Files
// =======================
async function loadTranslations() {
    try {
        const response = await fetch(`${currentLanguage}.json`);
        if (response.ok) {
            translations = await response.json();
        } else {
            throw new Error('Translation file not found');
        }
    } catch (error) {
        console.warn('Failed to load translations, using fallback:', error);
        translations = getFallbackTranslations();
    }
}

// =======================
// Fallback Translations
// =======================
function getFallbackTranslations() {
    if (currentLanguage === 'de') {
        return {
            "nav": {
                "home": "Startseite",
                "about": "Über uns",
                "features": "Funktionen",
                "community": "Gemeinschaft",
                "contact": "Kontakt",
                "surbook": "Überlensbuch"
            },
            "footer": {
                "description": "Verbindung von Studenten an der Vietnamesisch-Deutschen Universität für eine außergewöhnliche akademische und soziale Erfahrung.",
                "quickLinks": "Schnelle Links",
                "support": "Unterstützung",
                "helpCenter": "Hilfezentrum",
                "emergency": "Notfallkontakte",
                "mentalHealth": "Mentale Gesundheit",
                "technical": "Technischer Support",
                "copyright": "© 2025 VGU Buddy Programm. Alle Rechte vorbehalten. | Verfügbar auf Englisch & Deutsch"
            }
        };
    } else {
        return {
            "nav": {
                "home": "Home",
                "about": "About",
                "features": "Features",
                "community": "Community",
                "contact": "Contact",
                "surbook": "Survival Book"
            },
            "footer": {
                "description": "Connecting students at Vietnamese-German University for an extraordinary academic and social experience.",
                "quickLinks": "Quick Links",
                "support": "Support",
                "helpCenter": "Help Center",
                "emergency": "Emergency Contacts",
                "mentalHealth": "Mental Health",
                "technical": "Technical Support",
                "copyright": "© 2025 VGU Buddy Program. All rights reserved. | Available in English & German"
            },
        };
    }
}

// =======================
// Update Language Toggle UI
// =======================
function updateLanguageToggle() {
    const langData = SUPPORTED_LANGUAGES[currentLanguage];
    
    // Desktop toggle
    const flagElement = document.getElementById('languageFlag');
    const codeElement = document.getElementById('languageCode');
    if (flagElement && codeElement) {
        flagElement.className = langData.flagClass;
        flagElement.style.cssText = langData.flagStyle;
        codeElement.textContent = langData.code;
    }
    
    // Mobile toggle
    const mobileFlagElement = document.getElementById('mobileLanguageFlag');
    const mobileCodeElement = document.getElementById('mobileLanguageCode');
    if (mobileFlagElement && mobileCodeElement) {
        mobileFlagElement.className = langData.flagClass;
        mobileFlagElement.style.cssText = langData.flagStyle;
        mobileCodeElement.textContent = langData.name;
    }
}

// =======================
// Translate Page Content
// =======================
function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// =======================
// Get Nested Translation by Key
// =======================
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}

// =======================
// Toggle Language
// =======================
async function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    localStorage.setItem('vgu-language', currentLanguage);
    await loadTranslations();  // load lại bản dịch mới
    updateLanguageToggle();
    translatePage();
    console.log("Language switched to:", currentLanguage);
}


// =======================
// Mobile Menu Toggle
// =======================
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// =======================
// Initialize on Page Load
// =======================
document.addEventListener('DOMContentLoaded', initializeLanguage);

// Main section related JavaScript functions
(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        animationDuration: 300
    };

    let isExpanded = false;
    let currentLanguage = 'en';

    // Embedded translations
    const translations = {
        en: {
            article: {
                title: 'International Day',
                date: 'September 10, 2025',
                caption: 'VGU International Day',
                summary: 'Join us for an exciting introduction to university life at VGU, where new students discover their academic journey and connect with our vibrant community.',
                paragraph1: `🚨 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧 𝐒𝐭𝐮𝐝𝐞𝐧𝐭𝐬!
                            Get ready for an exciting opportunity! On 𝟏𝟕 𝐒𝐞𝐩𝐭𝐞𝐦𝐛𝐞𝐫 𝟐𝟎𝟐𝟓, the 𝐕𝐆𝐔 𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐎𝐟𝐟𝐢𝐜𝐞 will host an 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 packed with everything you need to know about studying abroad.
                            ✨ What’s waiting for you?
                            🌍 𝐋𝐢𝐬𝐭 𝐨𝐟 𝐕𝐆𝐔 𝐏𝐚𝐫𝐭𝐧𝐞𝐫 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐢𝐞𝐬
                            📝 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐏𝐫𝐨𝐜𝐞𝐬𝐬 & 𝐓𝐢𝐩𝐬
                            💰 𝐒𝐜𝐡𝐨𝐥𝐚𝐫𝐬𝐡𝐢𝐩𝐬 & 𝐅𝐢𝐧𝐚𝐧𝐜𝐢𝐚𝐥 𝐒𝐮𝐩𝐩𝐨𝐫𝐭
                            🎒 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐚𝐥 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐘𝐨𝐮𝐫 𝐄𝐱𝐜𝐡𝐚𝐧𝐠𝐞 𝐒𝐞𝐦𝐞𝐬𝐭𝐞𝐫`,
                paragraph2: 'The day begins with an inspiring opening ceremony featuring welcome speeches from university leadership, faculty presentations, and vibrant performances by our student organizations. New students receive comprehensive orientation materials and meet their academic advisors.',
                paragraph3: 'Interactive campus tours showcase our state-of-the-art facilities, modern laboratories, collaborative learning spaces, and recreational areas. Students explore different faculties, connect with professors, and discover the diverse academic programs and international opportunities available at VGU.',
                show_more: 'Show More',
                show_less: 'Show Less'
            },
        },
        de: {
            article: {
                title: 'Willkommenstag',
                date: '10. September 2025',
                caption: 'Studenten feiern am VGU Willkommenstag',
                summary: 'Begleiten Sie uns zu einer aufregenden Einführung ins Universitätsleben an der VGU, wo neue Studenten ihre akademische Reise entdecken und sich mit unserer lebendigen Gemeinschaft verbinden.',
                paragraph1: 'Der Willkommenstag an der Vietnamesisch-Deutschen Universität markiert den Beginn eines außergewöhnlichen akademischen Abenteuers. Diese besondere Veranstaltung führt neue Studenten in unser einzigartiges Bildungsumfeld ein, das vietnamesische Gastfreundschaft mit deutscher akademischer Exzellenz verbindet.',
                paragraph2: 'Der Tag beginnt mit einer inspirierenden Eröffnungszeremonie mit Begrüßungsreden der Universitätsleitung, Fakultätspräsentationen und lebendigen Aufführungen unserer Studentenorganisationen. Neue Studenten erhalten umfassende Orientierungsmaterialien und treffen ihre akademischen Berater.',
                paragraph3: 'Interaktive Campus-Touren zeigen unsere hochmodernen Einrichtungen, moderne Labore, kollaborative Lernräume und Erholungsbereiche. Studenten erkunden verschiedene Fakultäten, knüpfen Kontakte zu Professoren und entdecken die vielfältigen Studienprogramme und internationalen Möglichkeiten, die an der VGU verfügbar sind.',
                show_more: 'Mehr anzeigen',
                show_less: 'Weniger anzeigen'
            },
        }
    };

    // DOM Elements
    const elements = {
        readMoreBtn: document.getElementById('read-more-btn'),
        expandableContent: document.getElementById('expandable-content'),
        translatableElements: document.querySelectorAll('[data-i18n]')
    };

    // Read More Functionality
    function toggleReadMore() {
        if (!elements.readMoreBtn || !elements.expandableContent) return;
        
        isExpanded = !isExpanded;
        
        // Update content visibility
        elements.expandableContent.classList.toggle('expanded', isExpanded);
        
        // Update ARIA attributes
        elements.readMoreBtn.setAttribute('aria-expanded', isExpanded.toString());
        elements.expandableContent.setAttribute('aria-expanded', isExpanded.toString());
        
        // Update button text
        updateReadMoreButton();
        
        // Smooth scroll to content if expanding
        if (isExpanded) {
            setTimeout(() => {
                elements.expandableContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, CONFIG.animationDuration);
        }
        
        console.log(`📖 Article ${isExpanded ? 'expanded' : 'collapsed'}`);
    }

    function updateReadMoreButton() {
        if (!elements.readMoreBtn) return;
        
        const key = isExpanded ? 'article.show_less' : 'article.show_more';
        const text = getNestedValue(translations[currentLanguage], key);
        
        if (text) {
            elements.readMoreBtn.textContent = text;
        }
    }

    // Thumbnail Gallery
    function initializeThumbnails() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const heroImage = document.querySelector('.hero-image');
        
        if (!thumbnails.length || !heroImage) return;
        
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                // Update active state
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                
                // Visual effect for demo
                heroImage.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    heroImage.style.transform = 'scale(1)';
                }, 150);
                
                console.log(`🖼️ Thumbnail ${index + 1} selected`);
            });
        });
    }

    // Language Support
    function updateContent() {
        elements.translatableElements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = getNestedValue(translations[currentLanguage], key);
            
            if (translation) {
                element.textContent = translation;
            }
        });
        
        updateReadMoreButton();
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // Event Listeners
    function setupEventListeners() {
        // Read more toggle
        if (elements.readMoreBtn) {
            elements.readMoreBtn.addEventListener('click', toggleReadMore);
        }

    }

    // Initialize
    function init() {
        setupEventListeners();
        initializeThumbnails();
        updateContent();
        
        // Set initial ARIA attributes
        if (elements.readMoreBtn && elements.expandableContent) {
            elements.readMoreBtn.setAttribute('aria-expanded', 'false');
            elements.expandableContent.setAttribute('aria-expanded', 'false');
        }
        
        console.log('✅ Main section initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    const heroImage = document.getElementById('hero-image');
    const heroCaption = document.getElementById('image-caption');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Lấy đường dẫn ảnh và caption từ data attribute
            const newSrc = thumbnail.getAttribute('data-src');
            const newCaption = thumbnail.getAttribute('data-caption');

            // Thay đổi ảnh chính và caption
            heroImage.src = newSrc;
            heroCaption.textContent = newCaption;

            // Cập nhật trạng thái active cho thumbnail
            thumbnails.forEach(btn => btn.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

})();

