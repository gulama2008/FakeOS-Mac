const toolbarMenu = document.querySelectorAll('.toolbar__list__item');
const subMenuContainers = document.querySelectorAll(".sub-menu-container");
const dateAndTime = document.querySelector("#dateAndTime");
let isSubMenuShown = false;
const hoverColor = "rgba(176,198,161,0.6)";

export function showSubMenu(event) {
  subMenuContainers.forEach((element) => {
    element.style.display = "none";
  });
    isSubMenuShown = false;
  switch (event.target.id) {
    case "appleIcon":
    case "appleIconImg":
      event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuAppleIcon").style.display = "block";
      isSubMenuShown = true;
      break;
      case "finder":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuFinder").style.display = "block";
      isSubMenuShown = true;
      break;
      case "file":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuFile").style.display = "block";
      isSubMenuShown = true;
      break;
      case "edit":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuEdit").style.display = "block";
      isSubMenuShown = true;
      break;
      case "view":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuView").style.display = "block";
      isSubMenuShown = true;
      break;
      case "go":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuGo").style.display = "block";
      isSubMenuShown = true;
      break;
      case "window":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuWindow").style.display = "block";
      isSubMenuShown = true;
      break;
      case "help":
          event.target.style.backgroundColor = hoverColor;
      document.querySelector("#subMenuHelp").style.display = "block";
      isSubMenuShown = true;
      break;
    default:
      subMenuContainers.forEach((element) => {
        element.style.display = "none";
        isSubMenuShown = false;
      });
      toolbarMenu.forEach((element) => {
        element.style.removeProperty("background-color");
      });
      break;
  }
};

export function showCurrentDateAndTime() {
  let now = new Date();
  let dateArr = now
    .toLocaleDateString("en-us", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })
    .replaceAll(",", "")
    .split(" ");
  const temp = dateArr[1];
  dateArr[1] = dateArr[2];
  dateArr[2] = temp;
  const dateStr = dateArr.join(" ");
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const dateAndTimeStr = dateStr + " " + timeStr;
  dateAndTime.innerHTML = dateAndTimeStr;
};

export function showSubMenuWhenHover(event) { 
    toolbarMenu.forEach(element => {
        element.style.removeProperty("background-color");
    });
    subMenuContainers.forEach((element) => {
      element.style.display = "none";
    });
    if (isSubMenuShown) {
        event.target.style.backgroundColor = hoverColor;
        switch (event.target.id) {
            case "appleIcon": 
            case "appleIconImg":
                document.querySelector("#subMenuAppleIcon").style.display = "block";
                isSubMenuShown = true;
                break;
            case "finder":
                document.querySelector("#subMenuFinder").style.display = "block";
                isSubMenuShown = true;
                break;
            case "file":
                document.querySelector("#subMenuFile").style.display = "block";
                isSubMenuShown = true;
                break;
            case "edit":
                document.querySelector("#subMenuEdit").style.display = "block";
                isSubMenuShown = true;
                break;
            case "view":
                document.querySelector("#subMenuView").style.display = "block";
                isSubMenuShown = true;
                break;
            case "go":
                document.querySelector("#subMenuGo").style.display = "block";
                isSubMenuShown = true;
                break;
            case "window":
                document.querySelector("#subMenuWindow").style.display = "block";
                isSubMenuShown = true;
                break;
            case "help":
                document.querySelector("#subMenuHelp").style.display = "block";
                isSubMenuShown = true;
                break;
            default:
                subMenuContainers.forEach((element) => {
                    element.style.display = "none";
                    isSubMenuShown = false;
                });
        }
    }
}
