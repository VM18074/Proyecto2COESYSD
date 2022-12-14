'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Empleados', {
            nombre: {
                type: Sequelize.STRING,
            },
            apellido: {
                type: Sequelize.STRING,
            },
            dui: {
                type: Sequelize.STRING(9),

                allowNull: false,
                primaryKey: true,
            },
            telefono: {
                type: Sequelize.STRING,
            },

            UsuarioId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'usuarios',
                    },
                    key: 'id',
                },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Empleados')
    },
}