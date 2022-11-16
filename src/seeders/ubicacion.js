'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration}*/
module.exports = {
    async up(queryInterface, Sequelize) {
        let ubicacion = []
        let y=-88.720093;
        const departamentos = [
            'Ahuachapán',
            'Cabañas',
            'Chalatenango',
            'Cuscatlán',
            'La Libertad',
            'La Paz',
            'La Unión',
            'Morazán',
            'San Miguel',
            'San Salvador',
            'San Vicente',
            'Santa Ana',
            'Sonsonate',
            'Usulután',
        ]
        for (let i = 0; i < 30; i++) {
            ubicacion = [
                ...ubicacion,
                {
                    nombre: faker.lorem.word(),
                    departamento: departamentos[Math.floor(Math.random() * 14)],
                    municipio: faker.address.city(),
                    coordenadax: 13.682016,
                    coordenaday: y,
                    alertumId: i + 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
            y=y-0.10;
        }

        await queryInterface.bulkInsert('Ubicacions', ubicacion, {})
    },
}