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

// -------Delay time ---
let delayInMilliseconds = 1000;

background.addEventListener("mouseover", () => {
  setTimeout(function () {
    avatarHi.classList.remove("Avtar_Hide");
    avatarNamaste.classList.add("Avtar_Hide");
    // background.style.opacity = "10";
  }, delayInMilliseconds);
});
// avatarContainer.addEventListener("mouseover", () => {
//   avatarHi.classList.remove("Avtar_Hide");
//   avatarNamaste.classList.add("Avtar_Hide");
// });

background.addEventListener("mouseout", () => {
  setTimeout(function () {
    avatarHi.classList.add("Avtar_Hide");
    avatarNamaste.classList.remove("Avtar_Hide");
  }, delayInMilliseconds);
});
// avatarContainer.addEventListener("mouseout", () => {
//   avatarHi.classList.add("Avtar_Hide");
//   avatarNamaste.classList.remove("Avtar_Hide");
// });

// -----Greeting - Typewriting effect ----

setInterval(() => {}, 3000);

const typedText = document.querySelector(".typedText");

window.addEventListener("load", () => {
  let i = 0;
  let txt = "I'm Ranjeet";

  function typeWriter() {
    if (i < txt.length) {
      typedText.innerHTML += txt.charAt(i);
      i++;
    }
  }

  setInterval(() => {
    typeWriter();
  }, 600);
});
