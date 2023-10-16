import clienteRoutes from "./routes/clientes.routes.js";
import medidorRoutes from "./routes/medidores.routes.js";

import express from "express";

const app = express();

// middlewares
app.use(express.json());

// Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(clienteRoutes);
app.use(medidorRoutes);

export default app;
