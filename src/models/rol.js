'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Rol extends Model {
        /**
         * Método auxiliar para definir asociaciones.
         * Este método no forma parte del ciclo de vida de Sequelize.
         * El archivo `models/index` llamará a este método automáticamente.
         */
        static associate(models) {
            // Definir asociación aquí.

            this.hasOne(models.Usuario, {
                hooks: true,
            })
        }
    }
    Rol.init(
        {
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: 'Rol',
            tableName: 'Roles',
        }
    )
    return Rol
}