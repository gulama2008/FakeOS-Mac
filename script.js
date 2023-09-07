import {showSubMenu ,showCurrentDateAndTime,showSubMenuWhenHover} from "./scripts/top-menu-bar.js";
const toolbarMenu = document.querySelectorAll(".toolbar__list__item");
const appleIcon = document.querySelector('#appleIcon');
const appleIconImg = document.querySelector('#appleIconImg');
window.addEventListener("click", showSubMenu);

setInterval(showCurrentDateAndTime, 1000);

toolbarMenu.forEach(element => {
  element.addEventListener('mouseover',showSubMenuWhenHover)
});
appleIconImg.addEventListener('mouseover', showSubMenuWhenHover);