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
        usuario_id: 3,
        jogo_id: 1,
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:00',
        usuario_id: 1,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:00',
        usuario_id: 2,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:01',
        usuario_id: 3,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:01',
        usuario_id: 4,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 5,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 9,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 10,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 6,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 7,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 8,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 10,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 1,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 2,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 3,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 4,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 5,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 6,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 4,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 7,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 8,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 10,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 1,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 2,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 3,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 4,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 5,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 6,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 7,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 8,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 3,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 9,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 10,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 1,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 2,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 3,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 4,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 5,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 6,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 7,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 8,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 9,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 10,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 1,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 3,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 2,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 4,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 5,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 6,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 7,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 8,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 9,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 2,
        jogo_id: 8
      } ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comentario', null, {});
  }
};