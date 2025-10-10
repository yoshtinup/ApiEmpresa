import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import signale from 'signale';

dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_DATABASE;

// Crear la base de datos si no existe conectando sin especificar database
async function ensureDatabaseExists() {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
    });

    // Use utf8mb4 por compatibilidad con emojis y mejor collation
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await connection.end();
    signale.success(`Database '${DB_NAME}' exists or was created.`);
  } catch (err) {
    signale.fatal('Error asegurando la existencia de la base de datos:', err);
    throw err;
  }
}

// Asegurarse que la base de datos existe antes de crear la instancia de Sequelize
await ensureDatabaseExists();

// Configura la instancia de Sequelize usando variables de entorno
export const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
