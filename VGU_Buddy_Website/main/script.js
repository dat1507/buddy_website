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
                "subtitle": "VGU Buddy ist nicht einfach nur ein Club – wir sind hier, um internationale Austauschstudierende zu unterstützen und ihnen zu helfen, sich während ihrer Zeit an der VGU wie zu Hause zu fühlen.",
                "social": {
                    "title": "Soziales Netzwerk",
                    "desc": "Vernetze dich mit Kommilitonen, teile Erfahrungen und baue dauerhafte Freundschaften auf."
                },
                "academic": {
                    "title": "Veranstaltungen & Aktivitäten",
                    "desc": "Greife auf Ressourcen zu, trete Lerngruppen bei und glänze in deinem Studium."
                },
                "campus": {
                    "title": "Campus-Unterstützung",
                    "desc": "Buche Einrichtungen, nutze Bibliotheksdienste und verwalte deinen Zeitplan."
                },
                "visual": {
                    "title": "Starte deine Reise",
                    "subtitle": "Alles, was du brauchst, an einem Ort"
                }
            },
            "features": {
                "title": "Hervorragende Vorteile",
                "subtitle": "Alles, was du für ein großartiges Universitätsleben brauchst – alles auf einer Plattform.",
                "social": {
                    "title": "Merchandise",
                    "desc": "Zeige deinen Spirit mit unserem coolen und praktischen Merch.",
                    "item1": "Zeig es",
                    "item2": "Trag es",
                    "item3": "Liebe es"
                },
                "events": {
                    "title": "Eventkalender",
                    "desc": "Verpasse keine wichtigen Veranstaltungen, Workshops oder kulturellen Aktivitäten.",
                    "item1": "Bleib informiert",
                    "item2": "Nichts verpassen",
                    "item3": "Einfache Erinnerungen"
                },
                "academic": {
                    "title": "Bibliotheksregeln",
                    "desc": "Greife auf alle akademischen Ressourcen zu und organisiere dein Studium.",
                    "item1": "Stundenpläne",
                    "item2": "Bibliothekszugang",
                    "item3": "Lernräume"
                },
                "sports": {
                    "title": "Sporthalle",
                    "desc": "Buche Einrichtungen und bleib aktiv mit deinen Freunden.",
                    "item1": "Spiel mit Power",
                    "item2": "Bleib fit",
                    "item3": "Teamwork"
                },
                "support": {
                    "title": "International Office",
                    "desc": "Mach deinen Aufenthalt so angenehm wie möglich.",
                    "item1": "Auslandsstudium",
                    "item2": "Globale Unterstützung",
                    "item3": "Verbunden bleiben"
                },
                "global": {
                    "title": "Wohnheimservice",
                    "desc": "Komfortables Wohnen, nur wenige Schritte vom Campus entfernt.",
                    "item1": "Gemütliches Wohnen",
                    "item2": "Studentengemeinschaft",
                    "item3": "Campusnah"
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
                "subtitle": "VGU Buddy isn’t just any club, we are here to support international transfer students and help them feel at home during their time at VGU.",
                "social": {
                    "title": "Social Networking",
                    "desc": "Connect with peers, share experiences, and build lasting friendships."
                },
                "academic": {
                    "title": "Events & Activites",
                    "desc": "Access resources, join study groups, and excel in your studies."
                },
                "campus": {
                    "title": "Campus Support",
                    "desc": "Book facilities, access library services, and manage your schedule."
                },
                "visual": {
                    "title": "Launch Your Journey",
                    "subtitle": "Everything you need in one place"
                }
            },
            "features": {
                "title": "Outstanding Benefits",
                "subtitle": "Everything you need for an amazing university experience, all in one platform.",
                "social": {
                    "title": "Merchandise",
                    "desc": "Show your spirit with our fun and practical merch.",
                    "item1": "Show it",
                    "item2": "Wear it",
                    "item3": "Love it"
                },
                "events": {
                    "title": "Events Calendar",
                    "desc": "Never miss important events, workshops, or cultural activities.",
                    "item1": "Stay updated",
                    "item2": "Never miss out",
                    "item3": "Easy reminders"
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
                    "item1": "Play hard",
                    "item2": "Stay fit",
                    "item3": "Team up"
                },
                "support": {
                    "title": "International Office",
                    "desc": "Make your stay as comfortable as possible.",
                    "item1": "Study abroad",
                    "item2": "Global support",
                    "item3": "Stay connected"
                },
                "global": {
                    "title": "Dormitory Service",
                    "desc": "Comfortable living, just steps from campus life.",
                    "item1": "Cozy living",
                    "item2": "Student community",
                    "item3": "Campus close"
                }
            },
            "community": {
                "title": "What Students Say",
                "subtitle": "Hear from real VGU students about their experiences with the Buddy Program.",
                "testimonial1": "VGU Buddy transformed my university experience. I found my study group, made lifelong friends, and never missed an important event. It's like having a personal assistant for student life!",
                "testimonial2": "I first heard about the Buddy Program through the VGU Tour. After following Buddy on Facebook, I found their video interesting and quirky. I hope I’ll have the chance to become a Buddy member in the future.",
                "testimonial3": "I work in the marketing department at Buddy, and it has given me many valuable experiences. I get to work and communicate with great teammates and international students, which helps me improve my skills and create wonderful memories.",
                "testimonial4": "My first impression of Buddy was “international.” Every member can communicate fluently with international students, and they organize many cultural events like Easter and Currywurst Day. I hope to join next semester. #BuddyProgramPlsCollab.",
                "testimonial5": "From my perspective, the Buddy Program has amazing merchandise—especially their newest T-shirt. Can I have one, pls?",
                "testimonial6": "Well, as someone with experience in web programming and UI/UX design, I think this new Buddy website is really helpful. It makes it much easier to access basic services like booking the sports hall, using the library, and catching up on event information.",
                "testimonial7": "OMG, I just wanna join the Buddy marketing team right away. Their recent posters are straight fireee—no cap. Plus, I’d love to learn how to design posters like that!",
                "testimonial8": "I left the Buddy Program due to my personal workload, but it’s a great place to gain soft skills and professional experience if you have the time.",
                "testimonial9": "From my perspective, the Buddy Program sometimes runs into delays—I’m not sure why. It’s just an area where I think they could improve a little. Apart from that, everything else is great. Overall, I’d give it a solid 4/5.",
                "testimonial10": "The Buddy Program is great, but communication can be a bit scattered. If that improves, it’ll be close to perfect.",
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
                "helpCenter": "International Office",
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

// Auto-play (every 3 seconds)
let autoPlay = setInterval(() => {
  nextSlide();
}, 3000);

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


// Prevent video controls from closing modal
document.getElementById('demoVideo').addEventListener('click', function(event) {
    event.stopPropagation();
});


// ==============================================
// Community Testimonials Marquee (Seamless, rAF)
// ==============================================
(function () {
  const wrapper = document.querySelector(".testimonial-wrapper");
  const track = document.querySelector(".testimonial-track");
  if (!wrapper || !track) return;

  // Speed Modify
  const MARQUEE_SPEED = 100; // ( pixel /second )

  let isPaused = false;
  let pos = 0;                 // vị trí translateX hiện tại (px)
  let groupWidth = 0;          // tổng độ rộng của NHÓM GỐC (1 lần)
  let clonesMade = false;      // chỉ clone 1 lần
  let lastTs = 0;              // timestamp frame trước
  let resizeTimer = null;

  // Chờ ảnh trong track load xong (để đo kích thước chính xác)
  function imagesReady() {
    const imgs = track.querySelectorAll("img");
    if (!imgs.length) return Promise.resolve();
    return Promise.all(Array.from(imgs).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(res => img.addEventListener("load", res, { once: true }));
    }));
  }

  function getGap() {
    const st = getComputedStyle(track);
    // với flex row, khoảng cách ngang là column-gap trong spec mới
    const gapStr = st.columnGap || st.gap || "0";
    const n = parseFloat(gapStr);
    return Number.isNaN(n) ? 0 : n;
  }

  function measureGroupWidth(nodes) {
    const gap = getGap();
    let total = 0;
    nodes.forEach((el, idx) => {
      total += el.getBoundingClientRect().width;
      if (idx > 0) total += gap;
    });
    return total;
  }

  function removeOldClones() {
    track.querySelectorAll("[data-clone='1']").forEach(n => n.remove());
  }

  function cloneUntilEnough() {
    // Clone cả nhóm gốc cho đến khi tổng chiều rộng >= 2 * groupWidth
    // để có “dải nối” xếp sau nhóm gốc → chạy qua seam vẫn mượt.
    if (clonesMade) return;
    const originals = Array.from(track.children);
    const fragment = document.createDocumentFragment();

    // Tối thiểu cần >= groupWidth * 2
    let currentWidth = measureGroupWidth(Array.from(track.children));

    // Đảm bảo dải nội dung dài hơn ít nhất 2 lần nhóm gốc
    while (currentWidth < groupWidth * 2) {
      originals.forEach(node => {
        const clone = node.cloneNode(true);
        clone.dataset.clone = "1";
        fragment.appendChild(clone);
      });
      // tạm tính gần đúng, lát nữa đo lại chính xác sau khi append
      currentWidth += groupWidth;
    }

    track.appendChild(fragment);
    clonesMade = true;
  }

  function recalc() {
    // Reset transform để đo không bị sai
    track.style.transform = "translate3d(0,0,0)";
    pos = 0;

    // Xoá clones cũ rồi đo lại từ nhóm gốc
    removeOldClones();
    const originals = Array.from(track.children);

    groupWidth = measureGroupWidth(originals);
    cloneUntilEnough();
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Recalculate sau khi layout ổn định
      recalc();
    }, 150);
  }

  // Điều khiển tạm dừng khi hover
  wrapper.addEventListener("mouseenter", () => { isPaused = true; });
  wrapper.addEventListener("mouseleave", () => { isPaused = false; });

  function animate(ts) {
    if (!lastTs) lastTs = ts;
    const dt = (ts - lastTs) / 1000; // giây
    lastTs = ts;

    if (!isPaused) {
      pos -= MARQUEE_SPEED * dt;

      // Khi đã đi hết 1 nhóm gốc, nhảy tiến thêm groupWidth (không reset)
      // để tiếp tục mạch dải sau → liền mạch, không giật.
      if (pos <= -groupWidth) {
        pos += groupWidth;
      }

      track.style.transform = `translate3d(${pos}px, 0, 0)`;
    }

    requestAnimationFrame(animate);
  }

  // Khởi động
  (async function init() {
    await imagesReady(); // chờ ảnh load để đo chính xác
    recalc();
    requestAnimationFrame(animate);
    window.addEventListener("resize", onResize);
  })();
})();



