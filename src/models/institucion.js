'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institucion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Institucion.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Institucion',
    tableName: 'Institucion',
  });
  return Institucion;
};