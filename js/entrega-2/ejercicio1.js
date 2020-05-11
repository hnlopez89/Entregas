'use strict';

let myString = 'Hoy es un día estupendo y fantástico';

function LetterCount(str) {
  let stringToArray = str.split(' ');
  stringToArray.sort((a, b) => {
    return b.length - a.length;
  });
  return stringToArray[0];
}

console.log('La palabra de mayor longitud es ' + LetterCount(myString));
