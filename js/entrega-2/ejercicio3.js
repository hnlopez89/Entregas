'use strict';

let myString = 'Arriba la birra';

function PalindromeTwo(str) {
  for (let i = 0; i < str.length; i++) {
    str = str.replace(' ', '');
  }
  let stringSameCase = str.toLowerCase();
  let myArray = stringSameCase.split('');
  let myArrayReversed = myArray.reverse();
  let myArrayJoined = myArrayReversed.join('');
  return myArrayJoined === str.toLowerCase();
}

console.log(PalindromeTwo(myString));
