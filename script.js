// Սլայդշոու (mer_masin.html)
(function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  let index = 0;
  let timer;

  function show(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 4000);
  }

  document.querySelector(".slide-btn--prev").addEventListener("click", () => { show(index - 1); restart(); });
  document.querySelector(".slide-btn--next").addEventListener("click", () => { show(index + 1); restart(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { show(i); restart(); }));

  show(0);
  restart();
})();
