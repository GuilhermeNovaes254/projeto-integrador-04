'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'usuario', 'fotoTema', {
        type: Sequelize.STRING(500),
        allowNull: true,
        default:'ProfileDefaultTema.jpg'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'usuario', 'fotoTema', {
        type: Sequelize.STRING(500),
        allowNull: true
      });
  }
};