# Documentación Swagger - API Empresa

## 📁 Estructura de la Documentación

```
swagger/
├── config.js              # Configuración principal de Swagger
├── schemas/               # Definiciones de schemas reutilizables
│   ├── asignacion.js      # Schemas para Asignaciones
│   ├── asignacionCurso.js # Schemas para AsignacionCurso
│   ├── carrito.js         # Schemas para Carrito
│   ├── curso.js           # Schemas para Cursos
│   ├── producto.js        # Schemas para Productos
│   └── usuario.js         # Schemas para Usuarios
└── paths/                 # Definiciones de rutas/endpoints
    ├── asignacion.js      # Rutas para Asignaciones
    ├── asignacionCurso.js # Rutas para AsignacionCurso
    ├── carrito.js         # Rutas para Carrito
    ├── curso.js           # Rutas para Cursos
    ├── producto.js        # Rutas para Productos
    └── usuario.js         # Rutas para Usuarios
```

## 🚀 Cómo usar esta estructura

### 1. **Configuración Principal** (`swagger/config.js`)
- Contiene la configuración base de OpenAPI 3.0
- Define servidores, información de la API y schemas globales
- Especifica qué archivos deben ser escaneados para documentación

### 2. **Schemas** (`swagger/schemas/`)
- Archivos separados para cada entidad/módulo
- Definiciones reutilizables de modelos de datos
- Facilita el mantenimiento y la consistencia

### 3. **Paths/Rutas** (`swagger/paths/`)
- Documentación de endpoints organizados por módulo
- Separación clara entre lógica de negocio y documentación
- Fácil actualización sin modificar el código del router

## 🔧 Agregar Nueva Documentación

### Para agregar un nuevo módulo:

1. **Crear schema**: `swagger/schemas/nombre-modulo.js`
```javascript
/**
 * @swagger
 * components:
 *   schemas:
 *     NombreModulo:
 *       type: object
 *       properties:
 *         // definir propiedades aquí
 */
```

2. **Crear paths**: `swagger/paths/nombre-modulo.js`
```javascript
/**
 * @swagger
 * tags:
 *   name: NombreModulo
 *   description: Descripción del módulo
 */

/**
 * @swagger
 * /ruta:
 *   get:
 *     summary: Descripción del endpoint
 *     tags: [NombreModulo]
 *     // definir endpoint aquí
 */
```

3. **Los archivos se cargan automáticamente** gracias a la configuración en `config.js`

## 📍 Acceso a la Documentación

- **Interfaz Swagger UI**: http://localhost:3002/api-docs
- **JSON Schema**: http://localhost:3002/swagger.json

## ✅ Ventajas de esta Estructura

- ✅ **Separación de responsabilidades**: Documentación separada del código
- ✅ **Mantenibilidad**: Fácil encontrar y actualizar documentación
- ✅ **Reutilización**: Schemas compartidos entre diferentes endpoints
- ✅ **Escalabilidad**: Fácil agregar nuevos módulos sin afectar existentes
- ✅ **Organización**: Estructura clara y lógica
- ✅ **Automatización**: Carga automática de archivos de documentación