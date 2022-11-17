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
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Tormenta Tropical',
                departamento: 'San Vicente',
                municipio: 'San Ildefonso',
                coordenadax: 13.682016,
                coordenaday: -18.839374,
                alertumId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Tormenta Tropical',
                departamento: 'San Vicente',
                municipio: 'Apastepeque',
                coordenadax: 23.728283,
                coordenaday: -13.727382,
                alertumId: 12,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Sismo',
                departamento: 'San Miguel',
                municipio: 'El Carmen',
                coordenadax: 17.764738,
                coordenaday: -12.654637,
                alertumId: 13,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'San Salvador',
                municipio: 'Santa Lucia',
                coordenadax: 13.682016,
                coordenaday: -18.839374,
                alertumId: 14,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ] 

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'Cabañas',
                municipio: 'Sensuntepeque',
                coordenadax: 12.374838,
                coordenaday: -17.736473,
                alertumId: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'La Libertad',
                municipio: 'Puerto de la Libertad',
                coordenadax: 13.682016,
                coordenaday: -18.839374,
                alertumId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'San Salvador',
                municipio: 'Comasagua',
                coordenadax: 18.736438,
                coordenaday: -20.933782,
                alertumId: 17,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Tormenta Tropical',
                departamento: 'San Salvador',
                municipio: 'Soyapango',
                coordenadax: 11.263782,
                coordenaday: -15.747839,
                alertumId: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Tormenta Tropical',
                departamento: 'San Salvador',
                municipio: 'Santa Lucia',
                coordenadax: 13.645383,
                coordenaday: -18.758483,
                alertumId: 19,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'Sonsonate',
                municipio: 'Rio San Pedro',
                coordenadax: 13.682016,
                coordenaday: -18.839374,
                alertumId: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        await queryInterface.bulkInsert('Ubicacions', ubicacion, {})
    },
}