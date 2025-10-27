// =======================
// Global Variables
// =======================
let currentLanguage = "en";
let translations = {};

// =======================
// Supported Languages
// =======================
const SUPPORTED_LANGUAGES = {
  en: {
    name: "English",
    code: "EN",
    flagClass: "fi fi-gb",
    flagStyle: "font-size: 16px;",
  },
  de: {
    name: "Deutsch",
    code: "DE",
    flagClass: "fi fi-de",
    flagStyle: "font-size: 16px;",
  },
};

// =======================
// Initialize Language System
// =======================
async function initializeLanguage() {
  currentLanguage = localStorage.getItem("vgu-language") || "en";
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
      throw new Error("Translation file not found");
    }
  } catch (error) {
    console.warn("Failed to load translations, using fallback:", error);
    translations = getFallbackTranslations();
  }
}

// =======================
// Fallback Translations
// =======================
function getFallbackTranslations() {
  if (currentLanguage === "de") {
    return {
      nav: {
        home: "Startseite",
        about: "Über uns",
        features: "Funktionen",
        community: "Gemeinschaft",
        contact: "Kontakt",
        surbook: "Überlebensbuch",
      },
      article: {
        title: "Halloween",
        date: "30. Oktober 2025",
        caption: "Carnevil der Kuriositäten",
        summary: "👻 𝐇𝐀𝐋𝐋𝐎𝐖𝐄𝐄𝐍 𝐒𝐓𝐄𝐇𝐓 𝐕𝐎𝐑 𝐃𝐄𝐑 𝐓Ü𝐑",
        paragraph1:
          "Macht euch bereit für die Zusammenarbeit des Jahrhunderts — das <strong>VGU Buddy Program</strong>, das <strong>VGU PR & Event Team - Presto</strong> und der <strong>Castlevania - VGU Board Games Club</strong> schließen sich zusammen, um euch die gruseligste Nacht des Jahres zu bringen!",
        paragraph2:
          "Markiert euch den 30. Oktober im Kalender und bereitet euch auf Gänsehaut, Spannung und unvergesslichen Spaß vor.\n🎪 𝐕𝐄𝐑𝐀𝐍𝐒𝐓𝐀𝐋𝐓𝐔𝐍𝐆𝐒𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐄𝐍\n📅 Zeit: 19:00 Uhr, 30. Oktober 2025\n📍 Ort: Sporthalle, Vietnamesisch-Deutsche Universität, Binh Duong",
        paragraph3:
          "📌 𝐅ü𝐫 𝐚𝐥𝐥𝐞 𝐅𝐫𝐚𝐠𝐞𝐧 𝐰𝐞𝐧𝐝𝐞𝐭 𝐞𝐮𝐜𝐡 𝐛𝐢𝐭𝐭𝐞 𝐚𝐧:\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: VGU Buddy Program\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: VGU Buddy Program\n𝐄-𝐌𝐚𝐢𝐥: vgubuddy@vgu.edu.vn",
        show_more: "Mehr anzeigen",
        show_less: "Weniger anzeigen",
      },
      footer: {
        description:
          "Verbindung von Studierenden an der Vietnamesisch-Deutschen Universität für eine außergewöhnliche akademische und soziale Erfahrung.",
        quickLinks: "Schnelle Links",
        support: "Unterstützung",
        helpCenter: "Hilfezentrum",
        emergency: "Notfallkontakte",
        mentalHealth: "Mentale Gesundheit",
        technical: "Technischer Support",
        copyright:
          "© 2025 VGU Buddy Programm. Alle Rechte vorbehalten. | Verfügbar auf Englisch & Deutsch",
      },
    };
  } else {
    return {
      nav: {
        home: "Home",
        about: "About",
        features: "Features",
        community: "Community",
        contact: "Contact",
        surbook: "Survival Book",
      },
      article: {
        title: "Halloween",
        date: "October 30th, 2025",
        caption: "Carnevil of oddities",
        summary: "👻 𝐇𝐀𝐋𝐋𝐎𝐖𝐄𝐄𝐍 𝐈𝐒 𝐂𝐎𝐌𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐖𝐀𝐘",
        paragraph1:
          "Get ready for the collab of the century — <strong>VGU Buddy Program</strong>, <strong>VGU PR & Event Team - Presto</strong>, <strong>Castlevania - VGU Board Games Club</strong> joining forces to bring you the spookiest night of the year!",
        paragraph2:
          "Mark your calendar for October 30 and prepare for chills, thrills, and unforgettable fun.\n🎪 EVENT INFORMATION\n📅 Time: 7:00 PM, October 30, 2025\n📍 Venue: Sport Hall, Vietnamese-German University, Binh Duong",
        paragraph3:
          "📌 𝐅𝐨𝐫 𝐚𝐧𝐲 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 𝐫𝐞𝐥𝐚𝐭𝐞𝐝, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬 𝐯𝐢𝐚:\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: VGU Buddy Program\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: VGU Buddy Program\n𝐄𝐦𝐚𝐢𝐥: vgubuddy@vgu.edu.vn",
        show_more: "Show More",
        show_less: "Show Less",
      },
      footer: {
        description:
          "Connecting students at Vietnamese-German University for an extraordinary academic and social experience.",
        quickLinks: "Quick Links",
        support: "Support",
        helpCenter: "Help Center",
        emergency: "Emergency Contacts",
        mentalHealth: "Mental Health",
        technical: "Technical Support",
        copyright:
          "© 2025 VGU Buddy Program. All rights reserved. | Available in English & German",
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
  const flagElement = document.getElementById("languageFlag");
  const codeElement = document.getElementById("languageCode");
  if (flagElement && codeElement) {
    flagElement.className = langData.flagClass;
    flagElement.style.cssText = langData.flagStyle;
    codeElement.textContent = langData.code;
  }

  // Mobile toggle
  const mobileFlagElement = document.getElementById("mobileLanguageFlag");
  const mobileCodeElement = document.getElementById("mobileLanguageCode");
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
  const elements = document.querySelectorAll("[data-i18n], [data-i18n-html]");

  elements.forEach((element) => {
    const key =
      element.getAttribute("data-i18n") ||
      element.getAttribute("data-i18n-html");
    const translation = getNestedTranslation(translations, key);

    if (translation) {
      if (element.hasAttribute("data-i18n-html")) {
        // Allow HTML, also convert \n → <br>
        element.innerHTML = translation.replace(/\n/g, "<br>");
      } else {
        // Safe plain text
        element.textContent = translation;
      }
    }
  });
}

// =======================
// Get Nested Translation by Key
// =======================
function getNestedTranslation(obj, key) {
  return key.split(".").reduce((o, k) => o && o[k], obj);
}

// =======================
// Toggle Language
// =======================
async function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  localStorage.setItem("vgu-language", currentLanguage);
  await loadTranslations(); // load lại bản dịch mới
  updateLanguageToggle();
  translatePage();
  console.log("Language switched to:", currentLanguage);
}

// =======================
// Mobile Menu Toggle
// =======================
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}

// =======================
// Initialize on Page Load
// =======================
document.addEventListener("DOMContentLoaded", initializeLanguage);

// Main section related JavaScript functions
(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    animationDuration: 300,
  };

  let isExpanded = false;

  // DOM Elements
  const elements = {
    readMoreBtn: document.getElementById("read-more-btn"),
    expandableContent: document.getElementById("expandable-content"),
    translatableElements: document.querySelectorAll("[data-i18n]"),
  };

  // Read More Functionality
  function toggleReadMore() {
    if (!elements.readMoreBtn || !elements.expandableContent) return;

    isExpanded = !isExpanded;

    // Update content visibility
    elements.expandableContent.classList.toggle("expanded", isExpanded);

    // Update ARIA attributes
    elements.readMoreBtn.setAttribute("aria-expanded", isExpanded.toString());
    elements.expandableContent.setAttribute(
      "aria-expanded",
      isExpanded.toString()
    );

    // Update button text
    updateReadMoreButton();

    // Smooth scroll to content if expanding
    if (isExpanded) {
      setTimeout(() => {
        elements.expandableContent.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, CONFIG.animationDuration);
    }

    console.log(`📖 Article ${isExpanded ? "expanded" : "collapsed"}`);
  }

  function updateReadMoreButton() {
    if (!elements.readMoreBtn) return;

    const key = isExpanded ? "article.show_less" : "article.show_more";
    const text = getNestedValue(translations[currentLanguage], key);

    if (text) {
      elements.readMoreBtn.textContent = text;
    }
  }

  // Thumbnail Gallery
  function initializeThumbnails() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const heroImage = document.querySelector(".hero-image");

    if (!thumbnails.length || !heroImage) return;

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        // Update active state
        thumbnails.forEach((t) => t.classList.remove("active"));
        thumbnail.classList.add("active");

        // Visual effect for demo
        heroImage.style.transform = "scale(0.98)";
        setTimeout(() => {
          heroImage.style.transform = "scale(1)";
        }, 150);

        console.log(`🖼️ Thumbnail ${index + 1} selected`);
      });
    });
  }

  // Language Support
  function updateContent() {
    elements.translatableElements.forEach((element) => {
      const key = element.dataset.i18n;
      const translation = getNestedValue(translations[currentLanguage], key);

      if (translation) {
        if (element.hasAttribute("data-i18n-html")) {
          element.innerHTML = translation.replace(/\n/g, "<br>");
        } else {
          element.textContent = translation;
        }
      }
    });

    updateReadMoreButton();
  }

  function getNestedValue(obj, path) {
    return path
      .split(".")
      .reduce((current, key) => current && current[key], obj);
  }

  // Event Listeners
  function setupEventListeners() {
    // Read more toggle
    if (elements.readMoreBtn) {
      elements.readMoreBtn.addEventListener("click", toggleReadMore);
    }
  }

  // Initialize
  function init() {
    setupEventListeners();
    initializeThumbnails();
    updateContent();

    // Set initial ARIA attributes
    if (elements.readMoreBtn && elements.expandableContent) {
      elements.readMoreBtn.setAttribute("aria-expanded", "false");
      elements.expandableContent.setAttribute("aria-expanded", "false");
    }

    console.log("✅ Main section initialized");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  const heroImage = document.getElementById("hero-image");
  const heroCaption = document.getElementById("image-caption");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Lấy đường dẫn ảnh và caption từ data attribute
      const newSrc = thumbnail.getAttribute("data-src");
      const newCaption = thumbnail.getAttribute("data-caption");

      // Thay đổi ảnh chính và caption
      heroImage.src = newSrc;
      heroCaption.textContent = newCaption;

      // Cập nhật trạng thái active cho thumbnail
      thumbnails.forEach((btn) => btn.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });
})();
