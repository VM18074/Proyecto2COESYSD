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
        let alerta = []
        for (let i = 0; i < 30; i++) {
            alerta = [
                ...alerta,
                {
                    nombre: faker.lorem.word(),
                    descripcion: faker.lorem.paragraph(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }
        await queryInterface.bulkInsert('Alerta', alerta, {})
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


