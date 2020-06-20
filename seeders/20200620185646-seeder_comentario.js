'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comentario', [{
        texto: 'Consegue melhorar o que já era excelente. Não tenho outra nota para dar.',
        data: '2015-01-01 08:00:00',
        usuario_id: 1,
        jogo_id: 1,
      }, {
        texto: 'Melhora ainda mais a rejogabilidade do Terra Mystica. Facções totalmente diferenciadas e trilha de tecnologia bem temática com o jogo. Disputa mesa com Terra Mystica e leva vantagem!',
        data: '2016-01-02 09:00:00',
        usuario_id: 2,
        jogo_id: 1,
      }, {
        texto: 'Até agora o Gaia tem sido uma clara experiência de evolução em relação ao Terra Mystica. As trilhas de tecnologia e o novo mapa modular melhoram muito a dinâmica e estratégia do jogo. Ainda assim, bastante difícil de dominar',
        data: '2017-01-01 10:20:00',
        usuario_id: 3,
        jogo_id: 1,
      }, {
        texto: 'Com certeza um dos melhores jogos que joguei !!! Bom pacas...',
        data: '2018-12-01 11:00:00',
        usuario_id: 1,
        jogo_id: 2
      }, {
        texto: 'Jogo completo, com muita estratégia. Rejogabilidade altíssima. Um Euro hardcore na medida certa.',
        data: '2019-01-01 12:30:02',
        usuario_id: 2,
        jogo_id: 2
      }, {
        texto: 'Que jogo sensacional! A curva de aprendizado é um pouco lenta, mas o ponto interessante é que quando você começa a entender todas as facções e seus respetivos estilos de jogo, ele se torna ainda mais fascinante. ',
        data: '2019-02-01 01:00:01',
        usuario_id: 3,
        jogo_id: 2
      }, {
        texto: 'Esse jogo é fantástico... Estou louco para comprar o meu!!!',
        data: '2019-03-01 02:00:01',
        usuario_id: 4,
        jogo_id: 2
      }, {
        texto: 'É tudo o que falavam dele e mais. Fiquei impressionado! ',
        data: '2019-04-01 03:00:02',
        usuario_id: 5,
        jogo_id: 2
      }, {
        texto: 'Eu amo esse jogo, tem a melhor mecânica e equilíbrio que já vi em um boardgame até hoje',
        data: '2019-05-01 04:00:02',
        usuario_id: 9,
        jogo_id: 2
      }, {
        texto: 'Excelente jogo para duas pessoas, muito balanceado. Recomendo',
        data: '2019-06-01 05:00:03',
        usuario_id: 10,
        jogo_id: 9
      }, {
        texto: 'Melhor jogo para 2 pessoas que joguei até hoje. Rápido,  simples... simplesmente viciante!!!',
        data: '2019-07-01 06:00:03',
        usuario_id: 6,
        jogo_id: 9
      }, {
        texto: 'É um jogo viciante. Que vai levar um bom tempo pra realmente saber jogar. A complexidade é muito boa, o que faz ele querer voltar pra mesa.',
        data: '2019-08-01 07:00:04',
        usuario_id: 7,
        jogo_id: 1
      }, {
        texto: 'Euro raiz, fácil de explicar as ações difícil de otimizar, tornando cada jogo único e com muitas formas de alcançar a vitória. O tema espacial além de ser lindo é meu preferido.',
        data: '2019-09-01 08:00:04',
        usuario_id: 8,
        jogo_id: 1
      }, {
        texto: 'Ótimo jogo. Na minha opinião, a obra prima do Pfister até o momento. Mecânica fechada, duração boa, preço decente, tema muito legal.',
        data: '2019-10-01 09:00:05',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'Excelente, variadas possibilidades de estratégia, é mais longo do que aparenta, mas na mesa certa nem nota o tempo passar. ',
        data: '2019-11-01 10:00:05',
        usuario_id: 10,
        jogo_id: 5
      }, {
        texto: 'uma otima evolução do terra mytica. melhorou o que ja era bom, a arvore de tecnologia é uma grande melhoria ',
        data: '2019-11-01 11:00:06',
        usuario_id: 1,
        jogo_id: 1
      }, {
        texto: 'Melhor Euro que já joguei até hoje, mecânica complexa, jogo temático, competitivo e equilibrado. Recomendo muito!',
        data: '2019-11-01 12:00:06',
        usuario_id: 2,
        jogo_id: 1
      }, {
        texto: 'Se Terra Mystica já era uma obra-prima, Projeto Gaia é um jogo que beira a perfeição!',
        data: '2019-12-01 08:00:07',
        usuario_id: 3,
        jogo_id: 1
      }, {
        texto: 'Que jogo bom! Daqueles que quando termina a partida você já sai pensando na estratégia pra próxima. Tudo funciona muito bem amarrado com o tema. A iconografia é bem intuitiva. Que jogo!',
        data: '2019-12-01 09:00:07',
        usuario_id: 4,
        jogo_id: 1
      }, {
        texto: 'O brilho do jogo se dá pela diversidade de povos e suas estratégias, que proporcionam uma vasta combinação de modos diversos de pontuar e ganhar o jogo. Apesar das muitas regras, uma vez aprendida é dominada após 1 partida bem jogada.',
        data: '2019-12-01 10:00:08',
        usuario_id: 5,
        jogo_id: 2
      }, {
        texto: 'Não gostei!',
        data: '2019-12-01 11:00:08',
        usuario_id: 6,
        jogo_id: 2
      }, {
        texto: 'O melhor boardgame que existe! PONTO....',
        data: '2019-12-01 12:00:09',
        usuario_id: 4,
        jogo_id: 2
      }, {
        texto: 'Dez com louvor! Jogo altamente estratégico. Cada vez que jogo, gosto mais. Em cada partida é necessário ter novas estratégias.',
        data: '2019-12-05 01:00:09',
        usuario_id: 7,
        jogo_id: 3
      }, {
        texto: 'Simplesmente um jogaço. Leve, dinâmico, divertido e bastante temático. Dá vontade de jogar novamente logo que a partida termina',
        data: '2019-12-05 02:00:10',
        usuario_id: 8,
        jogo_id: 3
      }, {
        texto: 'Para mim, melhor jogo de 2016.',
        data: '2019-12-05 03:00:10',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-10 08:00:11',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'Que jogo bom, adoro jogos em que você vai construindo uma engine de pontos e montando combos. E quanto mais você jogar, melhor será sua experiência, por conta da curva de conhecimento.  ',
        data: '2019-12-11 08:00:11',
        usuario_id: 10,
        jogo_id: 3
      }, {
        texto: 'Gostei bastante. É muito importante observar o que os outros estão fazendo pois a disputa por Milestones e Awards é fundamental.',
        data: '2019-12-12 08:00:12',
        usuario_id: 1,
        jogo_id: 3
      }, {
        texto: 'Não consigo pensar em nada pra falar mal desse jogo...arte horrível talvez???  Clássico moderno! ',
        data: '2019-12-13 08:00:12',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'Sensacional - Até o momento o melhor da minha coleção',
        data: '2019-12-14 09:00:13',
        usuario_id: 2,
        jogo_id: 3
      }, {
        texto: 'Jogo sensacional. Vem uma quantidade de conteúdo que teria que juntar mais de 4 jogos para  tentar chegar perto desse.',
        data: '2019-12-15 09:00:13',
        usuario_id: 3,
        jogo_id: 4
      }, {
        texto: 'Excelente, jogo com uma história bacana, uma mecânica sensacional e uma quantidade enorme de diversão dentro da caixa.',
        data: '2019-12-15 10:30:14',
        usuario_id: 4,
        jogo_id: 4
      }, {
        texto: 'Para mim é o mais próximo do RPG que posso chegar, sem um mestre. TOP demais!',
        data: '2019-12-15 10:40:14',
        usuario_id: 5,
        jogo_id: 4
      }, {
        texto: 'Jogo sensacional. Mecânicas excelentes que te prendem a atenção junto a campanha. Sinceramente não é hype. Vale sua posição. ',
        data: '2019-12-15 11:00:15',
        usuario_id: 6,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-16 08:00:15',
        usuario_id: 7,
        jogo_id: 6
      }, {
        texto: 'Eu e meus 3 amigos achamos incrivelmente divertido, recomendo para qualquer um que tenha uma noite livre com os amigos.',
        data: '2019-12-17 08:00:16',
        usuario_id: 8,
        jogo_id: 4
      }, {
        texto: 'Incrível. Ele e o Kingdom death monsters são o que há de melhor em dungeon crawler. Jogo feito com  muito cuidado nas regras e nos componentes.  gigantesco e variado.',
        data: '2019-12-18 08:00:16',
        usuario_id: 3,
        jogo_id: 4
      }, {
        texto: 'Encantado com a amarração temático-mecânica do jogo, é tudo muito redondo e bem encaixado. É estratégico na medida certa e ainda assim não gera um AP elevado. A arte é magnífica e a fator replay é imenso.',
        data: '2019-12-19 08:00:17',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'Jogo com estratégia viciante. Um dos melhores para 2 jogadores na minha opinião e igualmente divertido como seu irmão mais velho.',
        data: '2019-12-20 08:00:17',
        usuario_id: 9,
        jogo_id: 9
      }, {
        texto: 'Sem dúvida, melhor jogo cooperativo para quem é fan de RPG.',
        data: '2019-12-21 08:00:18',
        usuario_id: 10,
        jogo_id: 4
      }, {
        texto: 'Tudo neste jogo é superlativo. Super caixa, super imersão, super mecânicas e super trabalho pra fazer o set up!',
        data: '2019-12-22 08:00:18',
        usuario_id: 1,
        jogo_id: 4
      }, {
        texto: 'Melhor board game que já joguei',
        data: '2019-12-23 08:00:19',
        usuario_id: 2,
        jogo_id: 4
      }, {
        texto: 'Ótimo jogo. Na minha opinião, a obra prima do Pfister até o momento. Mecânica fechada, duração boa, preço decente, tema muito legal.',
        data: '2019-12-24 08:00:19',
        usuario_id: 3,
        jogo_id: 5
      }, {
        texto: 'Muito divertido e de mecânica simples! curti a simplicidade nas regras e com estratégia na partida.',
        data: '2019-12-25 08:00:20',
        usuario_id: 4,
        jogo_id: 5
      }, {
        texto: 'Excelente, variadas possibilidades de estratégia, é mais longo do que aparenta, mas na mesa certa nem nota o tempo passar. ',
        data: '2020-01-01 11:00:20',
        usuario_id: 5,
        jogo_id: 5
      }, {
        texto: 'Sempre quero jogar outra partida.',
        data: '2020-01-02 11:00:21',
        usuario_id: 6,
        jogo_id: 5
      }, {
        texto: 'Que jogo bacana! As muitas formas de pontuar geram inúmeras possibilidades durante a partida. O tema é muito legal! É por serem ações simples, o jogo flui bem, rápido. ',
        data: '2020-01-03 11:00:21',
        usuario_id: 7,
        jogo_id: 5
      }, {
        texto: 'Jogaço. Um classico. Rápido, relativamente fácil de explicar, cheio de possibilidades estratégicas e da melhor ação a ser escolhida de acordo com o momento tático da partida.',
        data: '2020-01-04 11:00:22',
        usuario_id: 8,
        jogo_id: 6
      }, {
        texto: 'Excelente jogo, obrigatório ter na coleção.',
        data: '2020-01-05 11:00:22',
        usuario_id: 9,
        jogo_id: 6
      }, {
        texto: 'Um dos jogos que eu mais gosto , muito divertido . ',
        data: '2020-01-06 11:00:23',
        usuario_id: 10,
        jogo_id: 6
      }, {
        texto: 'Simples e fácil de aprender. Ótimo jogo de alocação de trabalhadores.',
        data: '2020-02-07 11:00:23',
        usuario_id: 1,
        jogo_id: 6
      }, {
        texto: 'Jogo espetacular!!! Só não é perfeito porque demora muuuuito!!',
        data: '2020-02-08 09:00:24',
        usuario_id: 3,
        jogo_id: 7
      }, {
        texto: 'Melhor tradução de um dungeon crawler para um euro!!! Desafiador, estrategico, interativo, temático, etc... meu top 1!!!',
        data: '2020-02-09 09:00:24',
        usuario_id: 2,
        jogo_id: 7
      }, {
        texto: 'Que jogo meus amigos!!',
        data: '2020-02-10 09:00:25',
        usuario_id: 4,
        jogo_id: 7
      }, {
        texto: 'Não tenho o que comentar, a nota fala por si.',
        data: '2020-03-11 09:00:25',
        usuario_id: 5,
        jogo_id: 7
      }, {
        texto: 'Jogão, muito gostoso de jogar, não é tão parecido com TM, é bem diferente.',
        data: '2020-03-12 09:00:26',
        usuario_id: 6,
        jogo_id: 8
      }, {
        texto: 'Gostei muito da dinâmica do jogo e como ele flui bem entre os jogadores. O lance do mercado é a parte mais interessante na partida.',
        data: '2020-03-13 08:00:26',
        usuario_id: 7,
        jogo_id: 8
      }, {
        texto: 'Jogo fantástico. A combinação de mecânicas funciona muito bem e o jogo flui tranquilamente na mesa.',
        data: '2020-03-14 08:00:27',
        usuario_id: 8,
        jogo_id: 8
      }, {
        texto: 'Um jogão. Estratégico, tenso e disputado ponto a ponto. Alta rejogablidade por causa do mapa modular e dos diferentes clans. Sensacional! ',
        data: '2020-04-15 08:00:27',
        usuario_id: 9,
        jogo_id: 8
      }, {
        texto: 'Jogo muito bom, agradável, fácil de jogar e explicar, porém muito estratégico e com alta rejogabilidade. ',
        data: '2020-04-16 08:00:28',
        usuario_id: 2,
        jogo_id: 8
      } ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comentario', null, {});
  }
};