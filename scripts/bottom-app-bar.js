const bottomMenu = document.querySelector('.bottom-menu');

export function showBottomAppBar() { 
    bottomMenu.classList.add('ease-in');
}

export function hideBottomAppBar() { 
    bottomMenu.classList.remove('ease-in');
}