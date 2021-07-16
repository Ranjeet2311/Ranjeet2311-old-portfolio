const nav = document.querySelector(".nav-menu");
const Git = document.querySelector(".Git");
const burger = document.querySelector(".burger");
const avatarContainer = document.querySelector(".Avatar-Home");
const avatarHi = document.querySelector(".Avatar-Hi");
const avatarNamaste = document.querySelector(".Avatar-Namaste");
let webAppProjectLinks = document.querySelector(".web-app-project-links");

// document.addEventListener("DOMContentLoaded", function () {
// });

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");
  Git.classList.toggle("V-opacity");
});

avatarContainer.addEventListener("mouseover", () => {
  avatarHi.classList.remove("Avtar_Hide");
  avatarNamaste.classList.add("Avtar_Hide");
});

avatarContainer.addEventListener("mouseout", () => {
  avatarHi.classList.add("Avtar_Hide");
  avatarNamaste.classList.remove("Avtar_Hide");
});
