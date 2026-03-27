/* =========================
   PAGE BACKGROUND GRADIENT
   - Updates the body gradient as user scrolls
========================== */
function updateGradient() {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scroll / maxScroll : 0;

  const r1 = Math.floor(230 - progress * 200);
  const g1 = Math.floor(240 - progress * 220);
  const b1 = 255;

  const r2 = Math.floor(180 - progress * 160);
  const g2 = Math.floor(220 - progress * 200);
  const b2 = 255;

  document.body.style.background =
    `linear-gradient(to bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
}

/* =========================
   EVENT LISTENERS
========================== */
window.addEventListener("scroll", updateGradient);
window.addEventListener("load", updateGradient);