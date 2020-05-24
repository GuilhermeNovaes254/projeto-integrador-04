'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jogo', 'fotoTema', {
          type: Sequelize.STRING(500),
          allowNull: true
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('jogo', 'fotoTema');
  }
};