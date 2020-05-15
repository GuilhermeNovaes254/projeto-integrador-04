'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comentario', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        texto: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuario',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        jogo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'jogo',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comentario');
  }
};