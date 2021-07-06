const nav = document.querySelector('.nav-menu');
const Git = document.querySelector('.Git');
const burger = document.querySelector('.burger')

burger.addEventListener('click', () =>{
      nav.classList.toggle('V-opacity');
      nav.classList.toggle('N-height');
      Git.classList.toggle('V-opacity');
})
