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
                 email:'relaciones.publicas@cruzrojasal.org.sv',
                 createdAt: new Date(),
                 updatedAt: new Date(),
             },
         ]
     
         inst = [
             ...inst,
             {
                 name: 'Cuerpo de Bomberos',
                 direccion:'Bo Sta Anita Cl Francisco Menéndez No 552 San Salvador - San Salvador.',
                 email: 'info@patronatocbes.org',

                 createdAt: new Date(),
                 updatedAt: new Date(),
             },
         ]

         inst = [
             ...inst,
             {
                 name:'Proteccion Civil de El Salvador',
                 direccion: 'Novena Calle Poniente y Quince Avenida Norte, Centro de Gobierno, San Salvador.',
                 email: 'prensa@proteccioncivil.gob.sv',

                 createdAt: new Date(),
                 updatedAt: new Date(),
             },
         ]

         inst = [
             ...inst,
             {
                 name:'Cruz Verde' ,
                 direccion:'Avenida Bernal y Calle Constitución, Colonia Satélite, Casa #19, San Salvador, El Salvador' ,
                 email: 'info@cruzverdesv.org',

                 createdAt: new Date(),
                 updatedAt: new Date(),
             },
         ]

         inst = [
             ...inst,
             {
                 name:'Proteccion Civil de El Salvador' ,
                 direccion:'Novena Calle Poniente y Quince Avenida Norte, Centro de Gobierno, San Salvador.' ,
                 email: 'prensa@proteccioncivil.gob.sv',

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
