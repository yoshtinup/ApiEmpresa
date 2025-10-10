import { DataTypes } from 'sequelize';

export default function defineRegistroCliente(sequelize) {
  const RegistroCliente = sequelize.define('RegistroCliente', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: true },
    telefono: { type: DataTypes.STRING, allowNull: true },
    gmail: { type: DataTypes.STRING, allowNull: true },
    codigo: { type: DataTypes.STRING, allowNull: true },
    usuario: { type: DataTypes.STRING, allowNull: true },
  }, {
    tableName: 'registro_clientes',
    timestamps: true,
  });

  return RegistroCliente;
}
