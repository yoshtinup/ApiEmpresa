import { DataTypes } from 'sequelize';

export default function defineProducto(sequelize) {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    precioUnitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    }
  }, {
    tableName: 'producto',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  });

  return Producto;
}
