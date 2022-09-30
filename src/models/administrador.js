'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Administrador extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Usuario, { foreignKey: 'UsuarioId' })
        }
    }
    Administrador.init(
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
            modelName: 'Administrador',
            tableName: 'Administradores',
        }
    )
    return Administrador
}
