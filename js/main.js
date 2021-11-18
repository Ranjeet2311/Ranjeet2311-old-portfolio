const nav = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger");
const avatarHi = document.querySelector(".Avatar-Hi");
const avatarNamaste = document.querySelector(".Avatar-Namaste");
const faDotCircle = document.querySelector(".fa-dot-circle");
const body = document.querySelector("body");

setInterval(() => {
  faDotCircle.classList.toggle("blink");
}, 600);

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");
});

// -------Delay time ---
let delayInMilliseconds = 1000;

body.addEventListener("mouseover", () => {
  setTimeout(function () {
    avatarHi.classList.remove("Avtar_Hide");
    avatarNamaste.classList.add("Avtar_Hide");
  }, delayInMilliseconds);
});

body.addEventListener("mouseout", () => {
  setTimeout(function () {
    avatarHi.classList.add("Avtar_Hide");
    avatarNamaste.classList.remove("Avtar_Hide");
  }, delayInMilliseconds);
});

// -----Greeting - Typewriting effect ----

setInterval(() => {}, 3000);

const typedText = document.querySelector(".typedText");

window.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  let txt = "I'm Ranjeet";

  function typeWriter() {
    if (i < txt.length) {
      typedText.innerHTML += txt.charAt(i);
      i++;
    }
    console.log("typing works");
  }

  setInterval(() => {
    typeWriter();
  }, 600);
});

gsap.from(".logo", { duration: 3, x: 1000, opacity: 0, ease: "back" });
gsap.from(".caption-text", { duration: 1.5, x: -1000 });
gsap.from(".Avatar-Home", { duration: 2, y: 1000 });
// --about page--
gsap.from(".about-title", { duration: 2, y: -1000 });
gsap.from(".caption-about", { duration: 2, x: -1000 });
gsap.from(".image-about", { duration: 2, x: 1000 });
gsap.from(".about-para", { duration: 2, y: 1000 });
// --Skills page--
gsap.from(".skills-hd1, .main-skills", { duration: 2, x: 1000 });
gsap.from(".skills-hd2", { duration: 2, x: -1000 });
gsap.from(".other-skills, learn-skills", { duration: 2.5, x: -1000 });
