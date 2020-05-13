'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'cidade',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
          unique: true
      },
      cidade: {
          type: Sequelize.STRING(200),
          allowNull: false
      },
      estado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estado',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cidade');
  }
};
