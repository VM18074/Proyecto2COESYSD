'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Método auxiliar para definir asociaciones.
         * Este método no forma parte del ciclo de vida de Sequelize.
         * El archivo `models/index` llamará a este método automáticamente.
         */
        static associate(models) {
            this.hasOne(models.Empleado, {
                onDelete: 'CASCADE',
                hooks: true,
            })

            this.belongsTo(models.Rol, { foreignKey: 'RolNombre' })
        }
    }
    Usuario.init(
        {
            nombre: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Usuario',
        }
    )
    return Usuario
}