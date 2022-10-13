'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasOne(models.Daño, {
        onDelete: 'CASCADE',
        hooks: true,
      })
    }
    
  }
  Alerta.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    nivelAlerta: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Alerta',
  });
  return Alerta;
};