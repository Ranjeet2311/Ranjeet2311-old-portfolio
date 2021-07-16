const webAppProjectList = [
  {
    id: 1,
    img: "/app-banner/to-do-tasks.jpg",
    title: " To-do-app",
    code: "http://google.com/",
    demo: "/app-demo/todo.html",
  },
  {
    id: 2,
    img: "/app-banner/weight-converter.jpg",
    title: " Weight converter",
    code: "http://google.com/",
    demo: "/app-demo/weight-converter.html",
  },
  {
    id: 3,
    img: "/app-banner/Digital-Clock.jpg",
    title: " Digital clock",
    code: "http://google.com/",
    demo: "/app-demo/digital-clock.html",
  },
  {
    id: 4,
    img: "/app-banner/modal.jpg",
    title: "Best pictures from Europe",
    code: "http://google.com/",
    demo: "/app-demo/modal.html",
  },
  {
    id: 5,
    img: "/app-banner/play-music.jpg",
    title: "Tap the music",
    code: "http://google.com/",
    demo: "/app-demo/play-music.html",
  },
  {
    id: 6,
    img: "/app-banner/music-player.jpg",
    title: "Music player",
    code: "http://google.com/",
    demo: "/app-demo/music-player.html",
  },
  {
    id: 7,
    img: "/app-banner/counter.jpg",
    title: "Counter",
    code: "http://google.com/",
    demo: "/app-demo/counter.html",
  },
];
const webTemplatesProjectList = [
  {
    id: 1,
    img: "/app-banner/e-commerce-demo.png",
    title: "e-commerce",
    code: "http://google.com/",
    demo: "/app-demo/e-commerce-demo.html",
  },
  {
    id: 2,
    img: "/app-banner/weight-converter.jpg",
    title: "Website 2",
    code: "http://google.com/",
    demo: "/app-demo/weight-converter.html",
  },
  {
    id: 3,
    img: "/app-banner/Digital-Clock.jpg",
    title: "Website 3",
    code: "http://google.com/",
    demo: "/app-demo/digital-clock.html",
  },
  {
    id: 4,
    img: "/app-banner/modal.jpg",
    title: "Website 4",
    code: "http://google.com/",
    demo: "/app-demo/modal.html",
  },
  {
    id: 5,
    img: "/app-banner/play-music.jpg",
    title: "Website 5",
    code: "http://google.com/",
    demo: "/app-demo/play-music.html",
  },
  // {
  //   id: 6,
  //   img: "/app-banner/music-player.jpg",
  //   title: "Music player",
  //   code: "http://google.com/",
  //   demo: "/app-demo/music-player.html",
  // },
  // {
  //   id: 7,
  //   img: "/app-banner/counter.jpg",
  //   title: "Counter",
  //   code: "http://google.com/",
  //   demo: "/app-demo/counter.html",
  // },
];

const nav = document.querySelector(".nav-menu");
const Git = document.querySelector(".Git");
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
  Git.classList.toggle("V-opacity");
});

// avatarContainer.addEventListener("mouseover", () => {
//   avatarHi.classList.remove("Avtar_Hide");
//   avatarNamaste.classList.add("Avtar_Hide");
// });

// avatarContainer.addEventListener("mouseout", () => {
//   avatarHi.classList.add("Avtar_Hide");
//   avatarNamaste.classList.remove("Avtar_Hide");
// });
// ---------Web App Project mapping ---

let projectDisplay = webAppProjectList.map(function (item) {
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
