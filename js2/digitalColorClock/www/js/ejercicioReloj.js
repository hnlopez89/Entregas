const body = document.querySelector("body");
const main = body.children[2];
const h1 = main.firstElementChild;
const h2 = main.lastElementChild;

function format(number) {
  if (number >= 10) {
    return number;
  } else {
    return "0" + number;
  }
}

function writeClock() {
  const now = new Date();
  const hours = format(now.getHours());
  const minutes = format(now.getMinutes());
  const seconds = format(now.getSeconds());
  h1.textContent = `${hours}:${minutes}:${seconds}`;
}
function greet() {
  if (hours < 7 || hours > 22) {
    return (h2.textContent = "Buenas Noches");
  } else if (hours > 14) {
    return (h2.textContent = "Buenas Tardes");
  } else {
    return (h2.textContent = "Buenos días");
  }
}

setInterval(writeClock, 1000);

function bodyColor() {
  if (h2.textContent === "Buenas Tardes") {
    body.setAttribute("class", "blue");
  } else if (h2.textContent === "Buenos Días") {
    body.setAttribute("class", "gold");
  } else {
    body.setAttribute("class", "dark");
  }
}

bodyColor();
