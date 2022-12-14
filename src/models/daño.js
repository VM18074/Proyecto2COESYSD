'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Daño extends Model {
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
  Daño.init({
    nombre: DataTypes.STRING,
    //descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Daño',
  });
  return Daño;
};