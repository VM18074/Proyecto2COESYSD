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
        let inst = []
        
            inst = [
                ...inst,
                {
                    name: 'Cruz Roja',
                    direccion:'PR44+R6F, San Salvador' ,
                    email:'http://www.cruzrojasal.org.sv/',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        
            inst = [
                ...inst,
                {
                    name: 'Cuerpo de Bomberos',
                    direccion:'Bo Sta Anita Cl Francisco Menéndez No 552 San Salvador - San Salvador.',
                    email: 'http://www.bomberos.gob.sv/',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]

            inst = [
                ...inst,
                {
                    name:'Proteccion Civil de El Salvador',
                    direccion: 'Novena Calle Poniente y Quince Avenida Norte, Centro de Gobierno, San Salvador.',
                    email: 'http://proteccioncivil.gob.sv/',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]

            inst = [
                ...inst,
                {
                    name:'Cruz Verde' ,
                    direccion:'PQFJ+7PG, Calle Constitucion, Mejicanos' ,
                    email: 'http://www.cruzverdesv.org/',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]

            inst = [
                ...inst,
                {
                    name:'Proteccion Civil de El Salvador' ,
                    direccion:'Novena Calle Poniente y Quince Avenida Norte, Centro de Gobierno, San Salvador.' ,
                    email: 'http://proteccioncivil.gob.sv/',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        await queryInterface.bulkInsert('Institucion', inst, {})
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