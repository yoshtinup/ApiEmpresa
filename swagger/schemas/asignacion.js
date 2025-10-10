/**
 * @swagger
 * components:
 *   schemas:
 *     Asignacion:
 *       type: object
 *       required:
 *         - id_producto
 *         - id_usuario_asignado
 *         - id_asignador
 *         - tipo_asignacion
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la asignación
 *         id_producto:
 *           type: integer
 *           description: ID del producto asignado
 *           example: 15
 *         id_usuario_asignado:
 *           type: integer
 *           description: ID del usuario que recibe la asignación
 *           example: 8
 *         id_asignador:
 *           type: integer
 *           description: ID del usuario que realiza la asignación
 *           example: 3
 *         tipo_asignacion:
 *           type: string
 *           enum: [temporal, permanente, prestamo, evaluacion, mantenimiento]
 *           description: Tipo de asignación del producto
 *           example: "temporal"
 *         fecha_asignacion:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la asignación
 *           example: "2025-10-10T09:30:00Z"
 *         fecha_devolucion_esperada:
 *           type: string
 *           format: date-time
 *           description: Fecha esperada de devolución
 *           example: "2025-11-10T17:00:00Z"
 *         fecha_devolucion_real:
 *           type: string
 *           format: date-time
 *           description: Fecha real de devolución (si aplica)
 *           nullable: true
 *         estado:
 *           type: string
 *           enum: [asignado, en_uso, devuelto, vencido, perdido, dañado]
 *           description: Estado actual de la asignación
 *           example: "asignado"
 *         cantidad_asignada:
 *           type: integer
 *           minimum: 1
 *           description: Cantidad de productos asignados
 *           example: 2
 *         ubicacion_uso:
 *           type: string
 *           description: Ubicación donde se utilizará el producto
 *           example: "Oficina 205, Planta 2"
 *         condicion_inicial:
 *           type: string
 *           enum: [nuevo, bueno, regular, malo]
 *           description: Condición del producto al momento de asignación
 *           example: "bueno"
 *         condicion_devolucion:
 *           type: string
 *           enum: [nuevo, bueno, regular, malo, dañado, no_aplica]
 *           description: Condición del producto al momento de devolución
 *           example: "no_aplica"
 *         notas_asignacion:
 *           type: string
 *           description: Notas adicionales sobre la asignación
 *           example: "Laptop para proyecto de desarrollo web"
 *         notas_devolucion:
 *           type: string
 *           description: Notas sobre el estado al devolver
 *           nullable: true
 *         prioridad:
 *           type: string
 *           enum: [baja, media, alta, critica]
 *           description: Prioridad de la asignación
 *           example: "media"
 *         requiere_autorizacion:
 *           type: boolean
 *           description: Indica si la asignación requiere autorización especial
 *           example: false
 *         autorizado_por:
 *           type: integer
 *           description: ID del usuario que autorizó la asignación (si aplica)
 *           nullable: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *     AsignacionResumen:
 *       type: object
 *       properties:
 *         total_asignaciones:
 *           type: integer
 *           example: 75
 *         por_estado:
 *           type: object
 *           properties:
 *             asignado:
 *               type: integer
 *               example: 35
 *             en_uso:
 *               type: integer
 *               example: 25
 *             devuelto:
 *               type: integer
 *               example: 10
 *             vencido:
 *               type: integer
 *               example: 3
 *             perdido:
 *               type: integer
 *               example: 1
 *             dañado:
 *               type: integer
 *               example: 1
 *         por_tipo:
 *           type: object
 *           properties:
 *             temporal:
 *               type: integer
 *               example: 40
 *             permanente:
 *               type: integer
 *               example: 20
 *             prestamo:
 *               type: integer
 *               example: 10
 *             evaluacion:
 *               type: integer
 *               example: 3
 *             mantenimiento:
 *               type: integer
 *               example: 2
 *         productos_mas_asignados:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_producto:
 *                 type: integer
 *               nombre_producto:
 *                 type: string
 *               total_asignaciones:
 *                 type: integer
 */