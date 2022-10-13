'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ubicacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      alertumId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
              tableName: 'alerta',
          },
          key: 'id',
      },
        allowNull: false,
      },
        departamento: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          },
          municipio: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            
          },
      coordenada: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ubicacions');
  }
};