/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       required:
 *         - titulo
 *         - descripcion
 *         - precio
 *         - duracion_horas
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del curso
 *         titulo:
 *           type: string
 *           description: Título del curso
 *           example: "Desarrollo Web con JavaScript"
 *         descripcion:
 *           type: string
 *           description: Descripción detallada del curso
 *           example: "Curso completo de desarrollo web moderno con JavaScript, HTML5 y CSS3"
 *         precio:
 *           type: number
 *           format: float
 *           description: Precio del curso
 *           example: 299.99
 *         duracion_horas:
 *           type: integer
 *           description: Duración del curso en horas
 *           example: 40
 *         nivel:
 *           type: string
 *           enum: [principiante, intermedio, avanzado]
 *           description: Nivel de dificultad del curso
 *           example: "intermedio"
 *         categoria:
 *           type: string
 *           description: Categoría del curso
 *           example: "Programación"
 *         instructor:
 *           type: string
 *           description: Nombre del instructor
 *           example: "Juan Pérez"
 *         fecha_inicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio del curso
 *           example: "2025-11-01"
 *         fecha_fin:
 *           type: string
 *           format: date
 *           description: Fecha de finalización del curso
 *           example: "2025-12-15"
 *         cupo_maximo:
 *           type: integer
 *           description: Número máximo de estudiantes
 *           example: 30
 *         estado:
 *           type: string
 *           enum: [activo, inactivo, completo, cancelado]
 *           description: Estado actual del curso
 *           example: "activo"
 *         modalidad:
 *           type: string
 *           enum: [presencial, virtual, hibrido]
 *           description: Modalidad del curso
 *           example: "virtual"
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 */