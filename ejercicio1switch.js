"use strict";

function askUserForOperator1() {
  return +prompt("Numero 1");
}

function askUserForOperation() {
  return prompt(
    "¿Que operacion quieres hacer? (sumar, restar, multiplicar, dividir o elevar a la potencia)"
  );
}

function askUserForOperator2() {
  return +prompt("Numero 2");
}

let userOperation = askUserForOperation();

switch (userOperation) {
  case "sumar":
    console.log(askUserForOperator1() + askUserForOperator2());
    break;
  case "restar":
    console.log(askUserForOperator1() - askUserForOperator2());
    break;
  case "multiplicar":
    console.log(askUserForOperator1() * askUserForOperator2());
    break;
  case "dividir":
    console.log(askUserForOperator1() / askUserForOperator2());
    break;
  case "elevar a la potencia":
    console.log(Math.pow(askUserForOperator1(), askUserForOperator2()));
    break;

  default:
    console.log("la operacion seleccionada es incorrecta");
    break;
}
