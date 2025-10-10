/**
 * @swagger
 * components:
 *   schemas:
 *     AsignacionCurso:
 *       type: object
 *       required:
 *         - id_curso
 *         - id_estudiante
 *         - id_instructor
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la asignación
 *         id_curso:
 *           type: integer
 *           description: ID del curso asignado
 *           example: 5
 *         id_estudiante:
 *           type: integer
 *           description: ID del estudiante inscrito
 *           example: 12
 *         id_instructor:
 *           type: integer
 *           description: ID del instructor responsable
 *           example: 3
 *         fecha_asignacion:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la asignación
 *           example: "2025-10-10T14:30:00Z"
 *         fecha_inicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio del curso para el estudiante
 *           example: "2025-11-01"
 *         fecha_finalizacion:
 *           type: string
 *           format: date
 *           description: Fecha esperada de finalización
 *           example: "2025-12-15"
 *         estado:
 *           type: string
 *           enum: [asignado, en_progreso, completado, abandonado, suspendido]
 *           description: Estado actual de la asignación
 *           example: "asignado"
 *         progreso:
 *           type: number
 *           format: float
 *           minimum: 0
 *           maximum: 100
 *           description: Porcentaje de progreso del curso (0-100)
 *           example: 25.5
 *         calificacion:
 *           type: number
 *           format: float
 *           minimum: 0
 *           maximum: 10
 *           description: Calificación obtenida (0-10)
 *           example: 8.5
 *         notas:
 *           type: string
 *           description: Notas adicionales sobre la asignación
 *           example: "Estudiante muestra buen progreso en ejercicios prácticos"
 *         metodo_evaluacion:
 *           type: string
 *           enum: [examen, proyecto, continua, mixta]
 *           description: Método de evaluación del curso
 *           example: "mixta"
 *         certificado_emitido:
 *           type: boolean
 *           description: Indica si se emitió certificado de finalización
 *           example: false
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *     AsignacionEstadisticas:
 *       type: object
 *       properties:
 *         total_asignaciones:
 *           type: integer
 *           example: 150
 *         por_estado:
 *           type: object
 *           properties:
 *             asignado:
 *               type: integer
 *               example: 45
 *             en_progreso:
 *               type: integer
 *               example: 60
 *             completado:
 *               type: integer
 *               example: 35
 *             abandonado:
 *               type: integer
 *               example: 8
 *             suspendido:
 *               type: integer
 *               example: 2
 *         promedio_calificaciones:
 *           type: number
 *           format: float
 *           example: 7.8
 *         tasa_completacion:
 *           type: number
 *           format: float
 *           example: 76.5
 */

export default {};