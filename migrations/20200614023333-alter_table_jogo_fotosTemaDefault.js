'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'fotoTema', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'h1.jpg'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'fotoTema', {
        type: Sequelize.STRING(500),
        allowNull: true
      });
  }
};