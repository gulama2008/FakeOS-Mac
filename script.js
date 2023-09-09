import { showSubMenu, showCurrentDateAndTime, showSubMenuWhenHover } from "./scripts/top-menu-bar.js";
import { showBottomAppBar, hideBottomAppBar } from "./scripts/bottom-app-bar.js";
import { closeNotes,saveNote,renderNotes,openNotes,deleteNote,showNote}from "./scripts/app-notes.js"
const toolbarMenu = document.querySelectorAll(".toolbar__list__item");
const appleIcon = document.querySelector('#appleIcon');
const appleIconImg = document.querySelector('#appleIconImg');
const endOfBrowser = document.querySelector("#endOfBrowser");
const bottomMenuContainer = document.querySelector('.bottom-menu-container');
const bottomMenu=document.querySelector('.bottom-menu')
const notesIcon = document.querySelector(".app-icon__notes");
const close = document.querySelector('.icon--close');
const saveNotes = document.querySelector("#saveNoteIcon");
const notesList = document.querySelector('#notesList');
const deleteCurrentNote = document.querySelector("#deleteNoteIcon");
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
close.addEventListener('click', closeNotes);
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

deleteCurrentNote.addEventListener('click', e => { deleteNote(currentNote)});