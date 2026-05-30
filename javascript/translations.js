let currentLanguage = "en";

function initPage() {
    loadLanguage(currentLanguage);
}

// Load JSON file
async function loadLanguage(lang) {
    const path = window.location.pathname.includes("/html/")
        ? `../locales/${lang}.json`
        : `locales/${lang}.json`;

    const res = await fetch(path);
    const data = await res.json();

    applyTranslations(data);
}

// Apply translations (supports nested keys)
function applyTranslations(data) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const keyPath = el.dataset.key.split(".");
        let value = data;

        for (const key of keyPath) {
            value = value?.[key];
        }

        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = value;
        } else {
            el.textContent = value;
        }
    });
}

// Language switch
function changeLanguage() {
    const lang = document.getElementById("language-chosen").value;
    currentLanguage = lang;
    loadLanguage(lang);
}