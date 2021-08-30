const nav = document.querySelector(".nav-menu");
// const Git = document.querySelector(".Git");
const burger = document.querySelector(".burger");
const avatarContainer = document.querySelector(".Avatar-Home");
const avatarHi = document.querySelector(".Avatar-Hi");
const avatarNamaste = document.querySelector(".Avatar-Namaste");
// const blink = document.querySelector(".blink");
const faDotCircle = document.querySelector(".fa-dot-circle");
const background = document.querySelector(".background");
// let webAppProjectLinks = document.querySelector(".web-app-project-links");

setInterval(() => {
  faDotCircle.classList.toggle("blink");
}, 600);

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");

  // Git.classList.toggle("V-opacity");
});

background.addEventListener("mouseover", () => {
  avatarHi.classList.remove("Avtar_Hide");
  avatarNamaste.classList.add("Avtar_Hide");
  // background.style.opacity = "10";
});
// avatarContainer.addEventListener("mouseover", () => {
//   avatarHi.classList.remove("Avtar_Hide");
//   avatarNamaste.classList.add("Avtar_Hide");
// });

background.addEventListener("mouseout", () => {
  avatarHi.classList.add("Avtar_Hide");
  avatarNamaste.classList.remove("Avtar_Hide");
});
// avatarContainer.addEventListener("mouseout", () => {
//   avatarHi.classList.add("Avtar_Hide");
//   avatarNamaste.classList.remove("Avtar_Hide");
// });

// -----Greeting - Typewriting effect ----

const typedText = document.querySelector(".typedText");

window.addEventListener("load", () => {
  let i = 0;
  let txt = "I'm Ranjeet";
  let speed = 300;

  function typeWriter() {
    if (i < txt.length) {
      typedText.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setInterval(() => {
    typeWriter();
  }, 1500);
});
