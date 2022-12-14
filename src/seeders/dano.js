'use strict'
const { faker } = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
        let dano = []
        dano = [
            ...dano,
            {
                nombre: 'Leves molestias a la salud de los pobladores por gases emanados',
                //descripcion: 'Impactos por actividad volcánica',
                alertumId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Caída de árboles, ramas y vallas publicitarias a causa de las fuertes ráfagas de viento',
                //descripcion: 'Daños causados por la tormenta tropical Bonnie',
                alertumId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]        
        dano = [
            ...dano,
            {
                nombre: 'Posibles riesgos de derrumbes o movimientos de ladera debido a la saturación de humedad en los suelos',
                //descripcion: 'Posibles daños debido a la saturación de humedad en los suelos',
                alertumId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'ALTA probabilidad de ocurrencia de deslizamientos y caídas de rocas, generando daños en infraestructura de caminos y viviendas en la zona norte del país.',
                //descripcion: 'Posibles daños en infraestructura',
                alertumId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Posible riesgo al transitar sobre la vía pública cuando se presenten lluvias',
                //descripcion: 'Posibles daños que se produzcan durante una tormenta',
                alertumId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]        
        dano = [
            ...dano,
            {
                nombre: 'Se interrumpen los ciclos naturales de los bosques y desaparecen las especies nativas, mientras que proliferan las plantas invasoras',
                //descripcion: 'Aumento en los niveles de dióxido de carbono en la atmósfera, contribuyendo al efecto invernadero y al cambio climático',
                alertumId: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Altas probabilidades de inundaciones urbanas, crecidas repentinas, deslizamientos y de ráfagas de viento',
                //descripcion: 'Pronóstico de amenazas por las tormentas eléctricas',
                alertumId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Daños severos en la bóveda de aguas lluvia en margen derecha y afectación de Calle residencial Brisas de San Francisco',
                //descripcion: 'Colapso en un tramo de la bóveda ubicada en la residencial Brisas de San Francisco',
                alertumId: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        dano = [
            ...dano,
            {
                nombre: 'Undimiento de calles y desprendimiento de rocas',
                //descripcion: 'Impedimento del paso vehicual y peatonal en tramo de la carretera los chorros',
                alertumId: 9,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        dano = [
            ...dano,
            {
                nombre: 'Posible ráfagas de viento fuertes, caída de árboles y pequeños deslizamientos superficiales',
                //descripcion: 'Posible ráfagas de viento fuertes con velocidad de más 100 km/h',
                alertumId: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        dano = [
            ...dano,
            {
                nombre: 'Desborde de Rio',
                //descripcion: 'Desborde de Rio Titihuapa',
                alertumId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Derrumbe',
                //descripcion: 'Derrumbe en carretera hacia Apastepeque',
                alertumId: 12,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Postes Caidos',
                //descripcion: 'Postes caidos en la zona que afectan el servicio electrico',
                alertumId: 13,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Inundacion',
                //descripcion: 'Viviendas en la zona fudren de inundaciones debido a tuberias tapadas',
                alertumId: 14,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Derrumbe',
                //descripcion: 'Derrumbre de tierra en zona montañosa de la zona ',
                alertumId: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Creciente de Mar',
                //descripcion: 'Creciente del nivel del mar en zona costera del pais ',
                alertumId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Postes Caidos',
                //descripcion: 'Postes caidos en la zona que afectan el servicio electrico',
                alertumId: 17,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Albergados',
                //descripcion: 'Casas en zona de riesgo  son sufren daños por la lluvia y se vuelven inhabitables',
                alertumId: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Muertes',
                //descripcion: 'Personas mueren ubterrados debido a derrumbe en esa zona',
                alertumId: 19,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        dano = [
            ...dano,
            {
                nombre: 'Desborde de Rio',
                //descripcion: 'Desborde de rio debido a exceso de lluvia',
                alertumId: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        await queryInterface.bulkInsert('daños', dano, {})
    },
}