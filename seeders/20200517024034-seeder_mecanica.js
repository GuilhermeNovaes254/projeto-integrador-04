'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'mecanica', [
        {
          nome:'Coleção de Componentes',
        },{
          nome:'Colecionar Cartas',
        },{
          nome:'Compra de Cartas',
        },{
          nome:'Construção de Baralho',
        },{
          nome:'Controle de Área',
        },{
          nome:'Rolagem de Dados',
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mecanica', null, {})
  }
};