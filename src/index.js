import app from "./app.js   ";
import { sequelize } from "./database/database.js";
// import "./models/Cliente.js";
// import "./models/Medidor.js";
const PORT = process.env.PORT || 4000; // Cambia el puerto a 4000 u otro de tu elección

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("problemas con la conexión", error);
  }
}

main();
