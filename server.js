import express from "express";
import signale from "signale";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

import { clientRouter } from "./v1/Registro/Infrestructura/interfaces/http/router/RegistroRouter.js";
import { clientVerific } from "./v1/Registro/Infrestructura/interfaces/http/router/VericadorRouter.js";
const app = express();

app.use(express.static('public'));


// Configuración del rate limiting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());

// Rutas de la API Usuarios
app.use("/api/v1", clientRouter);
// Endpoint para servir el archivo HTML
app.use("/api/v1", clientVerific);

app.get('/mostrar-html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    signale.success(`Server online on port ${PORT}`);
});

