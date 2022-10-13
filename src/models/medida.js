'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Alerta, { foreignKey: 'alertumId' })
    }
  }
  Medida.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medida',
  });
  return Medida;
};