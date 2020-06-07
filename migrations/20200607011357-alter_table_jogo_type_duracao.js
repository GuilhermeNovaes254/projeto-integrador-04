'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'duracao', {
          type: Sequelize.INTEGER,
          allowNull: true
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'duracao', {
          type: Sequelize.TINYINT(3),
          allowNull: true
      });
  }
};