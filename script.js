import {showSubMenu ,showCurrentDateAndTime} from "./scripts/top-menu-bar.js";
// import { } from "./scripts/bottom-app-bar";

// const toolbar = document.querySelector(".toolbar__list");

window.addEventListener("click", showSubMenu);
setInterval(showCurrentDateAndTime, 1000);
