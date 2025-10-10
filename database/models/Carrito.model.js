import { DataTypes } from 'sequelize';

export default function defineCarrito(sequelize) {
  const Carrito = sequelize.define('Carrito', {
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
    id_producto: {
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
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    }
  }, {
    tableName: 'carrito',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
      { name: 'idx_carrito_id_encargado', fields: ['id_encargado'] },
      { name: 'idx_carrito_id_producto', fields: ['id_producto'] }
    ]
  });

  return Carrito;
}
