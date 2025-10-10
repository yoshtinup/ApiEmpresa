
import express from 'express';

import { ProductoController } from  "../../../adapters/controllers/ProductoController.js"
import { ProductoRepository } from '../../../adapters/repositories/ProductoRepository.js';

export const VentaRouter = express.Router();

const ventaRepository = new ProductoRepository();
const ventaController = new ProductoController(ventaRepository);

// Rutas de Ventas
VentaRouter.get('/venta', (req, res) => ventaController.getAllProducto(req, res));
VentaRouter.get("/venta/:id", (req, res) => ventaController.getProductoByRegistroId(req, res));
VentaRouter.get("/venta/encargado/:id_encargado", (req, res) => ventaController.getProductoById(req, res));
VentaRouter.post("/venta",(req, res) => ventaController.createProducto(req, res));
VentaRouter.put("/venta/:id",(req, res) => ventaController.updateProductoById(req, res));
VentaRouter.delete("/venta/:id" ,(req, res) => ventaController.deleteProductoById(req, res));
