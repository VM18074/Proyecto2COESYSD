'use strict'
const { faker } = require('@faker-js/faker')
const bcryptjs = require('bcryptjs') // Encriptar password en bd.
const generatePassword = require('../utils/generatePassword')

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
         */
        let usuarioP1 = []
        let usuarioA1 = []
        let usuarioP2 = []
        let usuarioA2 = []
        let usuarioA = []
        let usuarioP = []


        usuarioP1 = [...usuarioP1, {
            nombre: 'Jefferson Arevalo',
            email: 'as21004@ues.edu.sv',
            password: await bcryptjs.hash('as21004', 12),
            RolNombre: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
        usuarioA1 = [...usuarioA1, {
            nombre: 'Willian Chávez',
            email: 'cs21004@ues.edu.sv',
            password: await bcryptjs.hash('cs21004', 12),
            RolNombre: 'administrador',
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
        usuarioP2 = [...usuarioP2, {
            nombre: 'Jhostin Montalvo',
            email: 'mp21079@ues.edu.sv',
            password: await bcryptjs.hash('mp21079', 12),
            RolNombre: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
        usuarioA2 = [...usuarioA2, {
            nombre: 'Silvia Pérez',
            email: 'pb21015@ues.edu.sv',
            password: await bcryptjs.hash('pb21015', 12),
            RolNombre: 'administrador',
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
        usuarioA = [...usuarioA, {
            nombre: 'Administrador',
            email: 'admin@gmail.com',
            password: await bcryptjs.hash('admin', 12),
            RolNombre: 'administrador',
            createdAt: new Date(),
            updatedAt: new Date(),
        }]

        usuarioP = [...usuarioP, {
            nombre: 'Personal',
            email: 'personal@gmail.com',
            password: await bcryptjs.hash('personal', 12),
            RolNombre: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]

        await queryInterface.bulkInsert('Usuarios', usuarioP1, {})
        await queryInterface.bulkInsert('Usuarios', usuarioA1, {})
        await queryInterface.bulkInsert('Usuarios', usuarioP2, {})
        await queryInterface.bulkInsert('Usuarios', usuarioA2, {})
        await queryInterface.bulkInsert('Usuarios', usuarioA, {})
        await queryInterface.bulkInsert('Usuarios', usuarioP, {})

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