'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration}*/
module.exports = {
    async up(queryInterface, Sequelize) {
        let ubicacion = []
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
                    coordenada: faker.address.latitude(),
                    alertumId: i + 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }

        await queryInterface.bulkInsert('Ubicacions', ubicacion, {})
    },
}