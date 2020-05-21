'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'jogo', {
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
        ano: {
          type: Sequelize.STRING(4),
          allowNull: true
        },
        descricao: {
          type: Sequelize.STRING(450),
          allowNull: false
        },
        faixaEtaria: {
          type: Sequelize.TINYINT(2),
          allowNull: false
        },
        duracao: {
          type: Sequelize.TINYINT(3),
          allowNull: true
        },
        downtime: {
          type: Sequelize.TINYINT(1),
          allowNull: true
        },
        tutorial: {
          type: Sequelize.STRING(450),
          allowNull: true
        },
        peso: {
          type: Sequelize.TINYINT(1),
          allowNull: true
        },
        regras: {
          type: Sequelize.STRING(450),
          allowNull: true
        },
        qntMax: {
          type: Sequelize.TINYINT(2),
          allowNull: true
        },
        qntMin: {
          type: Sequelize.TINYINT(2),
          allowNull: true
        },
        notaJogo: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        aprovado: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          default: 0
        },
        tema_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "tema",
            key: "id"
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'

        },
        dominio_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "dominio",
            key: "id"
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        mecanica_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "mecanica",
            key: "id"
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        foto: {
          type: Sequelize.STRING(500),
          allowNull: true
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jogo');
  }
};