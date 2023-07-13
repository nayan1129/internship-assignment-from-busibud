
// hamburger
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".list");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});