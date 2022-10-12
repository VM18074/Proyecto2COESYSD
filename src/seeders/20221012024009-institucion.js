'use strict';
const  {faker} = require.company.companyName()
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     let inst = []
        for (let i = 1; i <= 30; i++) {
            inst = [
                ...inst,
                {
                    id: i,
                    name: faker.name.firstName(),
                    email: faker.internet.email().toLowerCase(),
                    
                    
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        }
        await queryInterface.bulkInsert('Institucion', inst, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
