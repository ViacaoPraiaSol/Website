'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vaga_publicada', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      vaga_id:{
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'vaga',
          key: 'id'
        }
      },
      data_publicada: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      qunatidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_vaga: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('vaga_publicada')
  }
};
