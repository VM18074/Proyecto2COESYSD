'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Agregue comandos semilla aquí.
         *
         * Ejemplo:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         *
         *
         */
        let roles = [
            {
                nombre: 'administrador',

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        await queryInterface.bulkInsert('Roles', roles, {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Agregue comandos para revertir la semilla aquí.
         *
         * Ejemplo:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}