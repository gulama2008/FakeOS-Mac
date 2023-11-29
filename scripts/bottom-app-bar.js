const bottomMenu = document.querySelector('.bottom-menu');
const notesApp = document.querySelector(".app-notes");

export function showBottomAppBar() { 
    bottomMenu.classList.add('ease-in');
}

export function hideBottomAppBar() { 
    bottomMenu.classList.remove('ease-in');
}

