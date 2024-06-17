'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funcao', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      nome_funcao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departamento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'departamento',
          key: 'id'
        }
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('funcao')
  }
};
