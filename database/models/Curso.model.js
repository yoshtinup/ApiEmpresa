import { DataTypes } from 'sequelize';

export default function defineCurso(sequelize) {
  const Curso = sequelize.define('Curso', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_inicial: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_final: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'curso',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
      { name: 'idx_curso_fecha_inicial', fields: ['fecha_inicial'] },
      { name: 'idx_curso_fecha_final', fields: ['fecha_final'] },
      { name: 'idx_curso_ciudad', fields: ['ciudad'] }
    ]
  });

  return Curso;
}
