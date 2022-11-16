'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // Definir asociación aquí.
      this.belongsTo(models.Alerta, { foreignKey: 'alertumId' })
   
    }
  }
  Ubicacion.init({
    nombre: DataTypes.STRING,
    coordenadax: DataTypes.FLOAT,
    coordenaday: DataTypes.FLOAT,
    departamento: DataTypes.STRING,
    municipio: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ubicacion',
  });
  return Ubicacion;
};