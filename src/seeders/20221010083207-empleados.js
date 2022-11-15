'use strict'
const { faker } = require('@faker-js/faker')

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

        let user1 = []
        let user2 = []
        let user3 = []
        let user4 = []
        let userP = []
        let userA = []
        user1 = [
            ...user1,
            {
                nombre: "Jefferson Alberto",
                apellido: "Arevalo Serrano",
                dui: "060854961",
                telefono: "74758621",
                UsuarioId: 1,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        user2 = [
            ...user2,
            {
                nombre: "Willian Alexander",
                apellido: "Chávez Servellón",
                dui: "062068549",
                telefono: "71589632",
                UsuarioId: 2,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        user3 = [
            ...user3,
            {
                nombre: "Jhostin Andoni",
                apellido: "Montalvo Paz",
                dui: "025684941",
                telefono: "68534852",
                UsuarioId: 3,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        user4 = [
            ...user4,
            {
                nombre: "Silvia Raquel",
                apellido: "Pérez Barriere",
                dui: "026028949",
                telefono: "64288675",
                UsuarioId: 4,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        userA = [
            ...userA,
            {
                nombre: "Admin",
                apellido: "Admin",
                dui: "000000000",
                telefono: "88888888",
                UsuarioId: 5,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        userP = [
            ...userP,
            {
                nombre: "Personal",
                apellido: "Personal",
                dui: "111111111",
                telefono: "77777777",
                UsuarioId: 6,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]



        await queryInterface.bulkInsert('Empleados', user1, {})
        await queryInterface.bulkInsert('Empleados', user2, {})
        await queryInterface.bulkInsert('Empleados', user3, {})
        await queryInterface.bulkInsert('Empleados', user4, {})
        await queryInterface.bulkInsert('Empleados', userA, {})
        await queryInterface.bulkInsert('Empleados', userP, {})
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