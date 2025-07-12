
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const AsingnacionRouter = express.Router();

const asignadoRepository = new ProductoRepository();
const asignadoController = new ProductoController(asignadoRepository);

// Definir la ruta POST /clients

AsingnacionRouter.get('/asignado', (req, res) => asignadoController.getAllProducto(req, res));
AsingnacionRouter.get("/asignado/:id", (req, res) => asignadoController.getProductoById(req, res));
AsingnacionRouter.post("/asignado",(req, res) => asignadoController.createProducto(req, res));
AsingnacionRouter.put("/asignado/:id",(req, res) => asignadoController.updateProductoById(req, res));
AsingnacionRouter.delete("/asignado/:id" ,(req, res) => asignadoController.deleteProductoById(req, res));
