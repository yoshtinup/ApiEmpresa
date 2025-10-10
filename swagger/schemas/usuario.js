/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario
 *         nombre:
 *           type: string
 *           description: Nombre completo del usuario
 *           example: "Juan Carlos Pérez"
 *         email:
 *           type: string
 *           format: email
 *           description: Email del usuario
 *           example: "juan.perez@empresa.com"
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *           example: "MiPassword123!"
 *         telefono:
 *           type: string
 *           description: Número de teléfono del usuario
 *           example: "+1234567890"
 *         direccion:
 *           type: string
 *           description: Dirección del usuario
 *           example: "Calle Principal 123, Ciudad"
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento
 *           example: "1990-05-15"
 *         rol:
 *           type: string
 *           enum: [admin, usuario, moderador, cliente]
 *           description: Rol del usuario en el sistema
 *           example: "usuario"
 *         estado:
 *           type: string
 *           enum: [activo, inactivo, suspendido, pendiente_verificacion]
 *           description: Estado actual del usuario
 *           example: "activo"
 *         ultimo_acceso:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora del último acceso
 *           nullable: true
 *         email_verificado:
 *           type: boolean
 *           description: Indica si el email ha sido verificado
 *           example: true
 *         telefono_verificado:
 *           type: boolean
 *           description: Indica si el teléfono ha sido verificado
 *           example: false
 *         configuracion_notificaciones:
 *           type: object
 *           properties:
 *             email_marketing:
 *               type: boolean
 *               example: true
 *             sms_notificaciones:
 *               type: boolean
 *               example: false
 *             push_notificaciones:
 *               type: boolean
 *               example: true
 *         avatar:
 *           type: string
 *           description: URL del avatar del usuario
 *           example: "https://ejemplo.com/avatars/juan.jpg"
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Email del usuario
 *           example: "juan.perez@empresa.com"
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *           example: "MiPassword123!"
 *         recordarme:
 *           type: boolean
 *           description: Mantener sesión activa por más tiempo
 *           example: false
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Token JWT para autenticación
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         refresh_token:
 *           type: string
 *           description: Token para renovar la sesión
 *           example: "rt_abc123def456..."
 *         expires_in:
 *           type: integer
 *           description: Tiempo de expiración en segundos
 *           example: 3600
 *         user:
 *           allOf:
 *             - $ref: '#/components/schemas/Usuario'
 *             - type: object
 *               properties:
 *                 password:
 *                   type: string
 *                   description: "Campo omitido por seguridad"
 *                   example: "[HIDDEN]"
 *         permisos:
 *           type: array
 *           items:
 *             type: string
 *           example: ["read_productos", "write_ventas", "admin_usuarios"]
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: "Incluir el token JWT en el header: Authorization: Bearer {token}"
 */