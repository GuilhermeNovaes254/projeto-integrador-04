'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'avaliacao', [{
        usuario_id: 1,
        jogo_id: 1,
        avaliacao: 5
      }, {
        usuario_id: 2,
        jogo_id: 1,
        avaliacao: 4
      }, {
        usuario_id: 3,
        jogo_id: 1,
        avaliacao: 4.5
      }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};