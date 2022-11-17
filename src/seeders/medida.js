'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let medida = []
        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil',
                descripcion:'Envio de 15 personas del cuerpo de Protccion Civil',
                alertumId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil',
                descripcion:'Envio de 18 personas del cuerpo de Protccion Civil',
                alertumId:12,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil',
                descripcion:'Envio de 10 personas del cuerpo de Protccion Civil',
                alertumId: 13,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil, PNC y Cruz Roja',
                descripcion:'Envio de 30 personas de ambas intituciones',
                alertumId: 14,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil y PNC',
                descripcion:'Envio de 20 personas de ambas instituciones ',
                alertumId: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil y Guardia Costera',
                descripcion:'Envio de cuerpo de Protccion Civi  Guardia Costera para evacuar habitantes',
                alertumId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil y PCN',
                descripcion:'Envio de cuerpo de Protccion Civil y PNC para limpiar la zona',
                alertumId: 17,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil, PNC y Cruz Roja',
                descripcion:'Envio de personal para desalojar y albergar civiles en esa zona',
                alertumId: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil, PNC y Cruz Roja',
                descripcion:'Envio de personal encontrar los cuerpos de las victimas',
                alertumId: 19,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Envio de cuerpo de Protccion Civil',
                descripcion:'Envio de 10 personas del cuerpo de Protccion Civil',
                alertumId: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        await queryInterface.bulkInsert('Medidas', medida, {})
    },
}