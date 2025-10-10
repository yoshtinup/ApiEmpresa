/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Gestión de cursos educativos y capacitaciones
 */

/**
 * @swagger
 * /curso:
 *   get:
 *     summary: Obtener todos los cursos
 *     tags: [Cursos]
 *     parameters:
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: string
 *         description: Filtrar por categoría del curso
 *       - in: query
 *         name: nivel
 *         schema:
 *           type: string
 *           enum: [principiante, intermedio, avanzado]
 *         description: Filtrar por nivel de dificultad
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [activo, inactivo, completo, cancelado]
 *         description: Filtrar por estado del curso
 *     responses:
 *       200:
 *         description: Lista de cursos disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crear un nuevo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *           example:
 *             titulo: "React.js Avanzado"
 *             descripcion: "Curso avanzado de React.js con hooks, context y patrones modernos"
 *             precio: 399.99
 *             duracion_horas: 60
 *             nivel: "avanzado"
 *             categoria: "Desarrollo Frontend"
 *             instructor: "María García"
 *             fecha_inicio: "2025-11-15"
 *             fecha_fin: "2026-01-15"
 *             cupo_maximo: 25
 *             estado: "activo"
 *             modalidad: "virtual"
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 * 
 * /curso/{id}:
 *   get:
 *     summary: Obtener curso por ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del curso
 *     responses:
 *       200:
 *         description: Curso encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualizar un curso por ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del curso a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *           example:
 *             precio: 349.99
 *             cupo_maximo: 35
 *             estado: "activo"
 *             fecha_inicio: "2025-12-01"
 *     responses:
 *       200:
 *         description: Curso actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       404:
 *         description: Curso no encontrado
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar un curso por ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del curso a eliminar
 *     responses:
 *       200:
 *         description: Curso eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Curso eliminado exitosamente"
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */