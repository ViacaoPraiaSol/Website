'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vaga_candidato', {
      vaga_id:{
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'vaga',
          key: 'id'
        }
      },
      usuario_externo_id:{
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuario_externo',
          key: 'id'
        }
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vaga_candidato')
  }
};
