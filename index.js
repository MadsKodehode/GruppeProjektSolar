const menuBar = document.querySelector(".mobile-menu");
const bar1 = document.querySelector(".menu-bar1");
const bar2 = document.querySelector(".menu-bar2");
const bar3 = document.querySelector(".menu-bar3");
const navMenu = document.getElementById("nav-wrap");
const mainNav = document.querySelector(".main-nav");
const mainHeader = document.querySelector(".main-header");

function changeFunction() {
  bar1.classList.toggle("transform");
  bar2.classList.toggle("transform");
  bar3.classList.toggle("transform");
  navMenu.classList.toggle("active");
}
