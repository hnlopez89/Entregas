const temperaturas = [
  {
    city: "A coruña",
    min: 17,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 27,
  },
  {
    city: "Lugo",
    min: 12,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
];

const temperaturesTable = document.createElement("table");

for (const temperature of temperaturas) {
  const thead = document.createElement("thead");
  const tr = document.createElement("");
  const th = document.createElement("th");
  th.textContent = temperature.city;
  temperaturesTable.append(th);
}
console.log(temperaturesTable);

// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo
