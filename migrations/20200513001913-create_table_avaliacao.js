'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'avaliacao',
      { 
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      jogo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jogo',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      avaliacao: {
        type: Sequelize.DECIMAL,
        default: 0
      }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('avaliacao');
  }
};
