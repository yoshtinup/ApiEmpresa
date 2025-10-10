import { DataTypes } from 'sequelize';

export default function defineVenta(sequelize) {
  const Venta = sequelize.define('Venta', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
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
    total_final: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    productos: {
      type: DataTypes.JSON,
      allowNull: true
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
    excel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'venta',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
      { name: 'idx_venta_id_encargado', fields: ['id_encargado'] },
      { name: 'idx_venta_id_curso', fields: ['id_curso'] },
      { name: 'idx_venta_fecha', fields: ['fecha_venta'] }
    ]
  });

  return Venta;
}
