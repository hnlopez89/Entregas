'use strict';

function averagePoints(puntosPrimerPartido, puntosSegundoPartido, puntosTercerPartido) {
  return (puntosPrimerPartido + puntosSegundoPartido + puntosTercerPartido) / 3;
}

let MariaAverage = averagePoints(62, 34, 55);
let PaulaAverage = averagePoints(35, 60, 59);
let RebecaAverage = averagePoints(40, 39, 63);

if (MariaAverage > PaulaAverage && RebecaAverage) {
  console.log('Maria gana con una media de ' + MariaAverage + ' puntos');
} else if (PaulaAverage > MariaAverage && RebecaAverage) {
  console.log('Paula gana con una media de ' + PaulaAverage + ' puntos');
} else {
  console.log('Rebeca gana con una media de ' + RebecaAverage + ' puntos');
}
