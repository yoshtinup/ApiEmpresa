
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const CarritoRouter = express.Router();
    
const asignadoRepository = new ProductoRepository();
const asignadoController = new ProductoController(asignadoRepository);

// Rutas de Carrito

CarritoRouter.get('/carrito', (req, res) => asignadoController.getAllProducto(req, res));
// Buscar por ID del registro
CarritoRouter.get("/carrito/:id", (req, res) => asignadoController.getProductoByRegistroId(req, res));
// Buscar por id_encargado
CarritoRouter.get("/carrito/encargado/:id_encargado", (req, res) => asignadoController.getProductoById(req, res));
//crear un nuevo carrito
CarritoRouter.post("/carrito",(req, res) => asignadoController.createProducto(req, res));
//actulizar un carrito
CarritoRouter.put("/carrito/:id",(req, res) => asignadoController.updateProductoById(req, res));
//eliminar un carrito
CarritoRouter.delete("/carrito/:id" ,(req, res) => asignadoController.deleteProductoById(req, res));
