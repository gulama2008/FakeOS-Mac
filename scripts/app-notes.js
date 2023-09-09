const notesApp = document.querySelector('.app-notes');
const notesList = document.querySelector('#notesList');
const noteTitle = document.querySelector("#noteTitle");
const noteContent = document.querySelector('#noteContent');

export function openNotes() {
    notesApp.classList.add("show-element");
    renderNotes();
}

export function closeNotes() { 
    notesApp.classList.remove('show-element')
}

export function saveNote() { 
    const currentNote = { title:noteTitle.value, content:noteContent.value ,id:Date.now()};
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

export function renderNotes() { 
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

export function deleteNote(currentNote) { 
    console.log(currentNote);
    const currentNotesList = JSON.parse(window.sessionStorage.getItem('notes'));
    const newNotesList = currentNotesList.filter(note => {
        console.log(currentNote.getAttribute('id'));
        console.log(note.id);
        return note.id != currentNote.getAttribute('id')
    });
    console.log(newNotesList);
    window.sessionStorage.setItem("notes", JSON.stringify(newNotesList));
    renderNotes();
    noteTitle.value = "";
    noteContent.value = "";
}



