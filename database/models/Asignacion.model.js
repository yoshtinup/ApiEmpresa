import { DataTypes } from 'sequelize';

export default function defineAsignacion(sequelize) {
  const Asignacion = sequelize.define('Asignacion', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    iduser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    idproduc: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'asignacion',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
      { name: 'idx_asignacion_iduser', fields: ['iduser'] },
      { name: 'idx_asignacion_idproduc', fields: ['idproduc'] }
    ]
  });

  return Asignacion;
}
