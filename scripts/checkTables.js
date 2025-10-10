import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function checkTables() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });

    const [tables] = await connection.query('SHOW TABLES');
    
    console.log('\n=================================');
    console.log(`Tablas en ${process.env.DB_DATABASE}:`);
    console.log('=================================');
    
    if (tables.length === 0) {
      console.log('❌ No hay tablas creadas');
    } else {
      tables.forEach((row, index) => {
        console.log(`${index + 1}. ${Object.values(row)[0]}`);
      });
      console.log(`\nTotal: ${tables.length} tablas`);
    }
    
    await connection.end();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkTables();
