'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration}*/
module.exports = {
    async up(queryInterface, Sequelize) {
        let ubicacion = []
        for (let i = 0; i < 30; i++) {
            ubicacion = [
                ...ubicacion,
                {
                    nombre: faker.lorem.word(),
                    departamento: faker.address.state(),
                    municipio: faker.address.city(),
                    coordenada: faker.address.latitude(),
                    alertumId: i+1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }

        await queryInterface.bulkInsert('Ubicacions', ubicacion, {})
    },
}
