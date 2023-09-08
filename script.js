import { showSubMenu, showCurrentDateAndTime, showSubMenuWhenHover } from "./scripts/top-menu-bar.js";
import { showBottomAppBar,hideBottomAppBar } from "./scripts/bottom-app-bar.js";
const toolbarMenu = document.querySelectorAll(".toolbar__list__item");
const appleIcon = document.querySelector('#appleIcon');
const appleIconImg = document.querySelector('#appleIconImg');
const endOfBrowser = document.querySelector("#endOfBrowser");
const bottomMenuContainer = document.querySelector('.bottom-menu-container');
const bottomMenu=document.querySelector('.bottom-menu')

window.addEventListener("click", showSubMenu);

setInterval(showCurrentDateAndTime, 1000);

toolbarMenu.forEach(element => {
  element.addEventListener('mouseover',showSubMenuWhenHover)
});
appleIconImg.addEventListener('mouseover', showSubMenuWhenHover);

endOfBrowser.addEventListener('mouseover', showBottomAppBar);

bottomMenuContainer.addEventListener('mouseleave', hideBottomAppBar);
