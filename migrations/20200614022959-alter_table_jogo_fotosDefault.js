'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'foto', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'not-found-image.jpg'
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