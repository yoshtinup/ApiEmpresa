import { DataTypes } from 'sequelize';

export default function defineAsignacionCurso(sequelize) {
  const AsignacionCurso = sequelize.define('AsignacionCurso', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    id_curso: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'curso',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    id_encargado: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    excel: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'asignacion-curso',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
      { name: 'idx_asignacion_curso_id_curso', fields: ['id_curso'] },
      { name: 'idx_asignacion_curso_id_encargado', fields: ['id_encargado'] }
    ]
  });

  return AsignacionCurso;
}
