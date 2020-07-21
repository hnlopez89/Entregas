const { suma, resta, multiplica, divide } = require("./lib/operations.js");
const operation_translations = require("./lib/translations");

const [operation, valueA, valueB] = process.argv.slice(2);

const vA = Number(valueA);
const vB = Number(valueB);

const valid_languages = ["es", "en"];
let language = process.env.LANG || "es";

if (!valid_languages.includes(language)) {
  language = "es";
}

let result;

switch (operation) {
  case "suma":
    result = suma(vA, vB);
    break;
  case "resta":
    result = resta(vA, vB);
    break;
  case "multiplica":
    result = multiplica(vA, vB);
    break;
  case "divide":
    result = divide(vA, vB);
    break;
}
if (!isFinite(result)) {
  console.log("El resultado es más o menos Infinito");
  process.exit();
}

if (isNaN(result)) {
  console.log("La operación no es aritmeticamente correcta.");
  process.exit();
}

console.log(result);

if (language === "es") {
  console.log(
    `El resultado de ${operation_translations[operation][language]} ${vA} y ${vB} es ${result}`
  );
} else if (language === "en") {
  console.log(
    `The result of ${operation_translations[operation][language]} ${vA} and ${vB} if ${result}`
  );
}
