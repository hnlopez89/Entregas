// declaramos el modulo a requerir
const fs = require("fs").promises;

// establecemos una funcion dónde leemos un fichero
async function readFile(file) {
  const data = await fs.readFile(file);
  // es necesario pasarlo a String
  // por defecto devuelve formato Buffer
  return data.toString();
}

async function main() {
  // intenta obtener la lectura del fichero
  try {
    const content = await readFile("fichero.txt");
    console.log(content);
  } catch (error) {
    // sino, tira el error
    console.error("hubo un error");
  } finally {
    // finalmente lanzmos un mensaje.
    console.log("me la bufa, yo imprimo esto");
  }
}
main();
async function stats() {
  // el método .stat referencia a un objeto de propiedades del fichero en cuestión
  const stat = await fs.stat("./node_modules");
  await console.log(stat);
  await console.log(stat.isFile());
  await console.log(stat.size);
  await console.log(stat.mtime);
  await console.log(stat.birthtime);
}

stats();
