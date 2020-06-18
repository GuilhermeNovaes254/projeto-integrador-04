'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'jogo', 'fotoTema', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'GameDefaultTema.png'
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