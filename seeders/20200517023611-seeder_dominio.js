'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'dominio', [
        {
          nome:'Jogos 4X',
        },{
          nome:'Jogos Abstratos',
        },{
          nome:'Jogos Colecionáveis',
        },{
          nome:'Jogos Cooperativos',
        },{
          nome:'Jogos de Cartas',
        },{
          nome:'Jogos de Guerra',
        },{
          nome:'Jogos de Miniaturas',
        },{
          nome:'Jogos em Tempo Real',
        },{
          nome:'Jogos Estratégicos',
        },{
          nome:'Jogos Expert',
        },{
          nome:'Jogos Familiares',
        },{
          nome:'Jogos Festivos',
        },{
          nome:'Jogos Legacy',
        },{
          nome:'Jogos Temáticos',
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dominio', null, {})
  }
};