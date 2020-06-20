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
          usuario_id: 2,
          jogo_id: 7
        },
        {
          usuario_id: 2,
          jogo_id: 2
        },
        {
          usuario_id: 2,
          jogo_id: 4
        },
        {
          usuario_id: 3,
          jogo_id: 4
        },
        {
          usuario_id: 3,
          jogo_id: 3
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
          usuario_id: 4,
          jogo_id: 4
        },
        {
          usuario_id: 4,
          jogo_id: 5
        },
        {
          usuario_id: 5,
          jogo_id: 5
        },
        {
          usuario_id: 5,
          jogo_id: 7
        },
        {
          usuario_id: 6,
          jogo_id: 5
        },
        {
          usuario_id: 3,
          jogo_id: 6
        },
        {
          usuario_id: 9,
          jogo_id: 5
        },
        {
          usuario_id: 3,
          jogo_id: 5
        },
        {
          usuario_id: 10,
          jogo_id: 6
        },
        {
          usuario_id: 1,
          jogo_id: 7
        },
        {
          usuario_id: 9,
          jogo_id: 7
        },
        {
          usuario_id: 2,
          jogo_id: 3
        },
        {
          usuario_id: 3,
          jogo_id: 8
        },
        {
          usuario_id: 3,
          jogo_id: 9
        },
        {
          usuario_id: 4,
          jogo_id: 6
        },
        {
          usuario_id: 8,
          jogo_id: 10
        },
        {
          usuario_id: 9,
          jogo_id: 10
        },
        {
          usuario_id: 3,
          jogo_id: 1
        },
        {
          usuario_id: 7,
          jogo_id: 1
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favorito', null, {});
  }
};