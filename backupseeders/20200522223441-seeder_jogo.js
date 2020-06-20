'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert(
    //   'jogo', [{
    //     id: 1,
    //     nome: 'Uno',
    //     descricao: 'Jogo de cartas coloridas',
    //     faixaEtaria: '+10',
    //     aprovado: 1,
    //     tema_id: 4,
    //     dominio_id: 5,
    //     mecanica_id: 3,
    //     foto:'GameDefault.png',
    //     fotoTema:'GameDefaultTema.png'
    //   }, {
    //     id: 2,
    //     nome: 'Banco Imobiliário',
    //     descricao: 'Versão Br Monopoly',
    //     faixaEtaria: '+10',
    //     aprovado: 1,
    //     tema_id: 15,
    //     dominio_id: 9,
    //     mecanica_id: 1,
    //     foto:'GameDefault.png',
    //     fotoTema:'GameDefaultTema.png'
    //   }, {
    //     id: 3,
    //     nome: 'Detetive',
    //     descricao: 'Descobrir quem é o assassino',
    //     faixaEtaria: '+10',
    //     aprovado: 1,
    //     tema_id: 5,
    //     dominio_id: 14,
    //     mecanica_id: 3,
    //     foto:'GameDefault.png',
    //     fotoTema:'GameDefaultTema.png'
    //   }], {});

  },

  down: (queryInterface, Sequelize) => {

    // return queryInterface.bulkDelete('jogo', null, {});
  }
};