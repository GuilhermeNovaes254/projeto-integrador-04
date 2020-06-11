'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'usuario', 'video', {
          type: Sequelize.STRING(500),
          allowNull: true
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuario', 'video');
  }
};