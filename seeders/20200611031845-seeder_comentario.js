'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comentario', [{
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.',
        data: '2001-01-01 01:00:00',
        usuario_id: 1,
        jogo_id: 1,
      }, {
        texto: 'Admodum accumsan disputationi eu sit',
        data: '2020-01-01 01:00:00',
        usuario_id: 2,
        jogo_id: 1,
      }, {
        texto: 'Mussum Ipsum, Admodum accumsan disputationi eu sit.',
        data: '1988-01-01 00:20:00',
        usuario_id: 1,
        jogo_id: 1,
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