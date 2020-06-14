const title = document.getElementById("main");
const daysOfTheWeek = document.querySelectorAll("li");
const rn = (max) => Math.floor(Math.random() * max);
const body = document.body;
body.style.backgroundColor = "black";

for (const day of daysOfTheWeek) {
  setInterval(() => {
    day.style.color = `rgb(${rn(255)}, ${rn(255)}, ${rn(255)})`;
  }, 100);
}
setInterval(() => {
  title.style.color = `rgb(${rn(55)}, ${rn(255)}, ${rn(55)})`;
}, 100);
