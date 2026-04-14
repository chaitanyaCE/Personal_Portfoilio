# Chaitanya Patel — Personal Portfolio

A clean, responsive personal portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just well-structured front-end code.

🔗 **Live Site:** [chaitanyace.github.io/portfolio](https://chaitanyace.github.io/portfolio) *(update with your actual URL)*

---

## Overview

This portfolio showcases my projects, experience, and skills as a first-year Computer Engineering student at the University of Waterloo. It was designed with a clean editorial aesthetic, dark/light mode support, and a focus on smooth UX.

---

## Features

- **Responsive Design** — mobile-first layout with a hamburger nav for small screens
- **Dark / Light Mode** — toggle persists via `localStorage`
- **Typed Hero Animation** — cycling phrases built without any library
- **Scroll Fade-In** — sections animate in using `IntersectionObserver`
- **Active Nav Highlight** — nav links highlight based on current scroll position
- **Zero Dependencies** — no npm, no bundler, no framework

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Icons | Font Awesome 6 |
| Hosting | GitHub Pages |

---

## Project Structure

```
portfolio/
├── index.html          # Main HTML — all sections live here
├── style.css           # All styles, CSS variables, dark mode, responsive
├── script.js           # Theme toggle, typed text, scroll animations, nav
└── Resume_Chaitanya_Patel.pdf
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | About | Bio, stats (graduation, projects, volunteering), social links |
| 02 | Skills | Skill chips: JS, HTML, CSS, React, Python, C++, Git, SQL, SEO, AI |
| 03 | Projects | Cards for TaskFlow SPA, Expense Tracker, JS Quiz Engine |
| 04 | Experience | Timeline: co-op, UWaterloo, YDS Canada |
| 05 | Contact | CTA box with email link and social icons |

---

## Running Locally

No build step needed.

```bash
git clone https://github.com/chaitanyaCE/portfolio.git
cd portfolio
# Open index.html in your browser, or use a local server:
npx serve .
```

---

## Projects Featured

### TaskFlow SPA
Single-page task manager with drag-and-drop, `localStorage` persistence, and filter views (All / Active / Completed).
→ [Repo](https://github.com/chaitanyaCE/TaskFlow-SPA) · [Live](https://chaitanyace.github.io/TaskFlow-SPA/)

### Expense Tracker
Personal finance tracker with real-time balance updates, colour-coded profit/loss indicator, and persistent sessions via `localStorage`.
→ [Repo](https://github.com/chaitanyaCE/Expense-Tracker) · [Live](https://chaitanyace.github.io/Expense-Tracker/)

### JS Quiz Engine
Timed quiz app with randomized questions, score tracking, and a results summary screen.
→ [Repo](https://github.com/chaitanyaCE/JS-Quiz-Engine) · [Live](https://chaitanyace.github.io/JS-Quiz-Engine/)

---

## Contact

- 📧 c5patel@uwaterloo.ca
- 💼 [LinkedIn](https://www.linkedin.com/in/chaitanya-patel-uwaterloo/)
- 🐙 [GitHub](https://github.com/chaitanyaCE)

---

*Built from scratch — no templates, no page builders.*
