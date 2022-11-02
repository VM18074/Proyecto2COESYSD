'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Empleado extends Model {
        /**
         * Método auxiliar para definir asociaciones.
         * Este método no forma parte del ciclo de vida de Sequelize.
         * El archivo `models/index` llamará a este método automáticamente.
         */
        static associate(models) {
            // Definir asociación aquí.
            this.belongsTo(models.Usuario, { foreignKey: 'UsuarioId' })
        }
    }
    Empleado.init(
        {
            nombre: DataTypes.STRING,
            apellido: DataTypes.STRING,
            dui: {
                type: DataTypes.STRING(9),
                primaryKey: true,
                allowNull: false,
            },
            telefono: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Empleado',
            tableName: 'Empleados',
        }
    )
    return Empleado
}