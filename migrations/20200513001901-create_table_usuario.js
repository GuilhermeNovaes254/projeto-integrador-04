'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuario', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: true
        },
        senha: {
          type: Sequelize.STRING(256),
          allowNull: false
        },
        foto: {
          type: Sequelize.STRING(500),
          allowNull: true
        },
        descricao: {
          type: Sequelize.STRING(500),
          allowNull: true
        },
        dataDeNascimento: {
          type: Sequelize.DATE,
          allowNull: true
        },
        tipoAp: {
          type: Sequelize.TINYINT(1),
          allowNull: true
        },
        apelido: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        genero: {
          type: Sequelize.TINYINT(1),
          allowNull: true
        },
        cargo: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          default: 0
        },
        aprovado: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          default: 0
        },
        cidade_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'cidade',
            key: 'id'
          }
        },
        cidade_estado_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'cidade',
            key: 'estado_id'
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};