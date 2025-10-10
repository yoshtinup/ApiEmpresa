/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Gestión de ventas y transacciones comerciales
 */

/**
 * @swagger
 * /venta:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     parameters:
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [pendiente, completada, cancelada, devuelta, procesando]
 *         description: Filtrar por estado de la venta
 *       - in: query
 *         name: metodo_pago
 *         schema:
 *           type: string
 *           enum: [efectivo, tarjeta_credito, tarjeta_debito, transferencia, paypal, criptomoneda]
 *         description: Filtrar por método de pago
 *       - in: query
 *         name: id_cliente
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del cliente
 *       - in: query
 *         name: id_encargado
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del encargado
 *       - in: query
 *         name: fecha_desde
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtrar ventas desde esta fecha
 *       - in: query
 *         name: fecha_hasta
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtrar ventas hasta esta fecha
 *       - in: query
 *         name: monto_min
 *         schema:
 *           type: number
 *           format: float
 *         description: Monto mínimo para filtrar
 *       - in: query
 *         name: monto_max
 *         schema:
 *           type: number
 *           format: float
 *         description: Monto máximo para filtrar
 *       - in: query
 *         name: canal_venta
 *         schema:
 *           type: string
 *           enum: [tienda_fisica, online, telefono, app_movil]
 *         description: Filtrar por canal de venta
 *       - in: query
 *         name: incluir_resumen
 *         schema:
 *           type: boolean
 *         description: Incluir resumen estadístico
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ventas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Venta'
 *                 total:
 *                   type: integer
 *                   example: 1250
 *                 resumen:
 *                   $ref: '#/components/schemas/VentaResumen'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *           example:
 *             id_producto: 15
 *             id_cliente: 8
 *             id_encargado: 3
 *             cantidad: 2
 *             precio_unitario: 25.50
 *             descuento: 5.0
 *             metodo_pago: "tarjeta_credito"
 *             direccion_entrega: "Calle Principal 123, Ciudad"
 *             notas: "Cliente solicitó entrega express"
 *             canal_venta: "online"
 *     responses:
 *       201:
 *         description: Venta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Venta'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Venta registrada exitosamente"
 *                     numero_factura:
 *                       type: string
 *                       example: "FAC-2025-001234"
 *                     stock_actualizado:
 *                       type: boolean
 *                       example: true
 *                     email_enviado:
 *                       type: boolean
 *                       example: true
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Stock insuficiente para la cantidad solicitada"
 *                 stock_disponible:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Producto o cliente no encontrado
 *       409:
 *         description: Conflicto - producto no disponible
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Producto temporalmente no disponible"
 *       500:
 *         description: Error interno del servidor
 * 
 * /venta/{id}:
 *   get:
 *     summary: Obtener venta por ID de registro
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro de venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Venta'
 *                 - type: object
 *                   properties:
 *                     cliente_info:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                         email:
 *                           type: string
 *                         telefono:
 *                           type: string
 *                     producto_info:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                         categoria:
 *                           type: string
 *                         marca:
 *                           type: string
 *                     encargado_info:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                         email:
 *                           type: string
 *                     historial_estado:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           estado:
 *                             type: string
 *                           fecha:
 *                             type: string
 *                             format: date-time
 *                           usuario:
 *                             type: string
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualizar una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *           example:
 *             estado: "completada"
 *             fecha_entrega_real: "2025-10-12T09:30:00Z"
 *             notas: "Entrega realizada exitosamente"
 *     responses:
 *       200:
 *         description: Venta actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Venta'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Venta actualizada exitosamente"
 *                     cambios:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["estado", "fecha_entrega_real", "notas"]
 *                     notificacion_enviada:
 *                       type: boolean
 *                       example: true
 *       404:
 *         description: Venta no encontrada
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede cambiar el estado de una venta cancelada"
 *       409:
 *         description: Conflicto en el cambio de estado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Transición de estado no válida"
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a eliminar
 *     responses:
 *       200:
 *         description: Venta eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Venta eliminada exitosamente"
 *                 stock_restaurado:
 *                   type: boolean
 *                   example: true
 *                 factura_anulada:
 *                   type: boolean
 *                   example: true
 *                 reembolso_procesado:
 *                   type: boolean
 *                   example: false
 *       404:
 *         description: Venta no encontrada
 *       409:
 *         description: No se puede eliminar - venta con restricciones
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede eliminar una venta completada. Use cancelación en su lugar"
 *                 alternativa:
 *                   type: string
 *                   example: "Considere cambiar el estado a 'cancelada'"
 *       500:
 *         description: Error interno del servidor
 * 
 * /venta/encargado/{id_encargado}:
 *   get:
 *     summary: Obtener ventas por ID del encargado
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id_encargado
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del encargado
 *       - in: query
 *         name: fecha_desde
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtrar ventas desde esta fecha
 *       - in: query
 *         name: fecha_hasta
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtrar ventas hasta esta fecha
 *       - in: query
 *         name: incluir_estadisticas
 *         schema:
 *           type: boolean
 *         description: Incluir estadísticas del vendedor
 *     responses:
 *       200:
 *         description: Ventas del encargado encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 encargado_info:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                     total_ventas:
 *                       type: integer
 *                     comisiones_periodo:
 *                       type: number
 *                       format: float
 *                 ventas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Venta'
 *                 estadisticas:
 *                   type: object
 *                   properties:
 *                     ventas_mes_actual:
 *                       type: integer
 *                     ingresos_generados:
 *                       type: number
 *                       format: float
 *                     promedio_venta:
 *                       type: number
 *                       format: float
 *                     ranking_mensual:
 *                       type: integer
 *       404:
 *         description: No se encontraron ventas para este encargado
 *       500:
 *         description: Error interno del servidor
 */