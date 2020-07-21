const fs = require("fs").promises;
const chalk = require("chalk");
const path = require("path");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");
const { getDiffieHellman } = require("crypto");

async function getFile(pathName) {
  try {
    let pathInfo;
    try {
      //sacar información del path
      pathInfo = await fs.stat(pathName);
    } catch (error) {
      throw new Error(`La ruta ${pathName} no existe`);
    }
    // comprobar que el path es un fichero
    if (!pathInfo.isFile()) {
      throw new Error(`La ruta ${pathName} no es un fichero`);
    }
    // comprobar que pesa menos de 10000kb
    if (pathInfo.size > 10000) {
      throw new Error(`El fichero ${pathName} pesa máis de 10KB`);
    }
    const content = await fs.readFile(pathName);

    return {
      createdAt: pathInfo.birthtime,
      content: content.toString(),
    };
  } catch (error) {
    console.error(chalk.red(error.message));
    console.error(chalk.red("---------"));
  }
}

/*
// lector de ficheros 
async function main() {
    const args = process.argv.slice(2);
    
    for (const argument of args) {
        const pathName = path.join(__dirname, argument);
        const fileData = await 
    }
}
*/
