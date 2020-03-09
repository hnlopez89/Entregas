'use strict';

function askUserForOperator1() {
  return +prompt('Numero 1');
}

function askUserForOperation() {
  return prompt('¿Que operacion quieres hacer? (sumar, restar, multiplicar, dividir o elevar a la potencia)');
}

function askUserForOperator2() {
  return +prompt('Numero 2');
}

let userOperation = askUserForOperation();

if (userOperation === 'sumar') {
  console.log(askUserForOperator1() + askUserForOperator2());
} else if (userOperation === 'restar') {
  console.log(askUserForOperator1() - askUserForOperator2());
} else if (userOperation === 'multiplicacion') {
  console.log(askUserForOperator1() * askUserForOperator2());
} else if (userOperation === 'dividir') {
  console.log(askUserForOperator1() / askUserForOperator2());
} else if (userOperation === 'elevar a la potencia') {
  console.log(Math.pow(askUserForOperator1(), askUserForOperator2()));
} else {
  console.log('la operacion seleccionada es incorrecta');
}
