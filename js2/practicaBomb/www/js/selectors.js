const rn = (max) => Math.floor(Math.random() * max);
const h1 = document.getElementById("tittle");
const body = document.body;
let contador = 10;

function tick() {
  if (contador === 0) {
    h1.textContent = "💥";
    clearInterval(interval);
    body.style.backgroundColor = `red`;
    body.style.fontSize = "5rem";
  } else {
    h1.textContent = contador;
    body.style.fontSize = "5rem";
    body.style.backgroundColor = `rgb(${rn(225)}, ${rn(225)}, ${rn(225)})`;
  }
  contador--;
}

let interval = setInterval(tick, 1000);
