const nav = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger");
const avatarHi = document.querySelector(".Avatar-Hi");
const avatarNamaste = document.querySelector(".Avatar-Namaste");
const faDotCircle = document.querySelector(".fa-dot-circle");
const body = document.querySelector("body");
// const background = document.querySelector("#background");

setInterval(() => {
  faDotCircle.classList.toggle("blink");
}, 500);

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");
});

// -------Delay time ---
let delayInMilliseconds = 3000;

body.addEventListener("mouseover", () => {
  setTimeout(function () {
    if (avatarHi) {
      avatarHi.classList.remove("Avtar_Hide");
    }
    if (avatarNamaste) {
      avatarNamaste.classList.add("Avtar_Hide");
    }
  }, delayInMilliseconds);
});

body.addEventListener("mouseout", () => {
  setTimeout(function () {
    if (avatarHi) {
      avatarHi.classList.add("Avtar_Hide");
    }
    if (avatarNamaste) {
      avatarNamaste.classList.remove("Avtar_Hide");
    }
  }, delayInMilliseconds);
});

// -----Greeting - Typewriting effect ----

// setInterval(() => {}, 3000);

window.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  let txt = "Welcome! I'm Ranjeet";

  function typeWriter() {
    var typedText = document.querySelector(".typedText");

    if (typedText) {
      if (i < txt.length) {
        typedText.innerHTML += txt.charAt(i);
        i++;
      }
    }
    // console.log("typing works");
  }

  setInterval(() => {
    typeWriter();
  }, 500);
});

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.set(".null", { opacity: 1 });

gsap.from(".logo", { duration: 3, x: -1000, opacity: 0, ease: "back" });
gsap.from(".caption-text", { duration: 1.5, x: -1000 });
gsap.from(".Avatar-Home", { duration: 2, y: 1000 });
// --about page--
gsap.from(".about-title", { duration: 2, x: 1000 });
gsap.from(".caption-about", { duration: 2, x: -1000 });
gsap.from(".image-about", { duration: 2, x: 1000 });
gsap.from(".about-para", { duration: 2, y: 1000 });
// --Skills page--
gsap.from(".skills-hd1, .main-skills", { duration: 2, x: 1000 });
gsap.from(".skills-hd2", { duration: 2, x: -1000 });
gsap.from(".other-skills, learn-skills", { duration: 2.5, x: -1000 });
