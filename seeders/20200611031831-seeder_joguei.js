'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'joguei', [{
          usuario_id:1,
          jogo_id:1
        },{
          usuario_id:1,
          jogo_id:2
        },{
          usuario_id:1,
          jogo_id:3
        }], {});
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('joguei', null, {});
  }
};
