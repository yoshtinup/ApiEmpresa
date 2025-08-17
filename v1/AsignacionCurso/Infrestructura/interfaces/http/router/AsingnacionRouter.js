
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const AsingnacionCursoRouter = express.Router();

const asignadoRepository = new ProductoRepository();
const asignadoController = new ProductoController(asignadoRepository);

// Definir la ruta POST /clients

AsingnacionCursoRouter.get('/asignar-curso', (req, res) => asignadoController.getAllProducto(req, res));
AsingnacionCursoRouter.get("/asignar-curso/:id", (req, res) => asignadoController.getProductoById(req, res));
AsingnacionCursoRouter.post("/asignar-curso",(req, res) => asignadoController.createProducto(req, res));
AsingnacionCursoRouter.put("/asignar-curso/:id",(req, res) => asignadoController.updateProductoById(req, res));
AsingnacionCursoRouter.delete("/asignar-curso/:id" ,(req, res) => asignadoController.deleteProductoById(req, res));
