const btn = document.querySelector(".btn");
let timeout;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 305) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      btn.classList.add("active");
    }, 200);
  } else {
    timeout = setTimeout(() => {
      btn.classList.remove("active");
    }, 200);
  }
});
