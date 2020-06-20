'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'avaliacao', [{
          usuario_id: 1,
          jogo_id: 1,
          avaliacao: 5
        },
        {
          usuario_id: 1,
          jogo_id: 8,
          avaliacao: 1
        },
        {
          usuario_id: 1,
          jogo_id: 9,
          avaliacao: 4
        },
        {
          usuario_id: 1,
          jogo_id: 10,
          avaliacao: 2
        },
        {
          usuario_id: 1,
          jogo_id: 3,
          avaliacao: 5
        },
        {
          usuario_id: 1,
          jogo_id: 2,
          avaliacao: 5
        },
        {
          usuario_id: 1,
          jogo_id: 6,
          avaliacao: 1
        },
        {
          usuario_id: 1,
          jogo_id: 5,
          avaliacao: 1
        },
        {
          usuario_id: 1,
          jogo_id: 4,
          avaliacao: 5
        },
        {
          usuario_id: 2,
          jogo_id: 1,
          avaliacao: 4
        }, {
          usuario_id: 3,
          jogo_id: 1,
          avaliacao: 4
        }, {
          usuario_id: 4,
          jogo_id: 8,
          avaliacao: 1
        },
        {
          usuario_id: 6,
          jogo_id: 3,
          avaliacao: 3
        },
        {
          usuario_id: 7,
          jogo_id: 4,
          avaliacao: 3
        },
        {
          usuario_id: 8,
          jogo_id: 5,
          avaliacao: 1
        },
        {
          usuario_id: 9,
          jogo_id: 6,
          avaliacao: 4
        },
        {
          usuario_id: 10,
          jogo_id: 7,
          avaliacao: 2
        },
        {
          usuario_id: 4,
          jogo_id: 1,
          avaliacao: 5
        },
        {
          usuario_id: 2,
          jogo_id: 2,
          avaliacao: 5
        },
        {
          usuario_id: 2,
          jogo_id: 3,
          avaliacao: 5
        },
        {
          usuario_id: 3,
          jogo_id: 4,
          avaliacao: 5
        },
        {
          usuario_id: 9,
          jogo_id: 5,
          avaliacao: 5
        },
        {
          usuario_id: 3,
          jogo_id: 6,
          avaliacao: 5
        },
        {
          usuario_id: 7,
          jogo_id: 7,
          avaliacao: 3
        },
        {
          usuario_id: 3,
          jogo_id: 8,
          avaliacao: 3
        },
        {
          usuario_id: 4,
          jogo_id: 9,
          avaliacao: 3
        },
        {
          usuario_id: 4,
          jogo_id: 10,
          avaliacao: 5
        },
        {
          usuario_id: 5,
          jogo_id: 1,
          avaliacao: 5
        },
        {
          usuario_id: 6,
          jogo_id: 1,
          avaliacao: 2
        },
        {
          usuario_id: 7,
          jogo_id: 1,
          avaliacao: 1
        },
        {
          usuario_id: 8,
          jogo_id: 1,
          avaliacao: 2
        },
        {
          usuario_id: 9,
          jogo_id: 1,
          avaliacao: 3
        },
        {
          usuario_id: 10,
          jogo_id: 1,
          avaliacao: 2
        },
        {
          usuario_id: 2,
          jogo_id: 8,
          avaliacao: 5
        },
        {
          usuario_id: 3,
          jogo_id: 2,
          avaliacao: 3
        },
        {
          usuario_id: 3,
          jogo_id: 3,
          avaliacao: 1
        },
        {
          usuario_id: 5,
          jogo_id: 3,
          avaliacao: 5
        },
        {
          usuario_id: 3,
          jogo_id: 5,
          avaliacao: 4
        },
        {
          usuario_id: 4,
          jogo_id: 4,
          avaliacao: 4
        },
        {
          usuario_id: 4,
          jogo_id: 3,
          avaliacao: 1
        },
        {
          usuario_id: 6,
          jogo_id: 2,
          avaliacao: 2
        },
        {
          usuario_id: 5,
          jogo_id: 4,
          avaliacao: 4
        },
        {
          usuario_id: 5,
          jogo_id: 6,
          avaliacao: 5
        },
        {
          usuario_id: 5,
          jogo_id: 5,
          avaliacao: 3
        },
        {
          usuario_id: 6,
          jogo_id: 5,
          avaliacao: 4
        },
        {
          usuario_id: 4,
          jogo_id: 5,
          avaliacao: 5
        },
        {
          usuario_id: 7,
          jogo_id: 5,
          avaliacao: 1
        },
        {
          usuario_id: 7,
          jogo_id: 6,
          avaliacao: 5
        },
        {
          usuario_id: 8,
          jogo_id: 2,
          avaliacao: 2
        },
        {
          usuario_id: 8,
          jogo_id: 6,
          avaliacao: 4
        },
        {
          usuario_id: 4,
          jogo_id: 6,
          avaliacao: 2
        },
        {
          usuario_id: 8,
          jogo_id: 7,
          avaliacao: 3
        },
        {
          usuario_id: 9,
          jogo_id: 7,
          avaliacao: 5
        },
        {
          usuario_id: 4,
          jogo_id: 7,
          avaliacao: 3
        },
        {
          usuario_id: 9,
          jogo_id: 3,
          avaliacao: 3
        },
        {
          usuario_id: 6,
          jogo_id: 7,
          avaliacao: 3
        },
        {
          usuario_id: 10,
          jogo_id: 8,
          avaliacao: 4
        },
        {
          usuario_id: 5,
          jogo_id: 8,
          avaliacao: 1
        },
        {
          usuario_id: 9,
          jogo_id: 8,
          avaliacao: 3
        },
        {
          usuario_id: 10,
          jogo_id: 9,
          avaliacao: 2
        },
        {
          usuario_id: 3,
          jogo_id: 9,
          avaliacao: 1
        },
        {
          usuario_id: 3,
          jogo_id: 7,
          avaliacao: 5
        },
        {
          usuario_id: 7,
          jogo_id: 9,
          avaliacao: 3
        },
        {
          usuario_id: 5,
          jogo_id: 9,
          avaliacao: 5
        },
        {
          usuario_id: 7,
          jogo_id: 10,
          avaliacao: 5
        },
        {
          usuario_id: 5,
          jogo_id: 10,
          avaliacao: 5
        },
        {
          usuario_id: 6,
          jogo_id: 10,
          avaliacao: 4
        },
        {
          usuario_id: 10,
          jogo_id: 5,
          avaliacao: 5
        },
        {
          usuario_id: 2,
          jogo_id: 10,
          avaliacao: 3
        },
        {
          usuario_id: 9,
          jogo_id: 10,
          avaliacao: 5
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('avaliacao', null, {});
  }
};