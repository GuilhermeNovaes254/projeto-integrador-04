'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'foto', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'./images/icons/PerfilVermelho.png'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'foto', {
        type: Sequelize.STRING(1000),
        allowNull: true
      });
  }
};