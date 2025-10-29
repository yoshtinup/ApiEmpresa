import { DataTypes } from 'sequelize';

export default function defineIngreso(sequelize) {
  const Ingreso = sequelize.define('Ingreso', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(250),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING(500),
        allowNull: true
    },
    metodo_pago: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'ingreso',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
        { name: 'idx_ingreso_fecha', fields: ['fecha_ingreso'] }    
    ]
  });

  return Ingreso;
}
