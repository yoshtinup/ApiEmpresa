/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de usuarios y autenticación
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     parameters:
 *       - in: query
 *         name: rol
 *         schema:
 *           type: string
 *           enum: [admin, usuario, moderador, cliente]
 *         description: Filtrar por rol del usuario
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [activo, inactivo, suspendido, pendiente_verificacion]
 *         description: Filtrar por estado del usuario
 *       - in: query
 *         name: email_verificado
 *         schema:
 *           type: boolean
 *         description: Filtrar por verificación de email
 *       - in: query
 *         name: buscar
 *         schema:
 *           type: string
 *         description: Buscar por nombre o email
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: Número máximo de resultados
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Número de página
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     allOf:
 *                       - $ref: '#/components/schemas/Usuario'
 *                       - type: object
 *                         properties:
 *                           password:
 *                             type: string
 *                             description: "Campo omitido por seguridad"
 *                             example: "[HIDDEN]"
 *                 total:
 *                   type: integer
 *                   example: 150
 *                 pagina_actual:
 *                   type: integer
 *                   example: 1
 *                 total_paginas:
 *                   type: integer
 *                   example: 15
 *                 estadisticas:
 *                   type: object
 *                   properties:
 *                     por_rol:
 *                       type: object
 *                       example: {"admin": 5, "usuario": 120, "moderador": 15, "cliente": 10}
 *                     por_estado:
 *                       type: object
 *                       example: {"activo": 140, "inactivo": 8, "suspendido": 2}
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *           example:
 *             nombre: "María González López"
 *             email: "maria.gonzalez@empresa.com"
 *             password: "Password123!"
 *             telefono: "+1987654321"
 *             direccion: "Avenida Central 456, Ciudad"
 *             fecha_nacimiento: "1985-08-22"
 *             rol: "usuario"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Usuario'
 *                 - type: object
 *                   properties:
 *                     password:
 *                       type: string
 *                       description: "Campo omitido por seguridad"
 *                       example: "[HIDDEN]"
 *                     mensaje:
 *                       type: string
 *                       example: "Usuario registrado exitosamente"
 *                     codigo_verificacion_enviado:
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
 *                   example: "El email ya está registrado"
 *                 codigo:
 *                   type: string
 *                   example: "EMAIL_ALREADY_EXISTS"
 *       429:
 *         description: Límite de solicitudes excedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Límite de solicitudes excedido. Intente de nuevo más tarde."
 *       500:
 *         description: Error interno del servidor
 * 
 * /usuario/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Usuario'
 *                 - type: object
 *                   properties:
 *                     password:
 *                       type: string
 *                       description: "Campo omitido por seguridad"
 *                       example: "[HIDDEN]"
 *                     actividad_reciente:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           accion:
 *                             type: string
 *                           fecha:
 *                             type: string
 *                             format: date-time
 *                           ip:
 *                             type: string
 *       401:
 *         description: Token no válido o expirado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no válido"
 *       403:
 *         description: Sin permisos para acceder a este usuario
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualizar usuario por ID
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *           example:
 *             nombre: "María González Rodríguez"
 *             telefono: "+1987654322"
 *             direccion: "Nueva Avenida Central 789, Ciudad"
 *             configuracion_notificaciones:
 *               email_marketing: false
 *               sms_notificaciones: true
 *               push_notificaciones: true
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Usuario'
 *                 - type: object
 *                   properties:
 *                     password:
 *                       type: string
 *                       description: "Campo omitido por seguridad"
 *                       example: "[HIDDEN]"
 *                     mensaje:
 *                       type: string
 *                       example: "Usuario actualizado exitosamente"
 *                     cambios:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["nombre", "telefono", "direccion"]
 *       401:
 *         description: Token no válido
 *       403:
 *         description: Sin permisos para modificar este usuario
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar usuario por ID
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado exitosamente"
 *                 datos_anonimizados:
 *                   type: boolean
 *                   example: true
 *                 backup_creado:
 *                   type: boolean
 *                   example: true
 *       401:
 *         description: Token no válido
 *       403:
 *         description: Sin permisos para eliminar este usuario
 *       404:
 *         description: Usuario no encontrado
 *       409:
 *         description: No se puede eliminar - usuario tiene dependencias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede eliminar un usuario con ventas asociadas"
 *                 alternativa:
 *                   type: string
 *                   example: "Considere desactivar el usuario en lugar de eliminarlo"
 *       500:
 *         description: Error interno del servidor
 * 
 * /loginNew:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *           example:
 *             email: "juan.perez@empresa.com"
 *             password: "MiPassword123!"
 *             recordarme: false
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Datos de login inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Email o contraseña inválidos"
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Credenciales incorrectas"
 *                 intentos_restantes:
 *                   type: integer
 *                   example: 2
 *       403:
 *         description: Cuenta bloqueada o suspendida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Cuenta suspendida. Contacte al administrador"
 *       429:
 *         description: Límite de solicitudes excedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Demasiados intentos de login. Intente más tarde"
 *                 tiempo_espera:
 *                   type: integer
 *                   example: 900
 *       500:
 *         description: Error interno del servidor
 */