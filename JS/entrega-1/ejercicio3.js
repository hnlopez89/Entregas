'use strict';

let Dice = Math.ceil(Math.random() * 6);
function rollTheDice(atempt) {
  return atempt * Dice;
}
console.log(rollTheDice(4));
