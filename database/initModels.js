import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { fileURLToPath } from 'url';
import signale from 'signale';

export async function initModels(sequelize) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const modelsDir = path.join(__dirname, 'models');

  let files = [];
  try {
    files = fs.readdirSync(modelsDir).filter(f => f.endsWith('.js') && f.endsWith('.model.js'));
    signale.info(`Encontrados ${files.length} modelos en: ${modelsDir}`);
  } catch (err) {
    signale.warn('No se pudo leer el directorio de modelos:', err.message);
    return;
  }

  for (const file of files) {
    const fullPath = path.join(modelsDir, file);
    // dynamic import - path needs to be URL for Windows compatibility
    const modulePath = pathToFileURL(fullPath).href;
    try {
      const mod = await import(modulePath);
      const define = mod.default;
      if (typeof define === 'function') {
        const model = define(sequelize);
        signale.success(`✓ Modelo cargado: ${model.name} -> tabla: ${model.tableName}`);
      }
    } catch (err) {
      signale.error(`Error cargando modelo ${file}:`, err.message);
    }
  }
}
