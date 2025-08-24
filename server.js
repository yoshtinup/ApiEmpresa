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
import { AsingnacionCursoRouter } from "./v1/AsignacionCurso/Infrestructura/interfaces/http/router/AsingnacionRouter.js";
import { CarritoRouter } from "./v1/Carrito/Infrestructura/interfaces/http/router/CarritoRouter.js";
import { VentaRouter } from "./v1/Ventas/Infrestructura/interfaces/http/router/VentaRouter.js";
const app = express();

app.use(express.static('public'));


// Configuración del rate limiting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Manejar JSON inválido de forma amigable
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      message: 'JSON inválido. Verifica comas, llaves y comillas.',
      detail: err.message
    });
  }
  next(err);
});

// Rutas de la API Usuarios
app.use("/api/v1", clientRouter);
app.use("/api/v1", ProductoRouter);
//ruta de las asignacion de productos
app.use("/api/v1", AsingnacionRouter);
app.use("/api/v1", CursoRouter);
// Endpoint para servir el archivo HTML
app.use("/api/v1", clientVerific);
//Endpoint para la asignacion de cursos
app.use("/api/v1", AsingnacionCursoRouter);
//Endpoint Para Carrito
app.use("/api/v1", CarritoRouter);
//Enpoint Para Ventas
app.use("/api/v1", VentaRouter);

app.get('/mostrar-html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    signale.success(`Server online on port ${PORT}`);
});

