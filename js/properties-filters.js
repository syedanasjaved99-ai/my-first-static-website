/**
 * @module properties-filters — Client-side filter demo; replace with API query.
 */
(function () {
  const grid = document.getElementById("property-grid");
  const loc = document.getElementById("filter-location");
  const price = document.getElementById("filter-price");
  const type = document.getElementById("filter-type");
  if (!grid || !loc || !price || !type) return;

  function apply() {
    const l = loc.value;
    const p = price.value;
    const t = type.value;
    grid.querySelectorAll("[data-property-card]").forEach((card) => {
      const cl = card.getAttribute("data-location") || "";
      const cp = card.getAttribute("data-price-tier") || "";
      const ct = card.getAttribute("data-type") || "";
      const ok =
        (l === "all" || cl === l) &&
        (p === "all" || cp === p) &&
        (t === "all" || ct === t);
      card.classList.toggle("hidden", !ok);
    });
  }

  [loc, price, type].forEach((el) => el.addEventListener("change", apply));
  apply();
})();
