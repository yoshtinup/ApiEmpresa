/**
 * @swagger
 * components:
 *   schemas:
 *     Venta:
 *       type: object
 *       required:
 *         - id_producto
 *         - id_cliente
 *         - cantidad
 *         - precio_total
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la venta
 *         id_producto:
 *           type: integer
 *           description: ID del producto vendido
 *           example: 15
 *         id_cliente:
 *           type: integer
 *           description: ID del cliente que compró
 *           example: 8
 *         id_encargado:
 *           type: integer
 *           description: ID del encargado de la venta
 *           example: 3
 *         cantidad:
 *           type: integer
 *           minimum: 1
 *           description: Cantidad de productos vendidos
 *           example: 2
 *         precio_unitario:
 *           type: number
 *           format: float
 *           description: Precio unitario del producto al momento de la venta
 *           example: 25.50
 *         precio_total:
 *           type: number
 *           format: float
 *           description: Precio total de la venta (cantidad × precio_unitario)
 *           example: 51.00
 *         descuento:
 *           type: number
 *           format: float
 *           description: Descuento aplicado en porcentaje
 *           example: 10.0
 *         impuestos:
 *           type: number
 *           format: float
 *           description: Impuestos aplicados
 *           example: 8.16
 *         total_final:
 *           type: number
 *           format: float
 *           description: Total final después de descuentos e impuestos
 *           example: 54.06
 *         fecha_venta:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la venta
 *           example: "2025-10-10T14:30:00Z"
 *         estado:
 *           type: string
 *           enum: [pendiente, completada, cancelada, devuelta, procesando]
 *           description: Estado de la venta
 *           example: "completada"
 *         metodo_pago:
 *           type: string
 *           enum: [efectivo, tarjeta_credito, tarjeta_debito, transferencia, paypal, criptomoneda]
 *           description: Método de pago utilizado
 *           example: "tarjeta_credito"
 *         numero_factura:
 *           type: string
 *           description: Número de factura generado
 *           example: "FAC-2025-001234"
 *         notas:
 *           type: string
 *           description: Notas adicionales sobre la venta
 *           example: "Cliente solicitó entrega express"
 *         direccion_entrega:
 *           type: string
 *           description: Dirección de entrega del producto
 *           example: "Calle Principal 123, Ciudad"
 *         fecha_entrega_estimada:
 *           type: string
 *           format: date
 *           description: Fecha estimada de entrega
 *           example: "2025-10-15"
 *         fecha_entrega_real:
 *           type: string
 *           format: date-time
 *           description: Fecha real de entrega
 *           nullable: true
 *         comision_vendedor:
 *           type: number
 *           format: float
 *           description: Comisión del vendedor
 *           example: 2.55
 *         canal_venta:
 *           type: string
 *           enum: [tienda_fisica, online, telefono, app_movil]
 *           description: Canal por el cual se realizó la venta
 *           example: "online"
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización
 *     VentaResumen:
 *       type: object
 *       properties:
 *         total_ventas:
 *           type: integer
 *           example: 1250
 *         ventas_hoy:
 *           type: integer
 *           example: 45
 *         ingresos_total:
 *           type: number
 *           format: float
 *           example: 125750.50
 *         ingresos_hoy:
 *           type: number
 *           format: float
 *           example: 2340.75
 *         por_estado:
 *           type: object
 *           properties:
 *             pendiente:
 *               type: integer
 *               example: 12
 *             completada:
 *               type: integer
 *               example: 1200
 *             cancelada:
 *               type: integer
 *               example: 25
 *             devuelta:
 *               type: integer
 *               example: 8
 *             procesando:
 *               type: integer
 *               example: 5
 *         por_metodo_pago:
 *           type: object
 *           properties:
 *             efectivo:
 *               type: integer
 *               example: 300
 *             tarjeta_credito:
 *               type: integer
 *               example: 650
 *             tarjeta_debito:
 *               type: integer
 *               example: 200
 *             transferencia:
 *               type: integer
 *               example: 100
 *         productos_mas_vendidos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_producto:
 *                 type: integer
 *               nombre_producto:
 *                 type: string
 *               cantidad_vendida:
 *                 type: integer
 *               ingresos:
 *                 type: number
 *                 format: float
 *         vendedores_top:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_encargado:
 *                 type: integer
 *               nombre:
 *                 type: string
 *               ventas_realizadas:
 *                 type: integer
 *               comisiones_ganadas:
 *                 type: number
 *                 format: float
 */