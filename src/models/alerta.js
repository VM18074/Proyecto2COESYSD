'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // Definir asociación aquí.

      this.hasOne(models.Daño, {
        onDelete: 'CASCADE',
        hooks: true,
      })

      this.hasOne(models.Medida, {
        onDelete: 'CASCADE',
        hooks: true,
      })

      this.hasOne(models.Ubicacion, {
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