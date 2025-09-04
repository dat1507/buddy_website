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
                "community": "Community",
                "contact": "Kontakt"
            },
            "hero": {
                "title1": "Verbinde dich mit",
                "title2": "VGU Buddy",
                "subtitle": "Werde Teil der ultimativen Vietnamesisch-Deutschen Universitäts-Community. Knüpfe Kontakte, teile Erfahrungen und wachse gemeinsam.",
                "joinNow": "Jetzt beitreten",
                "learnMore": "Mehr erfahren",
                "cardTitle": "Willkommen bei VGU Buddy",
                "cardSubtitle": "Dein Tor zu einem großartigen Universitätsleben mit Freunden, die sich kümmern."
            },
            "stats": {
                "title": "Bevorstehende Veranstaltungen",
                "subtitle": "Mach mit bei spannenden Events, die das Unileben für alle verbessern."
            },
            "about": {
                "title": "Warum VGU Buddy wählen?",
                "subtitle": "VGU Buddy ist nicht nur eine weitere Plattform – es ist dein kompletter Universitätsbegleiter. Wir haben alles entwickelt, was du für akademischen und sozialen Erfolg brauchst.",
                "social": {
                    "title": "Soziales Netzwerk",
                    "desc": "Vernetze dich mit Kommilitonen, teile Erfahrungen und baue dauerhafte Freundschaften auf."
                },
                "academic": {
                    "title": "Akademische Unterstützung",
                    "desc": "Greife auf Ressourcen zu, trete Lerngruppen bei und glänze in deinem Studium."
                },
                "campus": {
                    "title": "Campus-Dienste",
                    "desc": "Buche Einrichtungen, nutze Bibliotheksdienste und verwalte deinen Zeitplan."
                },
                "visual": {
                    "title": "Starte deine Reise",
                    "subtitle": "Alles, was du brauchst, an einem Ort"
                }
            },
            "features": {
                "title": "Leistungsstarke Funktionen",
                "subtitle": "Alles, was du für ein großartiges Unileben brauchst – auf einer Plattform.",
                "social": {
                    "title": "Soziales Zentrum",
                    "desc": "Verbinde dich in Echtzeit mit deiner VGU-Community, chatte und teile Inhalte.",
                    "item1": "Freundschaftsverbindungen",
                    "item2": "Gruppenchats",
                    "item3": "Merchandise"
                },
                "events": {
                    "title": "Event-Kalender",
                    "desc": "Verpasse nie wichtige Events, Workshops oder kulturelle Aktivitäten.",
                    "item1": "Event-Anmeldung",
                    "item2": "Kalendersynchronisation",
                    "item3": "Erinnerungen"
                },
                "academic": {
                    "title": "Bibliotheksrichtlinien",
                    "desc": "Greife auf alle akademischen Ressourcen zu und organisiere dein Studium.",
                    "item1": "Stundenpläne",
                    "item2": "Bibliothekszugang",
                    "item3": "Lernräume"
                },
                "sports": {
                    "title": "Sporthalle",
                    "desc": "Buche Einrichtungen und bleibe aktiv mit deinen Freunden.",
                    "item1": "Platzbuchung",
                    "item2": "Zugang zum Fitnessstudio",
                    "item3": "Sportgruppen"
                },
                "support": {
                    "title": "International Office",
                    "desc": "Erhalte umfassende Unterstützung, wann immer du sie brauchst.",
                    "item1": "Mentale Gesundheit",
                    "item2": "Notfallkontakte",
                    "item3": "Universitätshotline"
                },
                "global": {
                    "title": "Wohnheim-Service",
                    "desc": "Vernetze dich über Kulturen hinweg mit mehrsprachiger Unterstützung.",
                    "item1": "Englische Oberfläche",
                    "item2": "Deutscher Support",
                    "item3": "Sprachaustausch"
                }
            },
            "community": {
                "title": "Was Studierende sagen",
                "subtitle": "Erfahre von echten VGU-Studierenden, wie sie das Buddy-Programm erlebt haben.",
                "testimonial1": "VGU Buddy hat mein Unileben verändert. Ich habe meine Lerngruppe gefunden, lebenslange Freunde gewonnen und kein wichtiges Event verpasst. Es ist wie ein persönlicher Assistent fürs Studentenleben!",
                "testimonial2": "Als Austauschstudent hat mir VGU Buddy geholfen, mich nahtlos zu integrieren. Die mehrsprachige Unterstützung und kulturellen Events haben mich sofort wie zu Hause fühlen lassen. Sehr empfehlenswert!",
                "testimonial3": "Die Sportbuchungsfunktion ist großartig! Ich kann ganz einfach Plätze für Badminton mit Freunden reservieren. VGU Buddy macht das Campusleben viel organisierter und spaßiger."
            },
            "cta": {
                "title": "Bereit, dein Unileben zu transformieren?",
                "subtitle": "Schließe dich tausenden VGU-Studierenden an, die bereits das Beste aus ihrem Studium machen.",
                "join": "Community beitreten",
                "demo": "Demo ansehen"
            },
            "footer": {
                "description": "Wir verbinden Studierende an der Vietnamesisch-Deutschen Universität für ein außergewöhnliches akademisches und soziales Erlebnis.",
                "quickLinks": "Schnellzugriff",
                "support": "Unterstützung",
                "helpCenter": "Hilfe-Center",
                "emergency": "Notfallkontakte",
                "mentalHealth": "Mentale Gesundheit",
                "technical": "Technischer Support",
                "copyright": "© 2025 VGU Buddy Program. Alle Rechte vorbehalten. | Verfügbar auf Englisch & Deutsch"
            },
        }
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
                "title": "Upcoming Events",
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
                    "title": "Library Regulations",
                    "desc": "Access all your academic resources and manage your studies.",
                    "item1": "Class schedules",
                    "item2": "Library access",
                    "item3": "Study rooms"
                },
                "sports": {
                    "title": "Sports Hall",
                    "desc": "Book facilities and stay active with your buddies.",
                    "item1": "Court booking",
                    "item2": "Gym access",
                    "item3": "Sports groups"
                },
                "support": {
                    "title": "International Office",
                    "desc": "Get help when you need it with comprehensive support.",
                    "item1": "Mental health",
                    "item2": "Emergency contacts",
                    "item3": "University hotline"
                },
                "global": {
                    "title": "Dormitory Service",
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

// ================================
// Slider Function
// ================================
const slider = document.getElementById("slider");
let slides = document.querySelectorAll("#slider a");
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
slides = document.querySelectorAll("#slider a");

// Set slide width (100% each)
const slideWidth = 100;

// Initial position
slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;

function updateSlider() {
  slider.style.transition = "transform 0.7s ease";
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
slider.addEventListener("transitionend", () => {
  if (slides[currentIndex].id === "first-clone") {
    slider.style.transition = "none";
    currentIndex = 1; // jump to real first slide
    slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
  }
  if (slides[currentIndex].id === "last-clone") {
    slider.style.transition = "none";
    currentIndex = slides.length - 2; // jump to real last slide
    slider.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
  }
});

// Auto-play (every 6 seconds)
let autoPlay = setInterval(() => {
  nextSlide();
}, 6000);

// Pause auto-play on hover
slider.addEventListener("mouseenter", () => clearInterval(autoPlay));
slider.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => {
    nextSlide();
  }, 6000);
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


