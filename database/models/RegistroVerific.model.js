import { DataTypes } from 'sequelize';

export default function defineRegistroVerific(sequelize) {
  const RegistroVerific = sequelize.define('RegistroVerific', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    codigo: { type: DataTypes.STRING, allowNull: true },
  }, {
    tableName: 'registro_verific',
    timestamps: true,
  });

  return RegistroVerific;
}
