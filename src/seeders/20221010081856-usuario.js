'use strict'
const { faker } = require('@faker-js/faker')
const bcryptjs = require('bcryptjs') //Encriptar password en bd
const generatePassword = require('../utils/generatePassword')

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
        let usuarioA = []
        let usuarioP = []
        for (let i = 0; i < 15; i++) {
            admins = [
                ...admins,
                {
                    nombre: faker.internet.userName(),
                    email: faker.internet.email().toLowerCase(),
                    password: await bcryptjs.hash(faker.internet.password(), 12),
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
                    password: await bcryptjs.hash(faker.internet.password(), 12),
                    RolNombre: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }

         usuarioA = [... usuarioA,{
            nombre: 'Administrador',
            email: 'admin@gmail.com',
            password: await bcryptjs.hash('admin', 12),
            RolNombre: 'administrador',
            createdAt: new Date(),
            updatedAt: new Date(),
        }]

        usuarioP = [... usuarioP,{
            nombre: 'Personal',
            email: 'personal@gmail.com',
            password: await bcryptjs.hash('personal', 12),
            RolNombre: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
        await queryInterface.bulkInsert('Usuarios', admins, {})
        await queryInterface.bulkInsert('Usuarios', users, {})
        await queryInterface.bulkInsert('Usuarios', usuarioA, {})
        await queryInterface.bulkInsert('Usuarios', usuarioP, {})
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
