'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'foto', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'GameDefault.png'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'foto', {
        type: Sequelize.STRING(500),
        allowNull: true
      });
  }
};