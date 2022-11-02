'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
        let dano = []
        for (let i = 0; i < 30; i++) {
            dano = [
                ...dano,
                {
                    nombre: faker.lorem.word(),
                    descripcion: faker.lorem.paragraph().substring(0, 100),
                    alertumId: i+1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }

        await queryInterface.bulkInsert('daños', dano, {})
    },
}