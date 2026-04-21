// THEME TOGGLE
const themeToggle = document.getElementById("toggle-button");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// TYPED TEXT
const phrases = [
  "for the web.",
  "for communities.",
  "with purpose.",
  "that matter.",
];
let phraseIndex = 0,
  charIndex = 0,
  isDeleting = false;
const typedEl = document.getElementById("typed-text");

function type() {
  const current = phrases[phraseIndex];
  typedEl.textContent = isDeleting
    ? current.slice(0, charIndex - 1)
    : current.slice(0, charIndex + 1);
  isDeleting ? charIndex-- : charIndex++;
  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}
type();

// SCROLL FADE-IN
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

fadeEls.forEach((el) => observer.observe(el));

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("header-links");

hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => navLinks.classList.remove("open")),
  );

// YEAR + ACTIVE NAV HIGHLIGHT
document.getElementById("year").textContent = new Date().getFullYear();
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".header-links a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute("id");
  });
  navAnchors.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === `#${current}` ? "var(--green)" : "";
  });
});
