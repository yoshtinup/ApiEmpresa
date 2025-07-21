import express from "express";
import signale from "signale";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

import { clientRouter } from "./v1/Registro/Infrestructura/interfaces/http/router/RegistroRouter.js";
import { ProductoRouter } from "./v1/Producto/Infrestructura/interfaces/http/router/ProductoRouter.js";
import { clientVerific } from "./v1/Registro/Infrestructura/interfaces/http/router/VericadorRouter.js";
import { AsingnacionRouter } from "./v1/Asignacion/Infrestructura/interfaces/http/router/AsingnacionRouter.js";
import { CursoRouter } from "./v1/Cursos/Infrestructura/interfaces/http/router/CursoRouter.js";

const app = express();

app.use(express.static('public'));


// Configuración del rate limiting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());

// Rutas de la API Usuarios
app.use("/api/v1", clientRouter);
app.use("/api/v1", ProductoRouter);
//ruta de las asignacion de productos
app.use("/api/v1", AsingnacionRouter);
app.use("/api/v1", CursoRouter);
// Endpoint para servir el archivo HTML
app.use("/api/v1", clientVerific);

app.get('/mostrar-html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    signale.success(`Server online on port ${PORT}`);
});

