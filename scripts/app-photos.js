const photosSubmenus = document.querySelectorAll(".photos__submenu-list__item");
const photosApp = document.querySelector('.app-photos');
const headerMenus = document.querySelectorAll(".app-photos__main__header__span");
export const activePhotosSubmenu = (event) => {
    photosSubmenus.forEach(submenu => { 
        submenu.classList.remove("active-photos-submenu");
    })
  event.target.classList.add("active-photos-submenu");
};

export const openPhotos = () => {
  photosApp.classList.add("show-element");
};

export const closePhotos = () => {
  photosApp.classList.remove("show-element");
};

export const activeHeaderMenu = (event) => { 
    headerMenus.forEach((menu) => {
      menu.classList.remove("active-header-menu");
    });
    event.target.classList.add("active-header-menu");
}