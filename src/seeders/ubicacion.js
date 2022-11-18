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
                nombre: 'Tormenta Tropical BONNIE',
                departamento: 'Ahuachapán',
                municipio: 'San Francisco Menéndez',
                coordenadax: 13.84306,
                coordenaday: -90.01583,
                alertumId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Remanentes del huracán IOTA',
                departamento: 'La Libertad',
                municipio: 'Ciudad Arce',
                coordenadax: 13.821964277009211,
                coordenaday: -89.43145751953126,
                alertumId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Desbordamiento de ríos',
                departamento: 'San Vicente',
                municipio: 'Tecoluca',
                coordenadax: 13.536407118538918,
                coordenaday: -88.78137588500977,
                alertumId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Alta susceptibilidad y saturación de humedad en los suelos',
                departamento: 'Chalatenango',
                municipio: 'La Palma',
                coordenadax: 14.31682066429945,
                coordenaday: -89.17066097259523,
                alertumId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Alta susceptibilidad y saturación de humedad en los suelos',
                departamento: 'Cuscatlán',
                municipio: 'Suchitoto',
                coordenadax: 13.936346267766117,
                coordenaday: -89.02663707733156,
                alertumId: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Circulación ciclónica y paso de ondas tropicales',
                departamento: 'Santa Ana',
                municipio: 'Texistepeque',
                coordenadax: 14.123251866857332,
                coordenaday: -89.49771881103517,
                alertumId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Circulación ciclónica y paso de ondas tropicales',
                departamento: 'San Salvador',
                municipio: 'San Salvador',
                coordenadax: 13.692576,
                coordenaday: -89.222032,
                alertumId: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Cierre en carretera los Chorros por derrumbes',
                departamento: 'La Libertad',
                municipio: 'Santa Tecla',
                coordenadax: 13.699983,
                coordenaday: -89.330776,
                alertumId: 9,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ubicacion = [
            ...ubicacion,
            {
                nombre: 'Ondas Tropicales',
                departamento: 'Morazán',
                municipio: 'San Francisco Gotera',
                coordenadax: 13.695403155562307,
                coordenaday:  -88.10339927673341,
                alertumId: 10,
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