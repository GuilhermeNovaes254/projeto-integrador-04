'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'estado',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
          unique: true
      },
      sigla: {
          type: Sequelize.STRING(2),
          allowNull: false
      }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estado');
  }
};
