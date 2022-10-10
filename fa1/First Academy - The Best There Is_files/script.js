// Hamburger menu on small screen which shows page navigation
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header-navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

const navCourses = document.querySelector('#nav-courses');
const navCoursesMenu = document.querySelector('#nav-courses-menu');

navCourses.addEventListener('click', () => {
  navCoursesMenu.classList.toggle('active');
});

const navMaterial = document.querySelector('#nav-material');
const navMaterialMenu = document.querySelector('#nav-material-menu');

navMaterial.addEventListener('click', () => {
  navMaterialMenu.classList.toggle('active');
});

const navAbout = document.querySelector('#nav-about');
const navAboutMenu = document.querySelector('#nav-about-menu');

navAbout.addEventListener('click', () => {
  navAboutMenu.classList.toggle('active');
});
