'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jogo', 'corTema', {
          type: Sequelize.STRING(30),
          allowNull: true
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('jogo', 'corTema');
  }
};