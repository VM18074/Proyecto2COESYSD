'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institucion extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // Definir asociación aquí.
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