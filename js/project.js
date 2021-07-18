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
    img: "/app-banner/weight-converter.jpg",
    title: " Weight converter",
    code: "https://github.com/Ranjeet2311/Weight-Converter",
    demo: "/app-demo/weight-converter.html",
  },
  {
    id: 3,
    img: "/app-banner/Digital-Clock.jpg",
    title: " Digital clock",
    code: "https://github.com/Ranjeet2311/Digital-Clock",
    demo: "/app-demo/digital-clock.html",
  },
  {
    id: 4,
    img: "/app-banner/modal.jpg",
    title: "Best pictures from Europe",
    code: "https://github.com/Ranjeet2311/Modal",
    demo: "/app-demo/modal.html",
  },
  {
    id: 5,
    img: "/app-banner/play-music.jpg",
    title: "Tap the music",
    code: "https://github.com/Ranjeet2311/Tap-the-Music",
    demo: "/app-demo/play-music.html",
  },
  {
    id: 6,
    img: "/app-banner/music-player.jpg",
    title: "Music player",
    code: "https://github.com/Ranjeet2311/Music-player",
    demo: "/app-demo/music-player.html",
  },
  {
    id: 7,
    img: "/app-banner/counter.jpg",
    title: "Counter",
    code: "https://github.com/Ranjeet2311/Counter-",
    demo: "/app-demo/counter.html",
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

burger.addEventListener("click", () => {
  nav.classList.toggle("V-opacity");
  nav.classList.toggle("N-height");
  // Git.classList.toggle("V-opacity");
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
              <button class="btn-links btn"> <a href=${item.code}> <i class="fas fa-download"></i> source code
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

console.log(webTemplateProjectDisplay);
