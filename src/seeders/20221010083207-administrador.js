'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        let admins = []
        for (let i = 1; i <= 30; i++) {
            admins = [
                ...admins,
                {
                    nombre: faker.name.firstName(),
                    apellido: faker.name.lastName(),
                    dui: faker.datatype.number({ min: 100000000, max: 900000000 }).toString(),
                    telefono: faker.datatype.number({ min: 10000000, max: 90000000 }).toString(),
                    UsuarioId: i,

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }
        await queryInterface.bulkInsert('Administradores', admins, {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}