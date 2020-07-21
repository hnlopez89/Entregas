const { hasUncaughtExceptionCaptureCallback } = require("process");

const bulbasaur = {
  type: "herb",
  id: "#001",
  name: "bulbasaur",
};

async function writePokemon(file) {
  const pokedex = await fs.writeFile(file, bulbasaur);
  await console.log(pokedex);

  return await pokedex.toString();
}

writePokemon(".fichero.txt");
