import { DataTypes } from 'sequelize';

export default function defineProductoUser(sequelize) {
  const ProductoUser = sequelize.define('ProductoUser', {
    id: { type: DataTypes.STRING, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: true },
    precio: { type: DataTypes.DECIMAL(10,2), allowNull: true },
    imagen: { type: DataTypes.STRING, allowNull: true },
  }, {
    tableName: 'productos_user',
    timestamps: true,
  });

  return ProductoUser;
}
