'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alerta.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    activo: DataTypes.STRING,
    nivelAlerta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alerta',
    tableName: 'Alerta',
  });
  return Alerta;
};