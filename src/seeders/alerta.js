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
        alerta = [
            ...alerta,
            {
                id: 1,
                nombre:'Actividad del volcán Chaparrastique',
                descripcion: 'Se han registrado leves explosiones, emanaciones de gases y vapor de agua en los alrededores del volcán',
                nivelAlerta: niveles[1], // Numero random entre 0,1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        
        alerta = [
            ...alerta,
            {
                id: 2,
                nombre:'Tormenta Tropical BONNIE',
                descripcion: 'Las condiciones climáticas son de alto riesgo, con altas condiciones de oleaje fuerte en el país',
                nivelAlerta: niveles[2], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 3,
                nombre:'Remanentes del huracán IOTA',
                descripcion: 'Indica que el sistema de baja presión ha dejado de influenciar las condiciones atmosféricas del país.',
                nivelAlerta: niveles[0], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 4,
                nombre:'Desbordamiento de ríos',
                descripcion: 'Afectaciones graves por deslizamientos, acumulación de humedad en los suelos e inundaciones',
                nivelAlerta: niveles[2], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 5,
                nombre:'Alta susceptibilidad y saturación de humedad en los suelos',
                descripcion: 'Medidas preventivas contra las quebradas, canales o cualquier corriente de agua',
                nivelAlerta: niveles[0], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 6,
                nombre:'Amenaza ante incendios forestales y en maleza seca',
                descripcion: 'Destrucción hacia el ecosistema y medio ambiente teniendo una perdida de su flora y fauna',
                nivelAlerta: niveles[1], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 7,
                nombre:'Circulación ciclónica y paso de ondas tropicales',
                descripcion: 'Condiciones atmosféricas por lluvias de diferentes intensidades',
                nivelAlerta: niveles[1], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 8,
                nombre:'Colapso de bóveda',
                descripcion: 'Hundimiento senda 2',
                nivelAlerta: niveles[2], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        alerta = [
            ...alerta,
            {
                id: 9,
                nombre:'Cierre en carretera los Chorros por derrumbe',
                descripcion: 'Caída de un árbol sobre la vía en el sentido que conduce hacia Santa Tecla',
                nivelAlerta: niveles[1], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        alerta = [
            ...alerta,
            {
                id: 10,
                nombre:'Ondas Tropicales',
                descripcion: 'Alerta verde para el resto de país por incidencia de ondas tropicales',
                nivelAlerta: niveles[0], // Numero random entre 0, 1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        alerta = [
            ...alerta,
            {
                id: 11,
                nombre:'Julia',
                descripcion: 'Tormentra Tropical',
                nivelAlerta: niveles[1], // Numero random entre 0,1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
    
        alerta = [
            ...alerta,
            {
                id: 12,
                nombre:'Julia',
                descripcion: 'Tormentra Tropical',
                nivelAlerta: niveles[1], // Numero random entre 0,1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 13,
                nombre:'Sismo',
                descripcion: 'Temblor en zona de occidene',
                nivelAlerta: niveles[0], // Numero random entre 0,1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 14,
                nombre:'Lisa',
                descripcion: 'Huracan',
                nivelAlerta: niveles[2], // Numero random entre 0,1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alerta = [
            ...alerta,
            {
                id: 15,
                nombre:'Lisa',
                descripcion: 'Huracan',
                nivelAlerta: niveles[2], // Numero random entre 0,1 y 2.
                activo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
    let alertano = []
   
        alertano = [
            ...alertano,
            {
                id: 16,
                nombre: 'Bonie',
                descripcion:'Hurcan',
                nivelAlerta: niveles[2], // Numero random entre 0,1 y 2.
                activo: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alertano = [
            ...alertano,
            {
                id: 17,
                nombre: 'Bonie',
                descripcion:'Hurcan',
                nivelAlerta: niveles[2], // Numero random entre 0,1 y 2.
                activo: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alertano = [
            ...alertano,
            {
                id: 18,
                nombre: 'Amanda',
                descripcion:'Tormenta Tropical',
                nivelAlerta: niveles[1], // Numero random entre 0,1 y 2.
                activo: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alertano = [
            ...alertano,
            {
                id: 19,
                nombre: 'Amanda',
                descripcion:'Tormenta Tropical',
                nivelAlerta: niveles[1], // Numero random entre 0,1 y 2.
                activo: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        alertano = [
            ...alertano,
            {
                id: 20,
                nombre: 'Karl',
                descripcion:'Hurcan',
                nivelAlerta: niveles[2],
                activo: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
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