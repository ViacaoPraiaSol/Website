'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('empresa',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,       
      },
      nome_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      consorcio: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('empresa')
  }
};
