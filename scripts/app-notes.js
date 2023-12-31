const notesApp = document.querySelector('.app-notes');
const notesList = document.querySelector('#notesList');
const noteTitle = document.querySelector("#noteTitle");
const noteContent = document.querySelector('#noteContent');

export const openNotes=()=> {
    notesApp.classList.add("show-element");
    renderNotes();
}

export const closeNotes=()=> { 
    notesApp.classList.remove('show-element')
}

export const saveNote=()=> { 
    const titleContent = noteTitle.value ? noteTitle.value : "New Note";
    console.log(noteTitle.value);
    console.log(titleContent);
    const currentNote = { title:titleContent, content:noteContent.value ,id:Date.now()};
    let notesList = [];
    const notesListJson = window.sessionStorage.getItem('notes');
    if (notesListJson) { 
        notesList = JSON.parse(notesListJson);
    }
    notesList.push(currentNote);
    window.sessionStorage.setItem("notes", JSON.stringify(notesList));
    renderNotes();
    noteTitle.value = "";
    noteContent.value = "";
}

export const renderNotes=()=> { 
    notesList.replaceChildren();
    let currentNotes = [];
    if (window.sessionStorage.getItem("notes")) {
        currentNotes = JSON.parse(window.sessionStorage.getItem("notes"));
        for (let i = 0; i < currentNotes.length; i++) {
            let noteNode = document.createElement("li");
            notesList.appendChild(noteNode);
            noteNode.innerHTML = currentNotes[i]['title'];
            noteNode.classList.add('notes-list');
            noteNode.setAttribute("id", currentNotes[i]["id"]);
            
        }
    }
}

export const deleteNote=(currentNote)=> { 
    const currentNotesList = JSON.parse(window.sessionStorage.getItem('notes'));
    const newNotesList = currentNotesList.filter(note => {
        return note.id != currentNote.getAttribute('id')
    });
    window.sessionStorage.setItem("notes", JSON.stringify(newNotesList));
    renderNotes();
    noteTitle.value = "";
    noteContent.value = "";
}

export const showNote=(titleNode)=>{ 
    const currentNotesList = JSON.parse(window.sessionStorage.getItem("notes"));
    let activeNoteId = titleNode.getAttribute('id');
    let currentNote = currentNotesList.find(note => note.id == activeNoteId);
    console.log(currentNote);
    console.log(currentNote["title"]);
    noteTitle.value = currentNote['title'];
    noteContent.value = currentNote['content'];
}

export const createNote = () => {
    if (notesList.childNodes) {
      notesList.childNodes.forEach((child) => {
        child.classList.remove("current-note");
      });
    }
    noteTitle.value = "";
    noteContent.value = "";
 }



