// assets/js/theme.js
(function () {
  const KEY = "theme";
  const root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  function getPreferred() {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  const saved = localStorage.getItem(KEY);
  apply(saved || getPreferred());

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      apply(next);
      localStorage.setItem(KEY, next);
    });
  }
})();