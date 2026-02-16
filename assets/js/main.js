(() => {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Theme toggle (data-theme + localStorage)
  const KEY = "theme";
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  const preferred = () => {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const saved = localStorage.getItem(KEY);
  root.setAttribute("data-theme", saved || preferred());

  if (btn) {
    btn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(KEY, next);
    });
  }

  // Cursor glow (only when mouse moves)
  const setGlow = (e) => {
    const mx = (e.clientX / window.innerWidth) * 100;
    const my = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty("--mx", `${mx}%`);
    root.style.setProperty("--my", `${my}%`);
  };
  window.addEventListener("mousemove", setGlow, { passive: true });

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if (els.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }
})();