"use strict";

let puntuacionTotal = 0;

for (let i = 1; puntuacionTotal < 50; i++) {
  let dice = Math.ceil(Math.random() * 6);
  puntuacionTotal += dice;
  if (puntuacionTotal < 50) {
    console.log(
      `Tirada: ${i}: ha salido un ${dice}, Tienes un total de ${puntuacionTotal}`
    );
  } else {
    console.log(
      `¡Enhorabuena, ha salido un ${dice}! ¡Has ganado con un total de ${puntuacionTotal} puntos`
    );
  }
}
