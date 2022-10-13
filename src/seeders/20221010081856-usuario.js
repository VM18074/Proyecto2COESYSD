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
        let users = []
        let admins = []
        for (let i = 0; i < 15; i++) {
            admins = [
                ...admins,
                {
                    nombre: faker.internet.userName(),
                    email: faker.internet.email().toLowerCase(),
                    password: faker.internet.password(),
                    RolNombre: 'administrador',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }
        for (let i = 15; i < 30; i++) {
            users = [
                ...users,
                {
                    nombre: faker.internet.userName(),
                    email: faker.internet.email().toLowerCase(),
                    password: faker.internet.password(),
                    RolNombre: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }
        await queryInterface.bulkInsert('Usuarios', admins, {})
        await queryInterface.bulkInsert('Usuarios', users, {})
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
