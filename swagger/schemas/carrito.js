/**
 * @swagger
 * components:
 *   schemas:
 *     Carrito:
 *       type: object
 *       required:
 *         - id_usuario
 *         - id_producto
 *         - cantidad
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del item en el carrito
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario propietario del carrito
 *           example: 1
 *         id_producto:
 *           type: integer
 *           description: ID del producto en el carrito
 *           example: 5
 *         id_encargado:
 *           type: integer
 *           description: ID del encargado que gestiona el carrito
 *           example: 2
 *         cantidad:
 *           type: integer
 *           minimum: 1
 *           description: Cantidad del producto en el carrito
 *           example: 2
 *         precio_unitario:
 *           type: number
 *           format: float
 *           description: Precio unitario del producto al momento de agregarlo
 *           example: 25.99
 *         subtotal:
 *           type: number
 *           format: float
 *           description: Subtotal calculado (cantidad × precio_unitario)
 *           example: 51.98
 *         fecha_agregado:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora cuando se agregó el item al carrito
 *         estado:
 *           type: string
 *           enum: [activo, guardado, procesando, completado]
 *           description: Estado del item en el carrito
 *           example: "activo"
 *         notas:
 *           type: string
 *           description: Notas adicionales sobre el producto
 *           example: "Talla M, color azul"
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *     CarritoResumen:
 *       type: object
 *       properties:
 *         total_items:
 *           type: integer
 *           description: Número total de items en el carrito
 *           example: 3
 *         subtotal:
 *           type: number
 *           format: float
 *           description: Subtotal de todos los items
 *           example: 127.95
 *         impuestos:
 *           type: number
 *           format: float
 *           description: Impuestos calculados
 *           example: 20.47
 *         total:
 *           type: number
 *           format: float
 *           description: Total a pagar
 *           example: 148.42
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Carrito'
 */