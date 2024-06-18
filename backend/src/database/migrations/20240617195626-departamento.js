'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('departamento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,       
      },
      nome_departamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      area_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'area',
          key: 'id'
        }        
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('departamento')
  }
};
