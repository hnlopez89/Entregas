'use strict';

let binaryNumber = 1000;

function binaryConverter(str) {
  let binaryString = str.toString();
  let binaryArray = binaryString.split('');
  let binaryArrayReversed = binaryArray.reverse();
  let binaryArrayReversedOperated = binaryArrayReversed.map((value, index) => {
    return value * 2 ** [index];
  });
  let decimalNumber = binaryArrayReversedOperated.reduce((accumulator, value) => {
    return accumulator + value;
  });

  return decimalNumber;
}
console.log('el número binario ' + binaryNumber + ' equivale al número decimal ' + binaryConverter(binaryNumber));
