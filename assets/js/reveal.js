// assets/js/reveal.js
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
});