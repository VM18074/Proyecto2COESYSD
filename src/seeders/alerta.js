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
        let alerta = []
        const niveles = ['verde', 'amarilla', 'roja']
        for (let i = 0; i < 15; i++) {
            alerta = [
                ...alerta,
                {
                    nombre: faker.lorem.word(),
                    descripcion: faker.lorem.paragraph().substring(0, 100),
                    nivelAlerta: niveles[Math.floor(Math.random() * 3)], // Numero random entre 0,1 y 2.
                    activo: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }

        let alertano = []
        for (let i = 15; i < 30; i++) {
            alertano = [
                ...alertano,
                {
                    nombre: faker.lorem.word(),
                    descripcion: faker.lorem.paragraph().substring(0, 100),
                    nivelAlerta: niveles[Math.floor(Math.random() * 3)], // Numero random entre 0,1 y 2.
                    activo: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }
        await queryInterface.bulkInsert('Alerta', alerta, {})
        await queryInterface.bulkInsert('Alerta', alertano, {})
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