import swaggerJsdoc from 'swagger-jsdoc';

// Configuración principal de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Empresa',
      version: '1.0.0',
      description: 'API para gestión de empresa con productos, cursos, asignaciones y ventas',
      contact: {
        name: 'API Support',
        email: 'support@apiempresa.com'
      },
    },
    servers: [
      {
        url: '/api/v1',
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      schemas: {
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Mensaje de error'
            },
            detail: {
              type: 'string',
              description: 'Detalle del error'
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: [
    './swagger/schemas/*.js',
    './swagger/paths/*.js',
    './v1/*/Infrestructura/interfaces/http/router/*.js',
    './server.js'
  ]
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
export { swaggerOptions };