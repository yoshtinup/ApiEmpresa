
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const CursoRouter = express.Router();

const cursoRepository = new ProductoRepository();
const cursoController = new ProductoController(cursoRepository);

// Definir la ruta POST /clients
//mostrar todos los cursos
CursoRouter.get('/curso', (req, res) => cursoController.getAllProducto(req, res));
CursoRouter.get("/curso/:id", (req, res) => cursoController.getProductoById(req, res));
CursoRouter.post("/curso",(req, res) => cursoController.createProducto(req, res));
CursoRouter.put("/curso/:id",(req, res) => cursoController.updateProductoById(req, res));
CursoRouter.delete("/curso/:id" ,(req, res) => cursoController.deleteProductoById(req, res));
