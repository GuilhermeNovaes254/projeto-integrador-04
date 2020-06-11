'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'colecao', [{
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
