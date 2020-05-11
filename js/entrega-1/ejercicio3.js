"use strict";

let puntuacionTotal = 0;
let dice = Math.ceil(Math.random() * 6);

for (let i = 1; puntuacionTotal < 50; i++) {
  puntuacionTotal += dice;
}

if (puntuacionTotal < 51) {
  console.log(`${i}, dice, puntuacionTotal`);
} else {
  console.log(`${i}, dice, puntuacionTotal`);
}
