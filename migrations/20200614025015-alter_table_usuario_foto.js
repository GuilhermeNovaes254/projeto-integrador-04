'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'usuario', 'foto', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'ProfileDefault.png'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'usuario', 'foto', {
        type: Sequelize.STRING(500),
        allowNull: true
      });
  }
};