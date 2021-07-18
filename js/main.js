const nav = document.querySelector(".nav-menu");
// const Git = document.querySelector(".Git");
const burger = document.querySelector(".burger");
const avatarContainer = document.querySelector(".Avatar-Home");
const avatarHi = document.querySelector(".Avatar-Hi");
const avatarNamaste = document.querySelector(".Avatar-Namaste");
const blink = document.querySelector(".blink");
const faDotCircle = document.querySelector(".fa-dot-circle");
// let webAppProjectLinks = document.querySelector(".web-app-project-links");

setInterval(() => {
  faDotCircle.classList.toggle("blink");
}, 1000);

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");
  // Git.classList.toggle("V-opacity");
});

avatarContainer.addEventListener("mouseover", () => {
  avatarHi.classList.remove("Avtar_Hide");
  avatarNamaste.classList.add("Avtar_Hide");
});

avatarContainer.addEventListener("mouseout", () => {
  avatarHi.classList.add("Avtar_Hide");
  avatarNamaste.classList.remove("Avtar_Hide");
});
