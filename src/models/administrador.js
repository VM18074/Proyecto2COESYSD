'use strict'
const { Model } = require('sequelize')
const Usuario = require('./usuario')
const Administrador = (sequelize, DataTypes) => {
    class Administrador extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Administrador.init(
        {
            nombre: DataTypes.STRING,
            apellido: DataTypes.STRING,
            dui: DataTypes.STRING(9),
            telefono: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Administrador',
        }
    )
    return Administrador
}
// asociacion uno a uno
Usuario.hasOne(Administrador)
Administrador.belongsTo(usuario)

module.exports = Administrador
