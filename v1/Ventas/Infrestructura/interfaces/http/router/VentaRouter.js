
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const VentaRouter = express.Router();

const ventaRepository = new ProductoRepository();
const ventaController = new ProductoController(ventaRepository);

// Definir la ruta POST /clients

VentaRouter.get('/venta', (req, res) => ventaController.getAllProducto(req, res));
// Buscar por ID del registro
VentaRouter.get("/venta/:id", (req, res) => ventaController.getProductoByRegistroId(req, res));
// Buscar por id_encargado
VentaRouter.get("/venta/encargado/:id_encargado", (req, res) => ventaController.getProductoById(req, res));
// Crear un nueva venta
VentaRouter.post("/venta",(req, res) => ventaController.createProducto(req, res));
// Actualizar una venta
VentaRouter.put("/venta/:id",(req, res) => ventaController.updateProductoById(req, res));
// Eliminar una venta
VentaRouter.delete("/venta/:id" ,(req, res) => ventaController.deleteProductoById(req, res));
