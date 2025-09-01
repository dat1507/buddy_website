// =======================
// Global Variables
// =======================
let isSignUp = false;
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
                "contact": "Kontakt"
            },
            "auth": {
                "signIn": "Anmelden",
                "signUp": "Registrieren",
                "joinTitle": "Bei VGU Buddy beitreten",
                "welcomeBack": "Willkommen zurück",
                "createAccount": "Konto erstellen",
                "haveAccount": "Bereits ein Konto?",
                "noAccount": "Noch kein Konto?",
                "fullName": "Vollständiger Name",
                "email": "E-Mail",
                "password": "Passwort",
                "confirmPassword": "Passwort bestätigen",
                "welcomeMessage": "Willkommen bei VGU Buddy! 🎉",
                "demoMessage": "Dies ist eine Demo - die vollständige Authentifizierung würde mit sicheren Backend-Services implementiert."
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
                "contact": "Contact"
            },
            "auth": {
                "signIn": "Sign In",
                "signUp": "Sign Up",
                "joinTitle": "Join VGU Buddy",
                "welcomeBack": "Welcome Back",
                "createAccount": "Create Account",
                "haveAccount": "Already have an account?",
                "noAccount": "Don't have an account?",
                "fullName": "Full Name",
                "email": "Email",
                "password": "Password",
                "confirmPassword": "Confirm Password",
                "welcomeMessage": "Welcome to VGU Buddy! 🎉",
                "demoMessage": "This is a demo - full authentication would be implemented with secure backend services."
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
            }
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
                title: 'Welcome Day',
                date: 'September 10, 2025',
                caption: 'VGU Welcome Day',
                summary: 'Join us for an exciting introduction to university life at VGU, where new students discover their academic journey and connect with our vibrant community.',
                paragraph1: 'Welcome Day at Vietnamese-German University marks the beginning of an extraordinary academic adventure. This special event introduces new students to our unique educational environment that combines Vietnamese hospitality with German academic excellence.',
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
})();

// Authentication Functions
function showSignIn() {
    isSignUp = false;
    updateAuthModal();
    document.getElementById('authModal').classList.remove('hidden');
}

function showSignUp() {
    isSignUp = true;
    updateAuthModal();
    document.getElementById('authModal').classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
}

function switchAuthMode() {
    isSignUp = !isSignUp;
    updateAuthModal();
}

function updateAuthModal() {
    const title = document.getElementById('authTitle');
    const buttonText = document.getElementById('authButtonText');
    const switchText = document.getElementById('authSwitchText');
    const switchButton = document.getElementById('authSwitchButton');
    const nameField = document.getElementById('nameField');
    const confirmPasswordField = document.getElementById('confirmPasswordField');
    
    if (isSignUp) {
        title.textContent = getNestedTranslation(translations, 'auth.joinTitle') || 'Join VGU Buddy';
        buttonText.textContent = getNestedTranslation(translations, 'auth.createAccount') || 'Create Account';
        switchText.textContent = getNestedTranslation(translations, 'auth.haveAccount') || 'Already have an account?';
        switchButton.textContent = getNestedTranslation(translations, 'auth.signIn') || 'Sign In';
        nameField.classList.remove('hidden');
        confirmPasswordField.classList.remove('hidden');
    } else {
        title.textContent = getNestedTranslation(translations, 'auth.welcomeBack') || 'Welcome Back';
        buttonText.textContent = getNestedTranslation(translations, 'auth.signIn') || 'Sign In';
        switchText.textContent = getNestedTranslation(translations, 'auth.noAccount') || "Don't have an account?";
        switchButton.textContent = getNestedTranslation(translations, 'auth.signUp') || 'Sign Up';
        nameField.classList.add('hidden');
        confirmPasswordField.classList.add('hidden');
    }
}
