'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'favorito', [{
          usuario_id: 1,
          jogo_id: 1
        }, {
          usuario_id: 1,
          jogo_id: 2
        }, {
          usuario_id: 1,
          jogo_id: 3
        }, {
          usuario_id: 46,
          jogo_id: 7
        },
        {
          usuario_id: 27,
          jogo_id: 2
        },
        {
          usuario_id: 15,
          jogo_id: 4
        },
        {
          usuario_id: 48,
          jogo_id: 4
        },
        {
          usuario_id: 28,
          jogo_id: 4
        },
        {
          usuario_id: 7,
          jogo_id: 6
        },
        {
          usuario_id: 1,
          jogo_id: 4
        },
        {
          usuario_id: 36,
          jogo_id: 4
        },
        {
          usuario_id: 28,
          jogo_id: 5
        },
        {
          usuario_id: 29,
          jogo_id: 5
        },
        {
          usuario_id: 30,
          jogo_id: 5
        },
        {
          usuario_id: 18,
          jogo_id: 5
        },
        {
          usuario_id: 18,
          jogo_id: 5
        },
        {
          usuario_id: 3,
          jogo_id: 6
        },
        {
          usuario_id: 14,
          jogo_id: 5
        },
        {
          usuario_id: 3,
          jogo_id: 6
        },
        {
          usuario_id: 44,
          jogo_id: 6
        },
        {
          usuario_id: 26,
          jogo_id: 7
        },
        {
          usuario_id: 9,
          jogo_id: 7
        },
        {
          usuario_id: 23,
          jogo_id: 7
        },
        {
          usuario_id: 3,
          jogo_id: 8
        },
        {
          usuario_id: 31,
          jogo_id: 9
        },
        {
          usuario_id: 24,
          jogo_id: 4
        },
        {
          usuario_id: 8,
          jogo_id: 10
        },
        {
          usuario_id: 15,
          jogo_id: 10
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favorito', null, {});
  }
};