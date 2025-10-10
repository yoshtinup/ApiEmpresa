/**
 * @swagger
 * tags:
 *   name: AsignacionCurso
 *   description: Gestión de asignaciones de estudiantes a cursos
 */

/**
 * @swagger
 * /asignar-curso:
 *   get:
 *     summary: Obtener todas las asignaciones de cursos
 *     tags: [AsignacionCurso]
 *     parameters:
 *       - in: query
 *         name: id_curso
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del curso
 *       - in: query
 *         name: id_estudiante
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del estudiante
 *       - in: query
 *         name: id_instructor
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del instructor
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [asignado, en_progreso, completado, abandonado, suspendido]
 *         description: Filtrar por estado de la asignación
 *     responses:
 *       200:
 *         description: Lista de asignaciones de cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AsignacionCurso'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crear una nueva asignación de curso
 *     tags: [AsignacionCurso]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsignacionCurso'
 *           example:
 *             id_curso: 5
 *             id_estudiante: 12
 *             id_instructor: 3
 *             fecha_inicio: "2025-11-01"
 *             estado: "asignado"
 *             metodo_evaluacion: "mixta"
 *             notas: "Estudiante con experiencia previa en programación"
 *     responses:
 *       201:
 *         description: Asignación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/AsignacionCurso'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Estudiante asignado exitosamente al curso"
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El estudiante ya está asignado a este curso"
 *       404:
 *         description: Curso, estudiante o instructor no encontrado
 *       409:
 *         description: Conflicto - curso lleno o fechas incompatibles
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /asignar-curso/id/{id}:
 *   get:
 *     summary: Obtener asignación por ID de registro
 *     tags: [AsignacionCurso]
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
 *               $ref: '#/components/schemas/AsignacionCurso'
 *       404:
 *         description: Asignación no encontrada
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /asignar-curso/curso/{id_curso}:
 *   get:
 *     summary: Obtener asignaciones por ID del curso
 *     tags: [AsignacionCurso]
 *     parameters:
 *       - in: path
 *         name: id_curso
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del curso
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [asignado, en_progreso, completado, abandonado, suspendido]
 *         description: Filtrar por estado de la asignación
 *     responses:
 *       200:
 *         description: Lista de estudiantes asignados al curso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 curso_info:
 *                   type: object
 *                   properties:
 *                     id_curso:
 *                       type: integer
 *                     total_asignados:
 *                       type: integer
 *                 asignaciones:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AsignacionCurso'
 *       404:
 *         description: Curso no encontrado o sin asignaciones
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /asignar-curso/{id}:
 *   put:
 *     summary: Actualizar una asignación de curso
 *     tags: [AsignacionCurso]
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
 *             $ref: '#/components/schemas/AsignacionCurso'
 *           example:
 *             estado: "en_progreso"
 *             progreso: 45.5
 *             calificacion: 8.2
 *             notas: "Progreso satisfactorio, buen desempeño en evaluaciones"
 *     responses:
 *       200:
 *         description: Asignación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/AsignacionCurso'
 *                 - type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *                       example: "Progreso del estudiante actualizado"
 *       404:
 *         description: Asignación no encontrada
 *       400:
 *         description: Error en los datos enviados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Eliminar una asignación de curso
 *     tags: [AsignacionCurso]
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
 *                 estudiante_notificado:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Asignación no encontrada
 *       409:
 *         description: No se puede eliminar - curso en progreso o completado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede eliminar una asignación con curso en progreso"
 *       500:
 *         description: Error interno del servidor
 */

export default {};