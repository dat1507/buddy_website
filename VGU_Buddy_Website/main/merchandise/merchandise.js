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
    translations = getFallbackTranslations();
}

// EDIT: Add your translations here
function getFallbackTranslations() {
    if (currentLanguage === 'de') {
        return {
            "header": {
                "title": "VGU Buddy",
                "subtitle": "Soziales Zentrum"
            },
            "nav": {
                "home": "Startseite",
                "events": "Veranstaltungen",
                "community": "Gemeinschaft"
            },
            "welcome": {
                "title": "Bleiben Sie mit VGU verbunden",
                "description": "Erhalten Sie die neuesten Updates, Ankündigungen und Nachrichten aus der VGU Buddy Program Community."
            },
            "posts": {
                "author": "VGU Buddy Program Team",
                "post1": {
                    "caption": "🎉 Aufregende Neuigkeiten! Wir freuen uns, die Eröffnung von 5 brandneuen Lernräumen in unserer Hauptbibliothek bekannt zu geben. Diese modernen, gut ausgestatteten Räume sind darauf ausgelegt, Ihr Lernerlebnis mit Hochgeschwindigkeits-WLAN, bequemen Sitzgelegenheiten, Whiteboards und Präsentationsausrüstung zu verbessern. Jeder Raum bietet Platz für bis zu 8 Personen und verfügt über Klimaanlage und natürliches Licht für die perfekte Lernumgebung."
                },
                "post2": {
                    "caption": "🎊 Das Winter-Kulturfestival kommt! Begleiten Sie uns zum aufregendsten kulturellen Ereignis des Jahres mit traditionellen vietnamesischen und deutschen Aufführungen, authentischem Essen, interaktiven Workshops und Sprachaustauschaktivitäten. Dies ist eine perfekte Gelegenheit, die wunderschöne Mischung der Kulturen zu erleben, die VGU einzigartig macht. Das Festival läuft von 10 bis 18 Uhr mit verschiedenen Aktivitäten den ganzen Tag über, einschließlich Volkstanzaufführungen, kulturellen Präsentationen, internationaler Speisemesse und Gruppenaktivitäten."
                },
                "post3": {
                    "caption": "📱 VGU Buddy App 2.0 ist da! Wir freuen uns, die Veröffentlichung unseres großen Updates bekannt zu geben, das mit neuen Funktionen basierend auf Ihrem Feedback vollgepackt ist. Die neue Version umfasst Echtzeit-Chat für sofortige Nachrichten mit Freunden und Lerngruppen, verbesserte Veranstaltungsbuchung mit einfacherer Navigation, verbesserte Benutzerprofile, wo Sie mit Interessen und Fähigkeiten anpassen können, Dunkelmodus für komfortables nächtliches Lernen, Offline-Modus für den Zugriff auf Zeitpläne ohne Internet und Push-Benachrichtigungen, damit Sie nie wichtige Ankündigungen verpassen."
                },
                "post4": {
                    "caption": "🏆 Jährliches Sportturnier 2024! Machen Sie sich bereit für das größte Sportereignis des Jahres mit drei Tagen intensiven Wettbewerbs, Teamgeist und Spaßaktivitäten. Wir veranstalten Wettbewerbe in Basketball (5v5 Teams), Volleyball (6v6 Teams), Badminton (Einzel und Doppel), Tischtennis und Fußball (7v7 Teams). Erstaunliche Preise warten, einschließlich Trophäen, Medaillen und Geldpreise für Gewinnerteams. Die Anmeldung ist bis zum 20. Dezember über die VGU Buddy App geöffnet. Verpassen Sie nicht diese Gelegenheit, Ihre sportlichen Fähigkeiten zu zeigen und Ihre Fakultät zu vertreten!"
                }
            },
            "common": {
                "readMore": "Mehr lesen...",
                "readLess": "Weniger anzeigen",
                "loadMore": "Weitere Beiträge laden"
            },
            "footer": {
                "description": "Verbindung von Studenten an der Vietnamesisch-Deutschen Universität für eine außergewöhnliche Erfahrung.",
                "copyright": "© 2024 VGU Buddy Programm. Verfügbar auf Englisch & Deutsch."
            }
        };
    } else {
        return {
            "header": {
                "title": "VGU Buddy",
                "subtitle": "Social Hub"
            },
            "nav": {
                "home": "Home",
                "events": "Events",
                "community": "Community"
            },
            "welcome": {
                "title": "Stay Connected with VGU",
                "description": "Get the latest updates, announcements, and news from the VGU Buddy Program community."
            },
            "posts": {
                "author": "VGU Buddy Program Team",
                "post1": {
                    "caption": "🎉 Exciting news! We're thrilled to announce the opening of 5 brand new study rooms in our main library. These modern, well-equipped spaces are designed to enhance your learning experience with high-speed Wi-Fi, comfortable seating, whiteboards, and presentation equipment. Each room can accommodate up to 8 people and features air conditioning and natural lighting for the perfect study environment."
                },
                "post2": {
                    "caption": "🎊 Winter Cultural Festival is coming! Join us for the most exciting cultural event of the year featuring traditional Vietnamese and German performances, authentic food, interactive workshops, and language exchange activities. This is a perfect opportunity to experience the beautiful blend of cultures that makes VGU unique. The festival will run from 10 AM to 6 PM with various activities throughout the day including folk dance performances, cultural presentations, international food fair, and group activities."
                },
                "post3": {
                    "caption": "📱 VGU Buddy App 2.0 is here! We're excited to announce the release of our major update packed with new features based on your feedback. The new version includes real-time chat for instant messaging with friends and study groups, enhanced event booking with easier navigation, improved user profiles where you can customize with interests and skills, dark mode for comfortable late-night studying, offline mode for accessing schedules without internet, and push notifications so you never miss important announcements."
                },
                "post4": {
                    "caption": "🏆 Annual Sports Tournament 2024! Get ready for the biggest sporting event of the year with three days of intense competition, team spirit, and fun activities. We're hosting competitions in basketball (5v5 teams), volleyball (6v6 teams), badminton (singles and doubles), table tennis, and football (7v7 teams). Amazing prizes await including trophies, medals, and cash prizes for winning teams. Registration is open until December 20th through the VGU Buddy app. Don't miss this opportunity to showcase your athletic skills and represent your faculty!"
                }
            },
            "common": {
                "readMore": "Read More...",
                "readLess": "Show Less",
                "loadMore": "Load More Posts"
            },
            "footer": {
                "description": "Connecting students at Vietnamese-German University for an extraordinary experience.",
                "copyright": "© 2024 VGU Buddy Program. Available in English & German."
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


// ============================================
// READ MORE FUNCTIONALITY
// ============================================

function setupReadMoreFunctionality() {
    const postCaptions = document.querySelectorAll('.post-caption');
    
    postCaptions.forEach(caption => {
        const paragraph = caption.querySelector('p');
        const readMoreBtn = caption.querySelector('.read-more-btn');
        
        if (paragraph && readMoreBtn) {
            const fullText = paragraph.textContent;
            const words = fullText.split(' ');
            
            if (words.length > READ_MORE_CONFIG.wordLimit) {
                const truncatedText = words.slice(0, READ_MORE_CONFIG.wordLimit).join(' ') + '...';
                
                // Set initial state
                paragraph.textContent = truncatedText;
                caption.classList.add('collapsed');
                readMoreBtn.classList.remove('hidden');
                
                // Store full text for later use
                caption.setAttribute('data-full-text', fullText);
                caption.setAttribute('data-truncated-text', truncatedText);
            }
        }
    });
}

function toggleReadMore(button) {
    const caption = button.closest('.post-caption');
    const paragraph = caption.querySelector('p');
    const fullText = caption.getAttribute('data-full-text');
    const truncatedText = caption.getAttribute('data-truncated-text');
    
    const isCollapsed = caption.classList.contains('collapsed');
    
    // Add transition class
    paragraph.style.transition = `all ${READ_MORE_CONFIG.animationDuration}ms ease`;
    
    if (isCollapsed) {
        // Expand
        paragraph.textContent = fullText;
        caption.classList.remove('collapsed');
        caption.classList.add('expanded');
        button.textContent = getNestedTranslation(translations, 'common.readLess') || 'Show Less';
    } else {
        // Collapse
        paragraph.textContent = truncatedText;
        caption.classList.remove('expanded');
        caption.classList.add('collapsed');
        button.textContent = getNestedTranslation(translations, 'common.readMore') || 'Read More...';
    }
    
    console.log(`📖 Read more toggled for post`);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            }
        });
    }, observerOptions);
    
    // Observe all post cards
    document.querySelectorAll('.post-card').forEach(card => {
        observer.observe(card);
    });
    
    console.log('👁️ Scroll animations initialized');
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Handle escape key if needed
        }
        
        // Language toggle with keyboard shortcut (Ctrl/Cmd + L)
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            toggleLanguage();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Handle scroll events for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Handle scroll-based animations or effects here
        }, 100);
    });
    
    console.log('🎧 Event listeners initialized');
}

// ============================================
// LOAD MORE POSTS FUNCTIONALITY
// ============================================

function loadMorePosts() {
    if (isLoading) return;
    
    isLoading = true;
    const button = event.target;
    const originalText = button.textContent;
    
    // Add loading state
    button.textContent = 'Loading...';
    button.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        // EDIT: Replace this with actual API call to load more posts
        console.log('📡 Loading more posts...');
        
        // For demo purposes, show alert
        const message = currentLanguage === 'de' 
            ? 'Weitere Beiträge würden hier von Ihrer API geladen!'
            : 'More posts would be loaded here from your API!';
        
        alert(message);
        
        // Reset button state
        button.textContent = originalText;
        button.classList.remove('loading');
        isLoading = false;
        
        console.log('✅ Load more completed');
    }, 1500);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function handleResize() {
    const width = window.innerWidth;
    
    // Adjust layout based on screen size
    if (width < 768) {
        console.log('📱 Mobile view active');
        // Mobile-specific adjustments
    } else if (width < 1024) {
        console.log('📟 Tablet view active');
        // Tablet-specific adjustments
    } else {
        console.log('🖥️ Desktop view active');
        // Desktop-specific adjustments
    }
}

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Format date for posts (if needed)
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    return date.toLocaleDateString(currentLanguage === 'de' ? 'de-DE' : 'en-US', options);
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', function(e) {
    console.error('❌ JavaScript error occurred:', e.error);
    
    // You could send error reports to your analytics service here
    // Example: sendErrorReport(e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Unhandled promise rejection:', e.reason);
    
    // Handle promise rejections
    e.preventDefault();
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Focus management
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Announce content changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ============================================
// FUTURE ENHANCEMENTS PLACEHOLDER
// EDIT: Add your custom functionality here
// ============================================

// Function to add new posts dynamically
function addNewPost(postData) {
    // Implementation for adding new posts
    console.log('➕ Adding new post:', postData);
}

// Function to handle post interactions (likes, comments, shares)
function handlePostInteraction(postId, action) {
    // Implementation for post interactions
    console.log(`👆 Post ${postId} ${action} clicked`);
    
    // For demo purposes, show feedback
    const messages = {
        'en': {
            'like': 'Thanks for liking this post!',
            'comment': 'Comments feature coming soon!',
            'share': 'Share feature coming soon!'
        },
        'de': {
            'like': 'Danke fürs Liken dieses Beitrags!',
            'comment': 'Kommentar-Funktion kommt bald!',
            'share': 'Teilen-Funktion kommt bald!'
        }
    };
    
    const message = messages[currentLanguage][action] || 'Feature coming soon!';
    announceToScreenReader(message);
}

// Add click handlers to post action buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.post-card button').forEach(button => {
        const text = button.textContent.toLowerCase().trim();
        if (text.includes('like') || text.includes('comment') || text.includes('share')) {
            button.addEventListener('click', function() {
                const postCard = this.closest('.post-card');
                const postId = postCard.getAttribute('data-post-id');
                const action = text.includes('like') ? 'like' : 
                             text.includes('comment') ? 'comment' : 'share';
                
                handlePostInteraction(postId, action);
            });
        }
    });
});

console.log('🎉 Social Hub JavaScript loaded successfully!');