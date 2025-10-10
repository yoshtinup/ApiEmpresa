/**
 * @swagger
 * tags:
 *   name: Asignaciones
 *   description: Gestión de asignaciones de productos a usuarios
 */

/**
 * @swagger
 * /asignado:
 *   get:
 *     summary: Obtener todas las asignaciones
 *     tags: [Asignaciones]
 *     parameters:
 *       - in: query
 *         name: id_producto
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del producto
 *       - in: query
 *         name: id_usuario_asignado
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del usuario asignado
 *       - in: query
 *         name: id_asignador
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del usuario que asignó
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [asignado, en_uso, devuelto, vencido, perdido, dañado]
 *         description: Filtrar por estado de la asignación
 *       - in: query
 *         name: tipo_asignacion
 *         schema:
 *           type: string
 *           enum: [temporal, permanente, prestamo, evaluacion, mantenimiento]
 *         description: Filtrar por tipo de asignación
 *       - in: query
 *         name: vencidas
 *         schema:
 *           type: boolean
 *         description: Mostrar solo asignaciones vencidas
 *     responses:
 *       200:
 *         description: Lista de asignaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 asignaciones:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Asignacion'
 *                 resumen:
 *                   $ref: '#/components/schemas/AsignacionResumen'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crear una nueva asignación
 *     tags: [Asignaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asignacion'
 *           example:
 *             id_producto: 15
 *             id_usuario_asignado: 8
 *             id_asignador: 3
 *             tipo_asignacion: "temporal"
 *             fecha_devolucion_esperada: "2025-11-10T17:00:00Z"
 *             cantidad_asignada: 1
 *             ubicacion_uso: "Oficina 205, Planta 2"
 *             condicion_inicial: "bueno"
 *             notas_asignacion: "Laptop para proyecto de desarrollo web"
 *             prioridad: "media"
 *             requiere_autorizacion: false
 *     responses:
 *       201:
 *         description: Asignación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Asignacion'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Producto asignado exitosamente"
 *                     codigo_asignacion:
 *                       type: string
 *                       example: "ASG-2025-001234"
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
 *       404:
 *         description: Producto o usuario no encontrado
 *       409:
 *         description: Conflicto - producto ya asignado o no disponible
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El producto ya está asignado a otro usuario"
 *       500:
 *         description: Error interno del servidor
 *
 * /asignado/{id}:
 *   get:
 *     summary: Obtener asignación por ID
 *     tags: [Asignaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único de la asignación
 *     responses:
 *       200:
 *         description: Asignación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Asignacion'
 *                 - type: object
 *                   properties:
 *                     producto_info:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                         categoria:
 *                           type: string
 *                         codigo:
 *                           type: string
 *                     usuario_info:
 *                       type: object
 *                       properties:
 *                         nombre:
 *                           type: string
 *                         email:
 *                           type: string
 *                         departamento:
 *                           type: string
 *       404:
 *         description: Asignación no encontrada
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualizar una asignación
 *     tags: [Asignaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la asignación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asignacion'
 *           example:
 *             estado: "devuelto"
 *             fecha_devolucion_real: "2025-11-08T14:30:00Z"
 *             condicion_devolucion: "bueno"
 *             notas_devolucion: "Producto devuelto en perfectas condiciones"
 *     responses:
 *       200:
 *         description: Asignación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Asignacion'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Asignación actualizada exitosamente"
 *                     stock_actualizado:
 *                       type: boolean
 *                       example: true
 *       404:
 *         description: Asignación no encontrada
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede cambiar el estado de una asignación ya devuelta"
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar una asignación
 *     tags: [Asignaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la asignación a eliminar
 *     responses:
 *       200:
 *         description: Asignación eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Asignación eliminada exitosamente"
 *                 stock_liberado:
 *                   type: integer
 *                   example: 2
 *                 usuario_notificado:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Asignación no encontrada
 *       409:
 *         description: No se puede eliminar - asignación en uso o con restricciones
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede eliminar una asignación en uso"
 *                 alternativa:
 *                   type: string
 *                   example: "Considere marcar como devuelto en lugar de eliminar"
 *       500:
 *         description: Error interno del servidor
 */