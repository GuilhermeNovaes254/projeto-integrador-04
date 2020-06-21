'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'usuario', 'corTema', {
          type: Sequelize.STRING(30),
          allowNull: true
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuario', 'corTema');
  }
};
