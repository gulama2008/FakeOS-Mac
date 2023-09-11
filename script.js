import { showSubMenu, showCurrentDateAndTime, showSubMenuWhenHover } from "./scripts/top-menu-bar.js";
import { showBottomAppBar, hideBottomAppBar } from "./scripts/bottom-app-bar.js";
import { closeNotes, saveNote, renderNotes, openNotes, deleteNote, showNote } from "./scripts/app-notes.js";
import { activePhotosSubmenu ,closePhotos,openPhotos,activeHeaderMenu} from "./scripts/app-photos.js";
const toolbarMenu = document.querySelectorAll(".toolbar__list__item");
const appleIcon = document.querySelector('#appleIcon');
const appleIconImg = document.querySelector('#appleIconImg');
const endOfBrowser = document.querySelector("#endOfBrowser");
const bottomMenuContainer = document.querySelector('.bottom-menu-container');
const bottomMenu=document.querySelector('.bottom-menu')
const notesIcon = document.querySelector(".app-icon__notes");
const closeNotesIcon = document.querySelector('.icon--close-notes');
const saveNotes = document.querySelector("#saveNoteIcon");
const notesList = document.querySelector('#notesList');
const deleteCurrentNote = document.querySelector("#deleteNoteIcon");
const photosSubmenus = document.querySelectorAll(".photos__submenu-list__item");
const closePhotosIcon = document.querySelector('.icon--close-photos')
const photosIcon = document.querySelector(".app-icon__photos");
const photosHeaderMenus = document.querySelectorAll(
  ".app-photos__main__header__span"
);
let currentNote;

window.addEventListener("click", showSubMenu);

setInterval(showCurrentDateAndTime, 1000);

toolbarMenu.forEach(element => {
  element.addEventListener('mouseover',showSubMenuWhenHover)
});
appleIconImg.addEventListener('mouseover', showSubMenuWhenHover);

endOfBrowser.addEventListener('mouseover', showBottomAppBar);

bottomMenuContainer.addEventListener('mouseleave', hideBottomAppBar);
notesIcon.addEventListener('click', openNotes)
closeNotesIcon.addEventListener('click', closeNotes);
saveNotes.addEventListener('click', saveNote);

notesList.addEventListener('click', (e) => { 
  currentNote = e.target;
  if (notesList.childNodes) { 
    notesList.childNodes.forEach((child) => {
      child.classList.remove("current-note");
    });
    e.target.classList.add("current-note");
  }
  showNote(currentNote);
})

deleteCurrentNote.addEventListener('click', e => { deleteNote(currentNote) });

photosSubmenus.forEach((submenu) => {
  
  submenu.addEventListener("click", activePhotosSubmenu);
});

closePhotosIcon.addEventListener('click', closePhotos);
photosIcon.addEventListener('click', openPhotos);

photosHeaderMenus.forEach((menu) => {
  menu.addEventListener('click', activeHeaderMenu)
});