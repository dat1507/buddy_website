// Global Variables
let isSignUp = false;
let currentLanguage = 'en';
let translations = {};


// Language Management
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

// Initialize language system
async function initializeLanguage() {
    currentLanguage = localStorage.getItem('vgu-language') || 'en';
    await loadTranslations();
    updateLanguageToggle();
    translatePage();
}

// Load translation files
async function loadTranslations() {
    try {
        const response = await fetch(`locales/${currentLanguage}.json`);
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

// Fallback translations (embedded for demo)
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
            "hero": {
                "title1": "Verbinde dich mit",
                "title2": "VGU Buddy",
                "subtitle": "Tritt der ultimativen Vietnamesisch-Deutschen Universitätsgemeinschaft bei. Knüpfe Verbindungen, teile Erfahrungen und gedeihe gemeinsam.",
                "joinNow": "Jetzt beitreten",
                "learnMore": "Mehr erfahren",
                "cardTitle": "Willkommen bei VGU Buddy",
                "cardSubtitle": "Dein Tor zu einer erstaunlichen Universitätserfahrung mit Freunden, die sich kümmern."
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
            "stats": {
                "title": "VGU Buddy in Zahlen",
                "subtitle": "Tritt einer blühenden Gemeinschaft bei, die das Universitätsleben für alle besser macht.",
                "activeStudents": "Aktive Studenten",
                "activeStudentsDesc": "Täglich verbunden und engagiert",
                "eventsMonthly": "Monatliche Veranstaltungen",
                "eventsMonthlyDesc": "Kultureller Austausch & Aktivitäten",
                "studyGroups": "Lerngruppen",
                "studyGroupsDesc": "Akademische Unterstützungsnetzwerke",
                "satisfaction": "Zufriedenheitsrate",
                "satisfactionDesc": "Studenten lieben VGU Buddy"
            },
            "about": {
                "title": "Warum VGU Buddy wählen?",
                "subtitle": "VGU Buddy ist nicht nur eine weitere Plattform – es ist dein kompletter Universitätsbegleiter. Wir haben alles gebaut, was du brauchst, um akademisch und sozial erfolgreich zu sein.",
                "social": {
                    "title": "Soziale Vernetzung",
                    "desc": "Verbinde dich mit Gleichgesinnten, teile Erfahrungen und baue dauerhafte Freundschaften auf."
                },
                "academic": {
                    "title": "Akademische Unterstützung",
                    "desc": "Zugang zu Ressourcen, Lerngruppen beitreten und in deinen Studien glänzen."
                },
                "campus": {
                    "title": "Campus-Services",
                    "desc": "Einrichtungen buchen, Bibliotheksdienste nutzen und deinen Zeitplan verwalten."
                },
                "visual": {
                    "title": "Starte deine Reise",
                    "subtitle": "Alles was du brauchst an einem Ort"
                }
            },
            "features": {
                "title": "Mächtige Funktionen",
                "subtitle": "Alles was du für eine erstaunliche Universitätserfahrung brauchst, alles in einer Plattform.",
                "social": {
                    "title": "Soziales Zentrum",
                    "desc": "Verbinde dich, chatte und teile mit deiner VGU-Gemeinschaft in Echtzeit.",
                    "item1": "Freundesverbindungen",
                    "item2": "Gruppennachrichten",
                    "item3": "Waren"
                },
                "events": {
                    "title": "Veranstaltungskalender",
                    "desc": "Verpasse nie wichtige Veranstaltungen, Workshops oder kulturelle Aktivitäten.",
                    "item1": "Veranstaltungs-RSVP",
                    "item2": "Kalender-Synchronisation",
                    "item3": "Erinnerungen"
                },
                "academic": {
                    "title": "Akademische Werkzeuge",
                    "desc": "Zugang zu all deinen akademischen Ressourcen und Verwaltung deiner Studien.",
                    "item1": "Stundenpläne",
                    "item2": "Bibliothekszugang",
                    "item3": "Lernräume"
                },
                "sports": {
                    "title": "Sport & Fitness",
                    "desc": "Buche Einrichtungen und bleibe aktiv mit deinen Buddies.",
                    "item1": "Platzbuchung",
                    "item2": "Fitnessstudio-Zugang",
                    "item3": "Sportgruppen"
                },
                "support": {
                    "title": "Support-Services",
                    "desc": "Erhalte Hilfe wenn du sie brauchst mit umfassender Unterstützung.",
                    "item1": "Mentale Gesundheit",
                    "item2": "Notfallkontakte",
                    "item3": "Universitäts-Hotline"
                },
                "global": {
                    "title": "Globale Gemeinschaft",
                    "desc": "Verbinde dich über Kulturen hinweg mit mehrsprachiger Unterstützung.",
                    "item1": "Englische Oberfläche",
                    "item2": "Deutsche Unterstützung",
                    "item3": "Sprachaustausch"
                }
            },
            "community": {
                "title": "Was Studenten sagen",
                "subtitle": "Höre von echten VGU-Studenten über ihre Erfahrungen mit dem Buddy-Programm.",
                "testimonial1": "VGU Buddy hat meine Universitätserfahrung transformiert. Ich fand meine Lerngruppe, schloss lebenslange Freundschaften und verpasste nie eine wichtige Veranstaltung. Es ist wie ein persönlicher Assistent für das Studentenleben!",
                "testimonial2": "Als Austauschstudentin half mir VGU Buddy, mich nahtlos zu integrieren. Die mehrsprachige Unterstützung und kulturellen Veranstaltungen ließen mich sofort zu Hause fühlen. Sehr empfehlenswert!",
                "testimonial3": "Die Sportbuchungsfunktion ist erstaunlich! Ich kann einfach Plätze für Badminton mit Freunden reservieren. VGU Buddy macht das Campus-Leben so viel organisierter und spaßiger."
            },
            "cta": {
                "title": "Bereit, deine Universitätserfahrung zu transformieren?",
                "subtitle": "Tritt Tausenden von VGU-Studenten bei, die bereits das Beste aus ihrer Universitätsreise machen.",
                "join": "Der Gemeinschaft beitreten",
                "demo": "Demo ansehen"
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
            },
            "demo": {
                "message": "🎬 Demo kommt bald! Dies würde alle erstaunlichen Funktionen von VGU Buddy in Aktion zeigen."
            },
            "validation": {
                "invalidEmail": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                "shortPassword": "Das Passwort muss mindestens 6 Zeichen lang sein.",
                "invalidName": "Bitte geben Sie Ihren vollständigen Namen ein.",
                "passwordMismatch": "Die Passwörter stimmen nicht überein."
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
            "hero": {
                "title1": "Connect with",
                "title2": "VGU Buddy",
                "subtitle": "Join the ultimate Vietnamese-German University community. Build connections, share experiences, and thrive together.",
                "joinNow": "Join Now",
                "learnMore": "Learn More",
                "cardTitle": "Welcome to VGU Buddy",
                "cardSubtitle": "Your gateway to an amazing university experience with friends who care."
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
            "stats": {
                "title": "VGU Buddy by Numbers",
                "subtitle": "Join a thriving community that's making university life better for everyone.",
                "activeStudents": "Active Students",
                "activeStudentsDesc": "Connected and engaged daily",
                "eventsMonthly": "Events Monthly",
                "eventsMonthlyDesc": "Cultural exchanges & activities",
                "studyGroups": "Study Groups",
                "studyGroupsDesc": "Academic support networks",
                "satisfaction": "Satisfaction Rate",
                "satisfactionDesc": "Students love VGU Buddy"
            },
            "about": {
                "title": "Why Choose VGU Buddy?",
                "subtitle": "VGU Buddy isn't just another platform – it's your complete university companion. We've built everything you need to succeed academically and socially.",
                "social": {
                    "title": "Social Networking",
                    "desc": "Connect with peers, share experiences, and build lasting friendships."
                },
                "academic": {
                    "title": "Academic Support",
                    "desc": "Access resources, join study groups, and excel in your studies."
                },
                "campus": {
                    "title": "Campus Services",
                    "desc": "Book facilities, access library services, and manage your schedule."
                },
                "visual": {
                    "title": "Launch Your Journey",
                    "subtitle": "Everything you need in one place"
                }
            },
            "features": {
                "title": "Powerful Features",
                "subtitle": "Everything you need for an amazing university experience, all in one platform.",
                "social": {
                    "title": "Social Hub",
                    "desc": "Connect, chat, and share with your VGU community in real-time.",
                    "item1": "Friend connections",
                    "item2": "Group messaging",
                    "item3": "Merchandise"
                },
                "events": {
                    "title": "Events Calendar",
                    "desc": "Never miss important events, workshops, or cultural activities.",
                    "item1": "Event RSVP",
                    "item2": "Calendar sync",
                    "item3": "Reminders"
                },
                "academic": {
                    "title": "Academic Tools",
                    "desc": "Access all your academic resources and manage your studies.",
                    "item1": "Class schedules",
                    "item2": "Library access",
                    "item3": "Study rooms"
                },
                "sports": {
                    "title": "Sports & Fitness",
                    "desc": "Book facilities and stay active with your buddies.",
                    "item1": "Court booking",
                    "item2": "Gym access",
                    "item3": "Sports groups"
                },
                "support": {
                    "title": "Support Services",
                    "desc": "Get help when you need it with comprehensive support.",
                    "item1": "Mental health",
                    "item2": "Emergency contacts",
                    "item3": "University hotline"
                },
                "global": {
                    "title": "Global Community",
                    "desc": "Connect across cultures with multilingual support.",
                    "item1": "English interface",
                    "item2": "German support",
                    "item3": "Language exchange"
                }
            },
            "community": {
                "title": "What Students Say",
                "subtitle": "Hear from real VGU students about their experiences with the Buddy Program.",
                "testimonial1": "VGU Buddy transformed my university experience. I found my study group, made lifelong friends, and never missed an important event. It's like having a personal assistant for student life!",
                "testimonial2": "As an exchange student, VGU Buddy helped me integrate seamlessly. The multilingual support and cultural events made me feel at home immediately. Highly recommended!",
                "testimonial3": "The sports booking feature is amazing! I can easily reserve courts for badminton with friends. VGU Buddy makes campus life so much more organized and fun."
            },
            "cta": {
                "title": "Ready to Transform Your University Experience?",
                "subtitle": "Join thousands of VGU students who are already making the most of their university journey.",
                "join": "Join the Community",
                "demo": "Watch Demo"
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
            "demo": {
                "message": "🎬 Demo coming soon! This would showcase all the amazing features of VGU Buddy in action."
            },
            "validation": {
                "invalidEmail": "Please enter a valid email address.",
                "shortPassword": "Password must be at least 6 characters long.",
                "invalidName": "Please enter your full name.",
                "passwordMismatch": "Passwords do not match."
            }
        };
    }
}

// Toggle language function
async function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    localStorage.setItem('vgu-language', currentLanguage);
    await loadTranslations();
    updateLanguageToggle();
    translatePage();

    const toggleButton = document.getElementById('languageToggle');
    if (toggleButton) {
        toggleButton.setAttribute('aria-pressed', currentLanguage === 'de' ? 'true' : 'false');
    }
}


// Update language toggle UI
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


// Translate page content
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

// Get nested translation by key
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

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

// Navigation Functions
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Demo Function
function showDemo() {
    const message = getNestedTranslation(translations, 'demo.message') || 
        '🎬 Demo coming soon! This would showcase all the amazing features of VGU Buddy in action.';
    alert(message);
}

// Form Validation
function validateForm(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (!email || !email.includes('@')) {
        const message = getNestedTranslation(translations, 'validation.invalidEmail') || 
            'Please enter a valid email address.';
        alert(message);
        return false;
    }
    
    if (!password || password.length < 6) {
        const message = getNestedTranslation(translations, 'validation.shortPassword') || 
            'Password must be at least 6 characters long.';
        alert(message);
        return false;
    }
    
    if (isSignUp) {
        const name = formData.get('name');
        const confirmPassword = formData.get('confirmPassword');
        
        if (!name || name.trim().length < 2) {
            const message = getNestedTranslation(translations, 'validation.invalidName') || 
                'Please enter your full name.';
            alert(message);
            return false;
        }
        
        if (password !== confirmPassword) {
            const message = getNestedTranslation(translations, 'validation.passwordMismatch') || 
                'Passwords do not match.';
            alert(message);
            return false;
        }
    }
    
    return true;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    document.getElementById('authForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        if (validateForm(formData)) {
            const action = isSignUp ? 
                (getNestedTranslation(translations, 'auth.welcomeMessage') || 'Welcome to VGU Buddy! 🎉') : 
                (getNestedTranslation(translations, 'auth.welcomeBack') || 'Welcome back! 👋');
            const demoMessage = getNestedTranslation(translations, 'auth.demoMessage') || 
                'This is a demo - full authentication would be implemented with secure backend services.';
            alert(action + ' ' + demoMessage);
            closeAuthModal();
        }
    });
    
    document.getElementById('authModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAuthModal();
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('mobileMenu').classList.remove('active');
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAuthModal();
            document.getElementById('mobileMenu').classList.remove('active');
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card-hover, .testimonial-card').forEach(element => {
        observer.observe(element);
    });
});

// Responsive Navigation
function handleResize() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

