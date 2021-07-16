const images = [
  {
    id: 5,
    img: "Ljubljana.jpg",
    text: "Beautiful Ljubljana",
  },
  {
    id: 2,
    img: "john.jpg",
    text: "Beautiful France",
  },
  {
    id: 3,
    img: "joss.jpg",
    text: "Beautiful Austria",
  },
  {
    id: 4,
    img: "rom.jpg",
    text: "Beautiful Croatia",
  },
  {
    id: 5,
    img: "vienna.jpg",
    text: "Beautiful Germany",
  },
  {
    id: 1,
    img: "wien.jpg",
    text: "Beautiful Vienna",
  },
];

let currentItem = 0;

const closeIcon = document.querySelector("#close-icon");
const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");
const h4 = document.querySelector("h4");
const p = document.querySelector("p");
const pic = document.querySelector(".Img");
const imageSlider = document.querySelector(".image-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// -----Text insert in HTML ----

h1.textContent = "Best Pictures from Europe";
p.textContent = '"Hover the image to enlage it"';
h1.style.fontSize = "3rem";
h4.style.fontSize = "2rem";

btn.textContent = '"To see them, click here!"';

p.style.display = "None";
closeIcon.style.display = "None";
imageSlider.style.display = "None";

// -----Slider Function -----

function slideShow() {
  images[currentItem];
  pic.src = images[currentItem].img;
  h4.textContent = images[currentItem].text;
}

// Next button --
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem >= images.length) {
    currentItem = 0;
    // console.log(currentImg);
  }
  slideShow();
});

// Prev Button--
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = images.length - 1; //     currentItem = 3;
    console.log(currentItem);
  }
  slideShow();
});

// ----------Open Modal button ---

btn.addEventListener("click", () => {
  btn.style.display = "none";
  p.style.display = "block";
  closeIcon.style.display = "block";
  closeIcon.textContent = "Close";
  imageSlider.style.display = "block";

  // ----- Initial load
  window.addEventListener("DOMContentLoaded", () => {
    slideShow(currentItem);
  });
  slideShow();
});

// -----Close Button-----

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  btn.style.display = "block";
  if (alert("You will exit the gallery, Thanks for visitng!")) {
  } else window.location.reload();
});
