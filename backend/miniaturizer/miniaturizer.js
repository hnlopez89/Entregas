const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");
const minimist = require("minimist");
const uuid = require("uuid");

const args = minimist(process.argv.slice(2));

if (!args["input-dir"] || !args["output-dir"]) {
  console.error("los parametros --input-dir y --output-dir son obligatorios");
  process.exit();
}

const inputDir = args["input-dir"];
const outputDir = args["output-dir"];
const size = args.size;
const watermark = args.watermark;

async function miniaturizer({ inputDir, outputDir, size = 600, watermark }) {
  const rutaInputDir = path.join(__dirname, inputDir);
  const rutaOutputDir = path.join(__dirname, outputDir);
  const waterMarkImage = path.join(__dirname, watermark);

  try {
    // comprobar que existe inputDirectory y es un directorio.
    try {
      const statsRutaInputDir = await fs.stat(rutaInputDir);
      if (!statsRutaInputDir.isDirectory()) {
        throw new Error();
      }
    } catch (error) {
      throw new Error(
        "el directorio de imagenes no existe o no es un directorio"
      );
    }
    try {
      await fs.mkdir(rutaOutputDir);
    } catch (error) {
      console.log("el directorio de destino ya existe");
    }
    // leer el contenido de inputDirectory
    const inputDirectoryContents = await fs.readdir(rutaInputDir);

    //filtrar las imagenes que no tengan formatos soportados
    const validImageExtension = [".png", ".jpg", ".jpeg"];

    const validImages = inputDirectoryContents.filter((file) => {
      return validImageExtension.includes(path.extname(file));
    });
    for (const image of validImages) {
      console.log(`Procesando imagen: ${image}`);
      // cargar las imagenes en sharp
      const processedImage = sharp(path.join(rutaInputDir, image));
      // cambiar el tamaño
      processedImage.resize(size, size);

      //poner marca de agua si está definido watermark
      if (watermark) {
        processedImage.composite([
          {
            input: waterMarkImage,
            gravity: "southeast",
          },
        ]);
      }
      // guardar en directorio destino
      await processedImage.toFile(
        path.join(rutaOutputDir, `mini_${uuid.v1()}_${image}`)
      );
    }
  } catch (error) {
    console.error(error.message);
  }
}
miniaturizer({
  inputDir,
  outputDir,
  watermark,
  size,
});
