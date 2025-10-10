Cómo habilitar sincronización automática de tablas con Sequelize

Este proyecto usa Sequelize para gestionar modelos y migraciones (si existen modelos definidos con Sequelize).

Variables de entorno relevantes:

- DB_SYNC: si se establece en `true`, al arrancar la app se ejecutará `sequelize.sync()`.
- DB_SYNC_FORCE: si se establece en `true` junto con `DB_SYNC=true`, se ejecutará `sequelize.sync({ force: true })`, lo que eliminará y recreará las tablas — úsalo solo en desarrollo.

Ejemplos (PowerShell):

# Ejecutar sin sincronizar
$env:DB_SYNC="false"; npm start

# Ejecutar y sincronizar (sin forzar)
$env:DB_SYNC="true"; npm start

# Ejecutar y forzar recreación de tablas (peligroso en prod)
$env:DB_SYNC="true"; $env:DB_SYNC_FORCE="true"; npm start

Notas:
- Asegúrate de tener modelos Sequelize definidos e importados en algún lugar del arranque para que `sequelize.sync()` cree las tablas correspondientes. Si tus modelos están en archivos separados, impórtalos antes de llamar a `sequelize.sync()` (por ejemplo en `server.js` o en un archivo de inicialización de modelos).
- Alternativa recomendada para producción: usar migraciones con `sequelize-cli` o `umzug` en lugar de `sync({ force })`.
- Requiere la dependencia `sequelize` y `mysql2` (esta última ya está instalada en el proyecto).
