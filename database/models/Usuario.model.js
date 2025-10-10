import { DataTypes } from 'sequelize';

export default function defineUsuario(sequelize) {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'usuario',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  });

  return Usuario;
}
