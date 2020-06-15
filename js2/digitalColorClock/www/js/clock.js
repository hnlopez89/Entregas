const body = document.querySelector("body");
const main = body.children[2];
const h1 = main.firstElementChild;
const h2 = main.lastElementChild;
const now = new Date();
const hours = format(now.getHours());
const minutes = format(now.getMinutes());
const seconds = format(now.getSeconds());

function format(number) {
  if (number >= 10) {
    return number;
  } else {
    return "0" + number;
  }
}

function writeClock() {
  h1.textContent = `${hours}:${minutes}:${seconds}`;
}

function greet() {
  if (`${hours}` < 7 || `${hours}` > 22) {
    return (h2.textContent = "Buenas Noches");
  } else if (`${hours}` > 14) {
    return (h2.textContent = "Buenas Tardes");
  } else {
    return (h2.textContent = "Buenos días");
  }
}
function bodyColor() {
  if (h2.textContent === "Buenas Tardes") {
    body.setAttribute("class", "blue");
  } else if (h2.textContent === "Buenos Días") {
    body.setAttribute("class", "gold");
  } else {
    body.setAttribute("class", "dark");
  }
}
setInterval(writeClock, 100);

bodyColor();
greet();
