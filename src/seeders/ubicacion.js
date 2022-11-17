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
                nombre: 'Actividad del volcán Chaparrastique',
                departamento: 'San Miguel',
                municipio: 'San Jorge',
                coordenadax: 13.431817822983321,
                coordenaday: -88.27171325683595,
                alertumId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Tormenta Tropical',
                departamento: 'San Vicente',
                municipio: 'San Ildefonso',
                coordenadax: 13.7,
                coordenaday: -88.5667,
                alertumId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'San Salvador',
                municipio: 'Ilopango',
                coordenadax: 13.7,
                coordenaday: -89.1167,
                alertumId: 12,
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
                coordenadax: 13.6667,
                coordenaday: -88.7667,
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
                municipio: 'Ilopango',
                coordenadax: 13.7,
                coordenaday: -89.1167,
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
                coordenadax: 13.8667,
                coordenaday: -88.6167,
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
                coordenadax: 13.4883,
                coordenaday: -89.3206,
                alertumId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'La Libertad',
                municipio: 'Comasagua',
                coordenadax: 13.6333,
                coordenaday: -89.3833,
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
                coordenadax: 13.7105,
                coordenaday: -89.1405,
                alertumId: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Sismo',
                departamento: 'La Unión',
                municipio: 'El Carmen',
                coordenadax: 13.35,
                coordenaday: -88.0000,
                alertumId: 19,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]


        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Huracan',
                departamento: 'Ahuachapán',
                municipio: 'San Pedro Puxtla',
                coordenadax: 13.7667,
                coordenaday: -89.8,
                alertumId: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ] 


        await queryInterface.bulkInsert('Ubicacions', ubicacion, {})
    },
}