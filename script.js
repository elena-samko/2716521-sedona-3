window.addEventListener("scroll", () => {
  sessionStorage.setItem("scrollPosition", window.scrollY);
});

window.addEventListener("DOMContentLoaded", () => {
  const scrollPosition = sessionStorage.getItem("scrollPosition");

  if (scrollPosition) {
    window.scrollTo(0, Number(scrollPosition));
  }
});
