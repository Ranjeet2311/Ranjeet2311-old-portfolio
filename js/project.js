const webAppProjectList = [
  {
    id: 1,
    img: "/app-banner/to-do-tasks.jpg",
    title: " To-do-app",
    code: "https://github.com/Ranjeet2311/To-Do-App-Vanilla-JS",
    demo: "/app-demo/todo.html",
  },

  {
    id: 2,
    img: "/app-banner/Weather.jpg",
    title: "Weathe App",
    code: "https://github.com/Ranjeet2311/Weather-App",
    demo: "/app-demo/weather.html",
  },

  {
    id: 3,
    img: "/app-banner/weight-converter.jpg",
    title: " Weight converter",
    code: "https://github.com/Ranjeet2311/Weight-Converter",
    demo: "/app-demo/weight-converter.html",
  },

  {
    id: 4,
    img: "/app-banner/music-player.jpg",
    title: "Music player",
    code: "https://github.com/Ranjeet2311/Music-player",
    demo: "/app-demo/music-player.html",
  },

  {
    id: 5,
    img: "/app-banner/counter.jpg",
    title: "Counter",
    code: "https://github.com/Ranjeet2311/Counter-",
    demo: "/app-demo/counter.html",
  },

  {
    id: 6,
    img: "/app-banner/Digital-Clock.jpg",
    title: " Digital clock",
    code: "https://github.com/Ranjeet2311/Digital-Clock",
    demo: "/app-demo/digital-clock.html",
  },

  {
    id: 7,
    img: "/app-banner/play-music.jpg",
    title: "Tap the music",
    code: "https://github.com/Ranjeet2311/Tap-the-Music",
    demo: "/app-demo/play-music.html",
  },

  {
    id: 8,
    img: "/app-banner/Menu-display.jpg",
    title: "Menu display -filter",
    code: "https://github.com/Ranjeet2311/Dynamic-Menu-Display",
    demo: "/app-demo/menu-display.html",
  },

  {
    id: 9,
    img: "/app-banner/modal.jpg",
    title: "Best pictures from Europe",
    code: "https://github.com/Ranjeet2311/Modal",
    demo: "/app-demo/modal.html",
  },
];
const webTemplatesProjectList = [
  {
    id: 1,
    img: "/app-banner/e-commerce-demo.png",
    title: "E-commerce-demo",
    code: "https://github.com/Ranjeet2311/Projects",
    demo: "/app-demo/e-commerce-demo.html",
  },
  {
    id: 2,
    img: "/app-banner/yoga-demo.png",
    title: "Yoga-demo",
    code: "https://github.com/Ranjeet2311/Projects",
    demo: "/app-demo/yoga-demo.html",
  },
  {
    id: 3,
    img: "/app-banner/tech-demo.jpg",
    title: "Tech-demo",
    code: "https://github.com/Ranjeet2311/Projects",
    demo: "/app-demo/tech-demo.html",
  },
  {
    id: 4,
    img: "/app-banner/car-service-demo.png",
    title: "Car service demo",
    code: "https://github.com/Ranjeet2311/Projects",
    demo: "/app-demo/car-service.html",
  },
  {
    id: 5,
    img: "/app-banner/game-sign-up.png",
    title: "Game-sign-up",
    code: "https://github.com/Ranjeet2311/Projects",
    demo: "/app-demo/hero-page.html",
  },
  {
    id: 6,
    img: "/app-banner/my-portfolio.png",
    title: "My portfolio",
    code: "https://github.com/Ranjeet2311/Ranjeet2311.github.io",
    demo: "https://ranjeet2311.github.io/",
  },
  {
    id: 7,
    img: "/app-banner/Animated-Boat.jpg",
    title: "Animated Boat",
    code: "https://github.com/Ranjeet2311/Boat-Animation",
    demo: "/app-demo/animatedBoat.html",
  },
];

const nav = document.querySelector(".nav-menu");
// const Git = document.querySelector(".Git");
const burger = document.querySelector(".burger");
const avatarContainer = document.querySelector(".Avatar-Home");
const avatarHi = document.querySelector(".Avatar-Hi");
const avatarNamaste = document.querySelector(".Avatar-Namaste");
let webAppProjectLinks = document.querySelector(".web-app-project-links");
let webTemplateProjectLinks = document.querySelector(
  ".web-template-project-links"
);
let reactAppProjectLinks = document.querySelector(".react-app-project-links");

const faDotCircle = document.querySelector(".fa-dot-circle");
faDotCircle.classList.remove("blink");

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");
});

// ---------Web App Project mapping ---

let projectDisplay = webAppProjectList.map(function (item) {
  return `                  <div class="links-container">
        <img src= ${item.img} >
        <h4>${item.title}</h4>
        <div class="links-container-btn">
              <button class="btn-links btn"> <a href=${item.code} target=”_blank”> <i class="fas fa-download"></i> source code
                    </a></button>
              <button class="btn-links btn"> <a
                          href=${item.demo}
                          target=”_blank”>Live
                          Demo</a>
              </button>
        </div>
    
      </div> `;
});
projectDisplay = projectDisplay.join("");
webAppProjectLinks.innerHTML = projectDisplay;

// ---------Web Template Project mapping ------
let webTemplateProjectDisplay = webTemplatesProjectList.map(function (item) {
  return `                  <div class="links-container">
        <img src= ${item.img} >
        <h4>${item.title}</h4>
        <div class="links-container-btn">
              <button class="btn-links btn"> <a href=${item.code} target=”_blank” > <i class="fas fa-download"></i> source code
                    </a></button>
              <button class="btn-links btn"> <a
                          href=${item.demo}
                          target=”_blank”>Live
                          Demo</a>
              </button>
        </div>
    
      </div> `;
});
webTemplateProjectDisplay = webTemplateProjectDisplay.join("");
webTemplateProjectLinks.innerHTML = webTemplateProjectDisplay;

// console.log(webTemplateProjectDisplay);

// -----------------React project Display---------------
const reactProjectList = [
  {
    id: 1,
    img: "/reactScreenshots/movie-database-project.png",
    title: "Movie Database",
    code: "https://github.com/Ranjeet2311/React-MovieDatabase-app",
    demo: "https://movie-database-project-0802.netlify.app/",
  },
  {
    id: 2,
    img: "/reactScreenshots/quiz-demo.jpg",
    title: "Quiz App",
    code: "https://github.com/Ranjeet2311/React-Quiz-App",
    demo: "https://quiz-app-0810.netlify.app/",
  },
  {
    id: 3,
    img: "/app-banner/Text-to-speech-image.jpg",
    title: "Text to Speech",
    code: "https://github.com/Ranjeet2311/React-Speech-to-text",
    demo: "https://speech-to-text-09-01.netlify.app",
  },
  {
    id: 4,
    img: "/reactScreenshots/React-home.png",
    title: "React-Website",
    code: "https://github.com/Ranjeet2311/React-Website",
    demo: "https://react-website-0803.netlify.app/",
  },
  {
    id: 5,
    img: "/reactScreenshots/react-menu-home.png",
    title: "React Dynamic Menu",
    code: "https://github.com/Ranjeet2311/React-Navbar",
    demo: "https://react-navigation-menu-0803.netlify.app/",
  },
];

let reactProjectDisplay = reactProjectList.map(function (item) {
  return `<div class="links-container">
  <img src= ${item.img} >
  <h4>${item.title}</h4>
  <div class="links-container-btn">
        <button class="btn-links btn"> <a href=${item.code} target=”_blank” > <i class="fas fa-download"></i> source code
              </a></button>
        <button class="btn-links btn"> <a
                    href=${item.demo}
                    target=”_blank”>Live
                    Demo</a>
        </button>
  </div>

</div>`;
});
reactProjectDisplay = reactProjectDisplay.join(" ");
reactAppProjectLinks.innerHTML = reactProjectDisplay;

// let reactAppProjectLinks = reactProjectList.map(function (item) {
//   return `                  <div class="links-container">
//         <img src= ${item.img} >
//         <h4>${item.title}</h4>
//         <div class="links-container-btn">
//               <button class="btn-links btn"> <a href=${item.code}> <i class="fas fa-download"></i> source code
//                     </a></button>
//               <button class="btn-links btn"> <a
//                           href=${item.demo}
//                           target=”_blank”>Live
//                           Demo</a>
//               </button>
//         </div>

//       </div> `;
// });
// reactAppProjectLinks = reactAppProjectLinks.join("");
// reactAppProjectLinks.innerHTML = reactAppProjectLinks;

// const reactImages = [
//   {
//     id: 1,
//     img: "/reactScreenshots/React-web/React-home.png",
//     text: "React-Home",
//   },
//   {
//     id: 2,
//     img: "/reactScreenshots/React-web/React-services.png",
//     text: "React-services",
//   },
//   {
//     id: 3,
//     img: "/reactScreenshots/React-web/React-contact.png",
//     text: "React-contact",
//   },
//   {
//     id: 4,
//     img: "/reactScreenshots/React-web/React-about-us.png",
//     text: "React-about-us",
//   },
//   {
//     id: 5,
//     img: "/reactScreenshots/React-web/React-smartphone-burger.png",
//     text: "React-smartphone-burger",
//   },
//   {
//     id: 6,
//     img: "/reactScreenshots/React-web/React-smartphone-close.png",
//     text: "React-smartphone-close",
//   },
// ];

// ------------React --website --

// const image = document.querySelector("#image");
// const reactTitle = document.querySelector("#reactTitle");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");

// let currentItem = 0;

// image.src = reactImages[currentItem].img;
// reactTitle.textContent = reactImages[currentItem].text;

// function slideShow() {
//   reactImages[currentItem];
//   image.src = reactImages[currentItem].img;
//   reactTitle.textContent = reactImages[currentItem].text;
// }

// nextBtn.addEventListener("click", () => {
//   currentItem++;
//   if (currentItem >= reactImages.length) {
//     currentItem = 0;
//   }
//   slideShow();
// });

// prevBtn.addEventListener("click", () => {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reactImages.length - 1;
//   }
//   slideShow();
// });

// -----------------------------React-menu ---------------------

// const menuImages = [
//   {
//     id: 1,
//     pic: "/reactScreenshots/React-menu/react-menu-main-home.png",
//     text: "Menu-home",
//   },
//   {
//     id: 2,
//     pic: "/reactScreenshots/React-menu/react-menu-home.png",
//     text: "Smart device burger",
//   },
//   {
//     id: 3,
//     pic: "/reactScreenshots/React-menu/react-menu-smart.png",
//     text: "Menu Display",
//   },
// ];

// const menuImage = document.querySelector(".image");
// const menuTitle = document.querySelector(".reactTitle");
// const menuPrevBtn = document.querySelector(".menu-prev-btn");
// const menuNextBtn = document.querySelector(".menu-next-btn");

// let currentImg = 0;

// menuImage.src = menuImages[currentImg].pic;
// menuTitle.textContent = menuImages[currentImg].text;

// function menuSlideShow() {
//   menuImages[currentImg];
//   menuImage.src = menuImages[currentImg].pic;
//   menuTitle.textContent = menuImages[currentImg].text;
// }

// menuPrevBtn.addEventListener("click", function () {
//   currentImg--;
//   if (currentImg < 0) {
//     currentImg = menuImages.length - 1;
//   }
//   menuSlideShow();
//   console.log(123);
// });
// menuNextBtn.addEventListener("click", function () {
//   currentImg++;
//   if (currentImg >= menuImages.length) {
//     currentImg = 0;
//   }
//   menuSlideShow();
//   console.log(123);
// });
