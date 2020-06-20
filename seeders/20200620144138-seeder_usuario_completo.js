'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    //0 = Outros
    //1 = Feminino
    //2 = Masculino

    //2 = adm
    //1 = moderador
    //0 = normal
    return queryInterface.bulkInsert(
      'usuario', [
        {
          nome:'Guilherme Novaes',
          email:'guilherme.novaes@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Vida longa e próspera.',
          dataDeNascimento:'2000-01-15',
          tipoAp:1,
          apelido: 'GuiNovaes',
          genero:2,
          cargo: 1,
          aprovado: 1,
          cidade_id:5409,
          cidade_estado_id:26,
          foto: 'default_adm.jpg',
          fotoTema: 'wallhaven-md5z28.jpg'
        },
        {
          nome:'Daniele Lucas',
          email:'daniele@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Tudo o que você precisará quando o universo acabar é de uma toalha.',
          dataDeNascimento:'1989-11-14',
          tipoAp:1,
          apelido: 'Candy',
          genero:1,
          cargo: 2,
          aprovado: 1,
          cidade_id:5409,
          cidade_estado_id:26,
          foto: 'teste5.jpg',
          fotoTema: 'wallhaven-x15jgo.jpg'
        },
        {
          nome:'Alice Sullivan',
          email:'alice@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Palavras são, na minha tão humilde opinião, nossa inesgotável fonte de magia. Capazes de ferir e de curar.',
          dataDeNascimento:'1980-01-01',
          tipoAp:2,
          apelido: 'Alice Potter',
          genero:1,
          cargo: 0,
          aprovado: 1,
          cidade_id:25,
          cidade_estado_id:2,
          foto: 'harry_potter.jpg',
          fotoTema: 'wallhaven-qd218r.png'
        },
        {
          nome:'Natalia Silva',
          email:'natalia@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'The Winter is coming',
          dataDeNascimento:'1998-07-07',
          tipoAp:3,
          apelido: 'Naty',
          genero:1,
          cargo: 0,
          aprovado: 1,
          cidade_id:114,
          cidade_estado_id:2,
          foto: 'dany.jpg',
          fotoTema: 'wallhaven-4lq9w2.jpg'
        },
        {
          nome:'Bruna Tavares',
          email:'bruna@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Que a Força esteja com você.',
          dataDeNascimento:'1984-05-29',
          tipoAp:2,
          apelido: 'Brubis',
          genero:1,
          cargo: 0,
          aprovado: 1,
          cidade_id:157,
          cidade_estado_id:3,
          foto: 'leia.jpg',
          fotoTema: 'wallhaven-zmdzlo.jpg'
        },
        {
          nome:'Aline Oliveira',
          email:'aline@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Avante Vingadores!',
          dataDeNascimento:'1999-12-19',
          tipoAp:3,
          apelido: 'Lilica',
          genero:1,
          cargo: 0,
          aprovado: 1,
          cidade_id:162,
          cidade_estado_id:3,
          foto: 'viuva-negra.jpg',
          fotoTema: 'wallhaven-nz335w.jpg'
        },
        {
          nome:'Yuri Santos',
          email:'yurisantos@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Um mago nunca se atrasa, nem se adianta, ele chega exatamente quando pretende chegar',
          dataDeNascimento:'1979-02-26',
          tipoAp:1,
          apelido: 'Yuri',
          genero:2,
          cargo: 0,
          aprovado: 1,
          cidade_id:215,
          cidade_estado_id:5,
          foto: 'gVDsxThW_400x400.jpg',
          fotoTema: 'wallhaven-48oz71.jpg'
        },
        {
          nome:'Gabriel Maragoni',
          email:'gabriel@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Com grandes poderes, vem grandes responsabilidades',
          dataDeNascimento:'1990-09-15',
          tipoAp:2,
          apelido: 'Biel',
          genero:2,
          cargo: 0,
          aprovado: 1,
          cidade_id:247,
          cidade_estado_id:5,
          foto: '140026_36.jpg',
          fotoTema: 'wallhaven-nrdr9j.jpg'
        },
        {
          nome:'Leonel Araujo',
          email:'leonel@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Seu futuro não está escrito, o de ninguém está. Você pode fazer o que quiser fazer',
          dataDeNascimento:'1991-03-01',
          tipoAp:3,
          apelido: 'Leuo',
          genero:2,
          cargo: 0,
          aprovado: 1,
          cidade_id:664,
          cidade_estado_id:6,
          foto: 'devoltal1.png',
          fotoTema: 'wallhaven-0pzo3e.jpg'
        },
        {
          nome:'Flavio Araujo',
          email:'flavio@gmail.com',
          senha:'$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          descricao:'Nunca nos livramos de nossos demônios. Apenas aprendemos a viver acima deles',
          dataDeNascimento:'1985-05-22',
          tipoAp:1,
          apelido: 'Flavinho',
          genero:2,
          cargo: 0,
          aprovado: 1,
          cidade_id:841,
          cidade_estado_id:8,
          foto: '1528066220-br-benedict.jpg',
          fotoTema: 'wallhaven-r276qj.png'
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {})
  }
};