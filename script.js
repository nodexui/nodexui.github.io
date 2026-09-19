// Hide Loader on Page Load
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 400);
        }, 1);
    }
});

// Mobile Navbar Menu Toggle
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-links a");

function openMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add("active");
    }
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove("active");
    }
}

if (mobileMenu) {
    mobileMenu.addEventListener("click", function (event) {
        if (event.target === mobileMenu) {
            closeMobileMenu();
        }
    });
}

mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
});

// Sticky Navbar & Active Section Link Highlighter (ScrollSpy)
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".desktop-links a:not(.nav-btn)");
const mobileNavLinks = document.querySelectorAll(".mobile-links a");
const sections = document.querySelectorAll("section, #home");

window.addEventListener("scroll", function () {
    // 1. Add background shadow and resize when scrolled
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // 2. Highlight Nav Link on Scroll
    let currentSectionId = "home";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 120) {
            currentSectionId = section.getAttribute("id");
        }
    });

    // Update Desktop links
    navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active-link");
        }
    });

    // Update Mobile links
    mobileNavLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active-link");
        }
    });
});

const quickMenuButton = document.querySelector(".quick-menu-btn");
const quickMenuModal = document.getElementById("quickMenuModal");
const quickMenuCloseButton = document.querySelector(".quick-close-btn");
const quickMenuLinks = document.querySelectorAll(".quick-menu-item");

function openQuickMenu() {
    quickMenuModal.classList.add("active");
    quickMenuModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    quickMenuCloseButton.focus();
}

function closeQuickMenu() {
    quickMenuModal.classList.remove("active");
    quickMenuModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    quickMenuButton.focus();
}

quickMenuButton.addEventListener("click", openQuickMenu);

quickMenuCloseButton.addEventListener("click", closeQuickMenu);

quickMenuModal.addEventListener("click", function (event) {
    if (event.target === quickMenuModal) {
        closeQuickMenu();
    }
});

quickMenuLinks.forEach(function (link) {
    link.addEventListener("click", closeQuickMenu);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && quickMenuModal.classList.contains("active")) {
        closeQuickMenu();
    }
});
