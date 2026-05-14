/**
 * @module home-slider — Featured properties carousel (API-ready hooks)
 */
(function () {
  const track = document.getElementById("featured-slider-track");
  const prev = document.getElementById("featured-slider-prev");
  const next = document.getElementById("featured-slider-next");
  if (!track || !prev || !next) return;

  function slideBy(dir) {
    const card = track.querySelector("article");
    const gap = 24;
    const w = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.85;
    track.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  prev.addEventListener("click", () => slideBy(-1));
  next.addEventListener("click", () => slideBy(1));
})();
