/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - precio
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del producto
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *           example: "Laptop Dell Inspiron 15"
 *         descripcion:
 *           type: string
 *           description: Descripción del producto
 *           example: "Laptop con procesador Intel i7, 16GB RAM, 512GB SSD"
 *         precio:
 *           type: number
 *           format: float
 *           description: Precio del producto
 *           example: 899.99
 *         stock:
 *           type: integer
 *           description: Cantidad en stock
 *           example: 25
 *         categoria:
 *           type: string
 *           description: Categoría del producto
 *           example: "Electrónicos"
 *         codigo_barras:
 *           type: string
 *           description: Código de barras del producto
 *           example: "1234567890123"
 *         marca:
 *           type: string
 *           description: Marca del producto
 *           example: "Dell"
 *         modelo:
 *           type: string
 *           description: Modelo del producto
 *           example: "Inspiron 15 3000"
 *         peso:
 *           type: number
 *           format: float
 *           description: Peso del producto en kg
 *           example: 2.1
 *         dimensiones:
 *           type: string
 *           description: Dimensiones del producto
 *           example: "35.8 x 24.7 x 1.99 cm"
 *         estado:
 *           type: string
 *           enum: [activo, inactivo, descontinuado, agotado]
 *           description: Estado del producto
 *           example: "activo"
 *         precio_costo:
 *           type: number
 *           format: float
 *           description: Precio de costo del producto
 *           example: 650.00
 *         margen_ganancia:
 *           type: number
 *           format: float
 *           description: Margen de ganancia en porcentaje
 *           example: 38.46
 *         proveedor:
 *           type: string
 *           description: Nombre del proveedor
 *           example: "Tech Distributor Inc."
 *         stock_minimo:
 *           type: integer
 *           description: Stock mínimo requerido
 *           example: 5
 *         ubicacion_almacen:
 *           type: string
 *           description: Ubicación en el almacén
 *           example: "A-15-B"
 *         fecha_vencimiento:
 *           type: string
 *           format: date
 *           description: Fecha de vencimiento (si aplica)
 *           nullable: true
 *         garantia_meses:
 *           type: integer
 *           description: Meses de garantía
 *           example: 12
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización
 */