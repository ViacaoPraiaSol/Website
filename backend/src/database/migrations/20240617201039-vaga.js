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
        allowNull:false,
      },
      funcao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'funcao',
          key: 'id'
        }
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'empresa',
          key: 'id'
        }
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
    await queryInterface.dropTable('vaga')
  }
};
