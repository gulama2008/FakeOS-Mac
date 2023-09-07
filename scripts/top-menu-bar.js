const subMenuContainers = document.querySelectorAll(".sub-menu-container");
const dateAndTime = document.querySelector("#dateAndTime");

export function showSubMenu(event) {
  subMenuContainers.forEach((element) => {
    element.style.display = "none";
  });
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
