
import express from 'express';

import { IngresoController } from  "../../../adapters/controllers/ProductoController.js";
import { IngresoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const IngresoRouter = express.Router();

const ingresoRepository = new IngresoRepository();
const ingresoController = new IngresoController(ingresoRepository);

// Rutas de Ingreso
IngresoRouter.get('/ingreso', (req, res) => ingresoController.getAllIngreso(req, res));
IngresoRouter.get("/ingreso/:id", (req, res) => ingresoController.getIngresoById(req, res));
IngresoRouter.post("/ingreso",(req, res) => ingresoController.createIngreso(req, res));
IngresoRouter.put("/ingreso/:id",(req, res) => ingresoController.updateIngresoById(req, res));
IngresoRouter.delete("/ingreso/:id" ,(req, res) => ingresoController.deleteIngresoById(req, res));
