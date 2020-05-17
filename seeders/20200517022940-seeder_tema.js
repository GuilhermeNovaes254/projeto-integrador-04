'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tema', [
        {
          nome:'Aventura',
        },{
          nome:'Civilização',
        },{
          nome:'Cultura Oriental',
        },{
          nome:'Cultura Pop',
        },{
          nome:'Fantasia',
        },{
          nome:'Faroeste',
        },{
          nome:'Ficção Científica',
        },{
          nome:'Guerra',
        },{
          nome:'História',
        },{
          nome:'Horror',
        },{
          nome:'Medieval',
        },{
          nome:'Mitologia',
        },{
          nome:'Luta',
        },{
          nome:'Policial',
        },{
          nome:'Política',
        },

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tema', null, {})
  }
};