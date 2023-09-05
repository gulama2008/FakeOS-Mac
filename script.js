const toolbar = document.querySelector(".toolbar__list");
const subMenuContainers = document.querySelectorAll('.sub-menu-container');

function showSubMenu(event) { 
    subMenuContainers.forEach(element => { 
        element.style.display = "none";
    })
    switch (event.target.id) {
      case "appleIcon":
        document.querySelector("#subMenuAppleIcon").style.display = "block";
        break;
      case "finder":
        document.querySelector("#subMenuFinder").style.display = "block";
        break;
      case "file":
        document.querySelector("#subMenuFile").style.display = "block";
        break;
      case "edit":
        document.querySelector("#subMenuEdit").style.display = "block";
        break;
      case "view":
        document.querySelector("#subMenuView").style.display = "block";
        break;
      case "go":
        document.querySelector("#subMenuGo").style.display = "block";
        break;
      case "window":
        document.querySelector("#subMenuWindow").style.display = "block";
        break;
      case "help":
        document.querySelector("#subMenuHelp").style.display = "block";
        break;
      default:
        subMenuContainers.forEach((element) => {
            element.style.display = "none";
        });
        break;
    }
};
window.addEventListener('click', showSubMenu);
