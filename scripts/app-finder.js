const appFinder=document.querySelector('.app-finder')

export const openFinder = () => {
  appFinder.classList.add("show-element");
};

export const closeFinder = () => {
  appFinder.classList.remove("show-element");
};


