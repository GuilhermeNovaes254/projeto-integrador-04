'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario', [
        {
          nome:'Guilherme Novaes',
          email:'guilherme.novaes@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          cargo: 2,
          aprovado: 1,
          cidade_id:5409,
          cidade_estado_id:26,
          apelido: 'GuiNovaes',
          foto: 'default_adm.jpg',
          fotoTema: 'dom.maksoud-12.jpg'
        },{
          nome:'usuariopadrao',
          email:'usuario@email.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          cargo: 0,
          aprovado: 1,
          cidade_id:2176,
          cidade_estado_id:11,
          apelido: 'User00',
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg'
        },{
          nome:'moderador',
          email:'moderador@email.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          cargo: 0,
          aprovado: 1,
          cidade_id:5409,
          cidade_estado_id:26,
          apelido: 'Mod00',
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg'
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {})
  }
};