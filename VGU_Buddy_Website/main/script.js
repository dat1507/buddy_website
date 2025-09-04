// Global Variables
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
            "stats": {
                "title": "Besondere Veranstaltungen",
                "subtitle": "Nimm an spannenden Veranstaltungen teil, die das Uni-Leben für alle bereichern.",
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
            "stats": {
                "title": "Featured Events",
                "subtitle": "Join thriving events that's making university life better for everyone.",
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


// Navigation Functions
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Slider Fuction
const slider = document.getElementById('slider');
let slides = document.querySelectorAll('#slider a');
const totalSlides = slides.length;
let currentIndex = 1;

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

// Update slides NodeList
slides = document.querySelectorAll('#slider a');

const slideWidth = 100; // each slide = 100%
slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;

function updateSlider() {
  slider.style.transition = 'transform 0.7s ease';
  slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
}

function nextSlide() {
  if (currentIndex >= slides.length - 1) return;
  currentIndex++;
  updateSlider();
}

function prevSlide() {
  if (currentIndex <= 0) return;
  currentIndex--;
  updateSlider();
}

// Infinite loop fix
slider.addEventListener('transitionend', () => {
  if (slides[currentIndex].id === "first-clone") {
    slider.style.transition = 'none';
    currentIndex = 1;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
  }
  if (slides[currentIndex].id === "last-clone") {
    slider.style.transition = 'none';
    currentIndex = totalSlides - 2;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
  }
});

// Auto-play (every 4 seconds)
let autoPlay = setInterval(() => {
  nextSlide();
}, 4000);

// Pause auto-play when hovering
slider.addEventListener("mouseenter", () => clearInterval(autoPlay));
slider.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => {
    nextSlide();
  }, 4000);
});

// End of Slider Function Section


// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
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

document.addEventListener('DOMContentLoaded', () => {
      const pr = document.getElementById('pageReveal');
      if (pr && !pr.dataset.initialized) {
        pr.dataset.initialized = '1';
        pr.classList.add('active');
        pr.addEventListener('animationend', () => pr.classList.remove('active'), { once: true });
      }
    });


/* =================== RELOAD / RESTORE ANIMATION + ANIMATION RESTARTER =================== */

/**
 * Replays any CSS animations for elements with classes that start with "animate-".
 * This fixes the issue where animations only ran once when classes were hard-coded
 * in the HTML and the page was restored from bfcache (back/forward navigation).
 *
 * How it works: remove animate-* classes, force a reflow, then add them back.
 */
function restartAnimations(root = document) {
  const animated = root.querySelectorAll('[class*="animate-"]');
  animated.forEach(el => {
    const animClasses = Array.from(el.classList).filter(c => c.startsWith('animate-'));
    if (!animClasses.length) return;
    animClasses.forEach(c => el.classList.remove(c));
    // Force reflow to reset animation timelines
    void el.offsetWidth;
    animClasses.forEach(c => el.classList.add(c));
  });
}

/**
 * Plays the page reveal overlay quickly, and applies a tiny body fade.
 */
function playPageReveal() {
  const overlay = document.getElementById('pageReveal');
  if (overlay) {
    overlay.classList.add('active');
    overlay.addEventListener('animationend', () => {
      overlay.classList.remove('active');
    }, { once: true });
  }
  document.body.classList.add('body-reveal');
  // Remove the body class after the quick fade, so future CSS isn’t affected
  setTimeout(() => document.body.classList.remove('body-reveal'), 300);
}

/**
 * Respect Reduced Motion: if the OS requests reduced motion, don’t force animations.
 * (Your CSS already disables the animate-* classes in that case. We mirror that here.)
 */
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Run on normal loads
window.addEventListener('DOMContentLoaded', () => {
  if (!prefersReducedMotion()) {
    playPageReveal();
    restartAnimations();
  }
});

// Run again when the page is restored from the back/forward cache (bfcache)
window.addEventListener('pageshow', (e) => {
  if (e.persisted && !prefersReducedMotion()) {
    playPageReveal();
    restartAnimations();
  }
});

function showSignUp() {
    alert('Sign up functionality would go here!');
}

// Show demo video modal
function showDemo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('demoVideo');
    
    // Show the video element
    video.style.display = 'block';
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Optional: Auto-play video when modal opens
    // video.play();
}

// Close modal function
function closeModal(event) {
    // Only close if clicking on the overlay or close button
    if (!event || event.target.id === 'videoModal' || event.target.classList.contains('close-button')) {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('demoVideo');
        
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
        
        // Pause video and hide it when closing
        video.pause();
        video.currentTime = 0; // Reset to beginning
        
        // Hide the video element after a short delay to allow animation to complete
        setTimeout(() => {
            if (!modal.classList.contains('show')) {
                video.style.display = 'none';
            }
        }, 300);
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Prevent video controls from closing modal
document.getElementById('demoVideo').addEventListener('click', function(event) {
    event.stopPropagation();
});


