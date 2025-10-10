/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Gestión de productos e inventario
 */

/**
 * @swagger
 * /producto:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     parameters:
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: string
 *         description: Filtrar por categoría del producto
 *       - in: query
 *         name: marca
 *         schema:
 *           type: string
 *         description: Filtrar por marca del producto
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [activo, inactivo, descontinuado, agotado]
 *         description: Filtrar por estado del producto
 *       - in: query
 *         name: precio_min
 *         schema:
 *           type: number
 *           format: float
 *         description: Precio mínimo para filtrar
 *       - in: query
 *         name: precio_max
 *         schema:
 *           type: number
 *           format: float
 *         description: Precio máximo para filtrar
 *       - in: query
 *         name: stock_bajo
 *         schema:
 *           type: boolean
 *         description: Mostrar solo productos con stock bajo
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Producto'
 *                 total:
 *                   type: integer
 *                   example: 150
 *                 categorias:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["Electrónicos", "Ropa", "Hogar"]
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *           example:
 *             nombre: "Smartphone Samsung Galaxy S23"
 *             descripcion: "Smartphone con pantalla AMOLED 6.1', cámara triple 50MP"
 *             precio: 799.99
 *             stock: 50
 *             categoria: "Electrónicos"
 *             codigo_barras: "8801643718039"
 *             marca: "Samsung"
 *             modelo: "Galaxy S23"
 *             peso: 0.168
 *             estado: "activo"
 *             precio_costo: 550.00
 *             proveedor: "Samsung Electronics"
 *             stock_minimo: 10
 *             ubicacion_almacen: "B-08-A"
 *             garantia_meses: 24
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Producto'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Producto creado exitosamente"
 *                     codigo_producto:
 *                       type: string
 *                       example: "PROD-2025-001234"
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El código de barras ya existe"
 *       500:
 *         description: Error interno del servidor
 * 
 * /producto/{id}:
 *   get:
 *     summary: Obtener producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Producto'
 *                 - type: object
 *                   properties:
 *                     historial_precios:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           precio:
 *                             type: number
 *                           fecha:
 *                             type: string
 *                             format: date-time
 *                     movimientos_stock:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           cantidad:
 *                             type: integer
 *                           tipo:
 *                             type: string
 *                             enum: [entrada, salida, ajuste]
 *                           fecha:
 *                             type: string
 *                             format: date-time
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualizar producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *           example:
 *             precio: 749.99
 *             stock: 45
 *             estado: "activo"
 *             ubicacion_almacen: "B-08-B"
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Producto'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Producto actualizado exitosamente"
 *                     cambios:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["precio", "stock", "ubicacion_almacen"]
 *       404:
 *         description: Producto no encontrado
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El stock no puede ser negativo"
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto eliminado exitosamente"
 *                 producto_archivado:
 *                   type: boolean
 *                   example: true
 *                 stock_liberado:
 *                   type: integer
 *                   example: 45
 *       404:
 *         description: Producto no encontrado
 *       409:
 *         description: No se puede eliminar - producto tiene dependencias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede eliminar un producto con ventas asociadas"
 *                 alternativa:
 *                   type: string
 *                   example: "Considere marcar como descontinuado en lugar de eliminar"
 *       500:
 *         description: Error interno del servidor
 */