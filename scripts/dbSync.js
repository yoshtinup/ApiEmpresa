import dotenv from 'dotenv';
import signale from 'signale';
import { sequelize } from '../database/sequelize.js';
import { initModels } from '../database/initModels.js';

dotenv.config();

async function run() {
  try {
    await initModels(sequelize);
    await sequelize.authenticate();
    signale.success('Conexión DB autenticada. Ejecutando sync()...');
    await sequelize.sync({ alter: true });
    signale.success('Tablas sincronizadas correctamente.');
    process.exit(0);
  } catch (err) {
    signale.fatal('Error en db:sync', err);
    process.exit(1);
  }
}

run();
