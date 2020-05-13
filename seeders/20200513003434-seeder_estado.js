'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'estado', [
        {
          id: '1',
          sigla: 'AC'
        },
        {
          id: '2',
          sigla: 'AL'
        },
        {
          id: '3',
          sigla: 'AM'
        },
        {
          id: '4',
          sigla: 'AP'
        },
        {
          id: '5',
          sigla: 'BA'
        },
        {
          id: '6',
          sigla: 'CE'
        },
        {
          id: '7',
          sigla: 'DF'
        },
        {
          id: '8',
          sigla: 'ES'
        },
        {
          id: '9',
          sigla: 'GO'
        },
        {
          id: '10',
          sigla: 'MA'
        },
        {
          id: '11',
          sigla: 'MG'
        },
        {
          id: '12',
          sigla: 'MS'
        },
        {
          id: '13',
          sigla: 'MT'
        },
        {
          id: '14',
          sigla: 'PA'
        },
        {
          id: '15',
          sigla: 'PB'
        },
        {
          id: '16',
          sigla: 'PE'
        },
        {
          id: '17',
          sigla: 'PI'
        },
        {
          id: '18',
          sigla: 'PR'
        },
        {
          id: '19',
          sigla: 'RJ'
        },
        {
          id: '20',
          sigla: 'RN'
        },
        {
          id: '21',
          sigla: 'RS'
        },
        {
          id: '22',
          sigla: 'RO'
        },
        {
          id: '23',
          sigla: 'RR'
        },
        {
          id: '24',
          sigla: 'SC'
        },
        {
          id: '25',
          sigla: 'SE'
        },
        {
          id: '26',
          sigla: 'SP'
        },
        {
          id: '27',
          sigla: 'TO'
        },


      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estado', null, {})
  }
};