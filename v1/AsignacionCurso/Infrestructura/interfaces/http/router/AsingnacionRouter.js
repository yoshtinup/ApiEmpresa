
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const AsingnacionCursoRouter = express.Router();

const asignadoRepository = new ProductoRepository();
const asignadoController = new ProductoController(asignadoRepository);

// Rutas de AsignacionCurso
AsingnacionCursoRouter.get('/asignar-curso', (req, res) => asignadoController.getAllProducto(req, res));
AsingnacionCursoRouter.get("/asignar-curso/id/:id", (req, res) => asignadoController.getProductoByRegistroId(req, res));
AsingnacionCursoRouter.get("/asignar-curso/curso/:id_curso", (req, res) => asignadoController.getProductoById(req, res));
AsingnacionCursoRouter.post("/asignar-curso",(req, res) => asignadoController.createProducto(req, res));
AsingnacionCursoRouter.put("/asignar-curso/:id",(req, res) => asignadoController.updateProductoById(req, res));
AsingnacionCursoRouter.delete("/asignar-curso/:id" ,(req, res) => asignadoController.deleteProductoById(req, res));
