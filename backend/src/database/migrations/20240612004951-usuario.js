'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_usuario',
          key: 'id'
        }
      }
      
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario')
  }
};
