/**
 * @module site-shell
 * Loads fragment components for backend migration (replace fetch with server includes).
 */
(function () {
  const headerMount = document.getElementById("site-header-mount");
  const footerMount = document.getElementById("site-footer-mount");

  async function injectFragment(url, mount) {
    if (!mount) return;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      mount.innerHTML = await res.text();
      highlightCurrentNav();
      initMobileNav();
      const y = document.getElementById("footer-year");
      if (y) y.textContent = String(new Date().getFullYear());
    } catch (e) {
      mount.innerHTML =
        '<p class="p-4 text-center text-sm text-red-700">Component load failed. Serve via a local HTTP server (e.g. <code class="rounded bg-black/5 px-1">npx serve</code>) so fragments can load.</p>';
      console.error(e);
    }
  }

  function highlightCurrentNav() {
    const path = (window.location.pathname || "").split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach((a) => {
      const href = (a.getAttribute("href") || "").split("/").pop();
      if (href === path) {
        a.classList.add("text-[#c5a572]");
        a.setAttribute("aria-current", "page");
      }
    });
  }

  function initMobileNav() {
    const btn = document.getElementById("mobile-menu-toggle");
    const panel = document.getElementById("mobile-navigation");
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      panel.classList.toggle("hidden");
      const isOpen = !panel.classList.contains("hidden");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectFragment("components/site-header.html", headerMount);
    injectFragment("components/site-footer.html", footerMount);
  });
})();
