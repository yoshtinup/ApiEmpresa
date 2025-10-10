import express from "express";
import signale from "signale";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';

// Importar configuración de Swagger desde carpeta swagger
import { swaggerSpec } from './swagger/config.js';

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

// Configuración de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API Empresa Documentation"
}));

// Endpoint para obtener el swagger.json
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/**
 * @swagger
 * /mostrar-html:
 *   get:
 *     summary: Servir archivo HTML principal
 *     description: Endpoint para servir el archivo HTML estático
 *     tags: [Static Files]
 *     responses:
 *       200:
 *         description: Archivo HTML servido correctamente
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */

// Rutas de la API Usuarios
app.use("/api/v1", clientRouter);
//ruta de los productos
app.use("/api/v1", ProductoRouter);
//ruta de las asignacion de productos
app.use("/api/v1", AsingnacionRouter);
//ruta de los cursos
app.use("/api/v1", CursoRouter);
// Endpoint para servir el archivo HTML
app.use("/api/v1", clientVerific);
//ruta de asignacion de cursos
app.use("/api/v1", AsingnacionCursoRouter);
//ruta de carrito
app.use("/api/v1", CarritoRouter);
//ruta de ventas
app.use("/api/v1", VentaRouter);

app.get('/mostrar-html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

const PORT = Number(process.env.PORT) || 3002;
// Inicialización de la base de datos y arranque del servidor
import dotenv from 'dotenv';
import { sequelize } from './database/sequelize.js';
import { initModels } from './database/initModels.js';

dotenv.config();

async function start() {
  try {
    // Autenticar con la base de datos
    await sequelize.authenticate();
    signale.success('Conexión a la base de datos confirmada (Sequelize).');

    // Si DB_SYNC=true entonces inicializar modelos y sincronizarlos
    if (process.env.DB_SYNC && process.env.DB_SYNC.toLowerCase() === 'true') {
      // Importar/registrar modelos dinámicamente
      await initModels(sequelize);
      const force = process.env.DB_SYNC_FORCE && process.env.DB_SYNC_FORCE.toLowerCase() === 'true';
      signale.note(`Ejecutando sequelize.sync({ force: ${force} })`);
      await sequelize.sync({ force });
      signale.success('Sincronización de modelos completada.');
    }

    // Función para intentar escuchar en un puerto y, si está ocupado, probar el siguiente
    const listen = (port) => {
      const server = app.listen(port, () => {
        signale.success(`Server online on port ${port}`);
      });

      server.on('error', (err) => {
        if (err && err.code === 'EADDRINUSE') {
          const nextPort = port + 1;
          signale.warn(`Puerto ${port} en uso. Reintentando en ${nextPort}...`);
          listen(nextPort);
        } else {
          signale.fatal('Error al iniciar el servidor:', err);
          process.exit(1);
        }
      });
    };

    listen(PORT);
  } catch (error) {
    signale.fatal('No se pudo iniciar la aplicación:', error);
    process.exit(1);
  }
}

start();

