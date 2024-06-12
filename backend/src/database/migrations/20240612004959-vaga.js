'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vaga', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      nome_vaga: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      funcao_vaga: {
        
      },
      empresa_vaga: {
        
      },
      area_vaga: {
        
      },
      status_vaga: {

      },
      tipo_vaga_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_vaga',
          key: 'id'
        }
      },
      requisitos_vaga: {

      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vaga')
  }
};
