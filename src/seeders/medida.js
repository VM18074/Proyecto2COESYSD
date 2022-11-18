'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let medida = []
        medida = [
            ...medida,
            {
                nombre:'Gobierno de El Salvador equipa albergues preventivos ante emergencia en volcán Chaparrastique',
                descripcion:'Ministerio de Gobernación y Desarrollo Territorial ha preequipado de manera preventiva tres albergues ante la emergencia en el volcán Chaparrastique',
                alertumId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        medida = [
            ...medida,
            {
                nombre:'Se ha estado realizando actividades para poder habilitar las carreteras y garantizar la conectividad vial',
                descripcion:'La Comisión Nacional de Protección Civil proporciona sus Servicios de Emergencias e Infraestructura',
                alertumId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]        

        medida = [
            ...medida,
            {
                nombre:'Las Comisiones Municipales de Protección Civil elaboraran un Informe Final de las acciones de respuesta desarrolladas en el marco de la Alerta Verde',
                descripcion:'Dicho informe especifica los puntos de riesgo que son recurrentes y aquellos nuevos',
                alertumId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        
        medida = [
            ...medida,
            {
                nombre:'Comisiones Departamentales y Municipales de Protección Civil de San Vicente disponen de los recursos necesarios para la evacuación y habilitación de albergues.',
                descripcion:'Recursos establecidos para la población expuesta a derrumbes y/o inundaciones y las acciones de búsqueda y rescate',
                alertumId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

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