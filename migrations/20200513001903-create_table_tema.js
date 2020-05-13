'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tema',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
          unique: true
      },
      nome: {
          type: Sequelize.STRING(80),
          allowNull: true
      }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tema');
  }
};
