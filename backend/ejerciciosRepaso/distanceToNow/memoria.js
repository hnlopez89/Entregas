const fs = require("fs").promises;
const path = require("path");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns");

const memory = path.join(__dirname, "memory.json");

async function main(main) {
  try {
    // comprobar que el archivo existe
    try {
      await fs.access(memory);
    } catch (error) {
      throw new Error("Es la primera vez que me ejecutan");
    }
    // leer el archivo .json
  } catch (error) {
    console.error("No he podido leer el fichero");
  }
}
