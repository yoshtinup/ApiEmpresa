
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const CarritoRouter = express.Router();
    
const asignadoRepository = new ProductoRepository();
const asignadoController = new ProductoController(asignadoRepository);

// Definir la ruta POST /clients

CarritoRouter.get('/carrito', (req, res) => asignadoController.getAllProducto(req, res));
// Buscar por ID del registro
CarritoRouter.get("/carrito/:id", (req, res) => asignadoController.getProductoByRegistroId(req, res));
// Buscar por id_curso
CarritoRouter.get("/carrito/curso/:id_curso", (req, res) => asignadoController.getProductoById(req, res));
CarritoRouter.post("/carrito",(req, res) => asignadoController.createProducto(req, res));
CarritoRouter.put("/carrito/:id",(req, res) => asignadoController.updateProductoById(req, res));
CarritoRouter.delete("/carrito/:id" ,(req, res) => asignadoController.deleteProductoById(req, res));
