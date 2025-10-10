/**
 * @swagger
 * tags:
 *   name: Carrito
 *   description: Gestión del carrito de compras
 */

/**
 * @swagger
 * /carrito:
 *   get:
 *     summary: Obtener todos los carritos
 *     tags: [Carrito]
 *     parameters:
 *       - in: query
 *         name: id_usuario
 *         schema:
 *           type: integer
 *         description: Filtrar por ID de usuario
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [activo, guardado, procesando, completado]
 *         description: Filtrar por estado del carrito
 *     responses:
 *       200:
 *         description: Lista de items en carritos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Carrito'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Agregar un nuevo item al carrito
 *     tags: [Carrito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carrito'
 *           example:
 *             id_usuario: 1
 *             id_producto: 5
 *             id_encargado: 2
 *             cantidad: 2
 *             precio_unitario: 25.99
 *             estado: "activo"
 *             notas: "Entrega urgente"
 *     responses:
 *       201:
 *         description: Item agregado al carrito exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Carrito'
 *                 - type: object
 *                   properties:
 *                     subtotal:
 *                       type: number
 *                       example: 51.98
 *       400:
 *         description: Error en los datos enviados (producto no disponible, cantidad inválida, etc.)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Usuario o producto no encontrado
 *       500:
 *         description: Error interno del servidor
 * 
 * /carrito/{id}:
 *   get:
 *     summary: Obtener item del carrito por ID de registro
 *     tags: [Carrito]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro del item en el carrito
 *     responses:
 *       200:
 *         description: Item del carrito encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Carrito'
 *       404:
 *         description: Item del carrito no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualizar un item del carrito
 *     tags: [Carrito]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del item en el carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carrito'
 *           example:
 *             cantidad: 3
 *             estado: "guardado"
 *             notas: "Cambio de cantidad solicitado"
 *     responses:
 *       200:
 *         description: Item del carrito actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Carrito'
 *                 - type: object
 *                   properties:
 *                     subtotal:
 *                       type: number
 *                       description: Subtotal recalculado
 *       404:
 *         description: Item del carrito no encontrado
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar un item del carrito
 *     tags: [Carrito]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del item a eliminar del carrito
 *     responses:
 *       200:
 *         description: Item eliminado del carrito exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item eliminado del carrito exitosamente"
 *                 carrito_actualizado:
 *                   $ref: '#/components/schemas/CarritoResumen'
 *       404:
 *         description: Item del carrito no encontrado
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * 
 * /carrito/encargado/{id_encargado}:
 *   get:
 *     summary: Obtener carritos gestionados por un encargado
 *     tags: [Carrito]
 *     parameters:
 *       - in: path
 *         name: id_encargado
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del encargado
 *     responses:
 *       200:
 *         description: Carritos del encargado encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Carrito'
 *       404:
 *         description: No se encontraron carritos para este encargado
 *       500:
 *         description: Error interno del servidor
 */