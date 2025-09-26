/* script.js - Clean + UX improvements */
/* Content unchanged, adds: smooth scroll, reveal-on-scroll, lazy loading */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
        targetEl.setAttribute("tabindex", "-1");
        targetEl.focus({ preventScroll: true });
        setTimeout(() => targetEl.removeAttribute("tabindex"), 1000);
      }
    });
  });

  // Lazy-load images that don't have loading attribute
  document.querySelectorAll("img:not([loading])").forEach(img => {
    img.setAttribute("loading", "lazy");
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    reveals.forEach(el => observer.observe(el));
  }
});
