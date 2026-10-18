
/* ==========================================
   1. AOS SCROLL ANIMATIONS
========================================== */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 650,
        once: true,
        offset: 80
    });
}


/* ==========================================
   2. REFRESH ANIMATIONS AFTER PAGE LOAD
========================================== */

window.addEventListener("load", () => {
    if (typeof AOS !== "undefined") {
        AOS.refresh();
    }
});


/* ==========================================
   3. TYPED.JS - PROFESSIONAL JOB TITLES
========================================== */

if (typeof Typed !== "undefined" && document.querySelector("#typing")) {
    const typed = new Typed("#typing", {
        strings: [
            "Python Backend Developer",
            "FastAPI Developer",
            "REST API Developer"
        ],

        typeSpeed: 55,
        backSpeed: 35,
        backDelay: 2200,
        startDelay: 300,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: "|"
    });
}


/* ==========================================
   4. DARK MODE TOGGLE
========================================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");

        themeToggle.textContent = isDark ? "☀️" : "🌙";

        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );

    });
}
