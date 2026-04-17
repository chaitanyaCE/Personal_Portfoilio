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
