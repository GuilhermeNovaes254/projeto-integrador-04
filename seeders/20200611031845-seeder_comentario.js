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
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:00',
        usuario_id: 45,
        jogo_id: 16
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:00',
        usuario_id: 48,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:01',
        usuario_id: 16,
        jogo_id: 29
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:01',
        usuario_id: 20,
        jogo_id: 18
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 41,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 9,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 10,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 23,
        jogo_id: 52
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 20,
        jogo_id: 33
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 16,
        jogo_id: 45
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 45,
        jogo_id: 47
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 31,
        jogo_id: 32
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 38,
        jogo_id: 51
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 1,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 31,
        jogo_id: 39
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 5,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 41,
        jogo_id: 23
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 4,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 38,
        jogo_id: 10
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 34,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 5,
        jogo_id: 17
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 16,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 24,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 24,
        jogo_id: 32
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 5,
        jogo_id: 42
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 22,
        jogo_id: 43
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 28,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 29,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 19,
        jogo_id: 16
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 40,
        jogo_id: 12
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 28,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 42,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 3,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 36,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 28,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 16,
        jogo_id: 33
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 41,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 36,
        jogo_id: 17
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 30,
        jogo_id: 42
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 39,
        jogo_id: 50
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 42,
        jogo_id: 44
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 18,
        jogo_id: 18
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 30,
        jogo_id: 31
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 42,
        jogo_id: 47
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 20,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 26,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 3,
        jogo_id: 45
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 48,
        jogo_id: 47
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 37,
        jogo_id: 39
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 14,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 22,
        jogo_id: 10
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 31,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 11,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 16,
        jogo_id: 20
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 2,
        jogo_id: 26
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 36,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:29',
        usuario_id: 43,
        jogo_id: 32
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:29',
        usuario_id: 2,
        jogo_id: 11
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:30',
        usuario_id: 39,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:30',
        usuario_id: 9,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:31',
        usuario_id: 9,
        jogo_id: 21
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:31',
        usuario_id: 8,
        jogo_id: 52
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:32',
        usuario_id: 48,
        jogo_id: 20
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:32',
        usuario_id: 16,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:33',
        usuario_id: 27,
        jogo_id: 11
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:33',
        usuario_id: 17,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:34',
        usuario_id: 47,
        jogo_id: 51
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:34',
        usuario_id: 16,
        jogo_id: 39
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:35',
        usuario_id: 1,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:35',
        usuario_id: 8,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:36',
        usuario_id: 44,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:36',
        usuario_id: 24,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:37',
        usuario_id: 19,
        jogo_id: 11
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:37',
        usuario_id: 25,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:38',
        usuario_id: 42,
        jogo_id: 39
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:38',
        usuario_id: 45,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:39',
        usuario_id: 20,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:39',
        usuario_id: 23,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:40',
        usuario_id: 19,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:40',
        usuario_id: 2,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:41',
        usuario_id: 27,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:41',
        usuario_id: 26,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:42',
        usuario_id: 17,
        jogo_id: 13
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:42',
        usuario_id: 30,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:43',
        usuario_id: 28,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:43',
        usuario_id: 5,
        jogo_id: 13
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:44',
        usuario_id: 10,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:44',
        usuario_id: 40,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:45',
        usuario_id: 12,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:45',
        usuario_id: 12,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:46',
        usuario_id: 7,
        jogo_id: 46
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:46',
        usuario_id: 37,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:47',
        usuario_id: 1,
        jogo_id: 49
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:47',
        usuario_id: 40,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:48',
        usuario_id: 45,
        jogo_id: 50
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:48',
        usuario_id: 48,
        jogo_id: 45
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:49',
        usuario_id: 40,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:49',
        usuario_id: 23,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:01',
        usuario_id: 5,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:01',
        usuario_id: 27,
        jogo_id: 46
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 29,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 37,
        jogo_id: 35
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 23,
        jogo_id: 22
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 25,
        jogo_id: 41
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 24,
        jogo_id: 50
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 38,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 14,
        jogo_id: 17
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 33,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 30,
        jogo_id: 42
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 25,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 20,
        jogo_id: 20
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 40,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 10,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 41,
        jogo_id: 13
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 20,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 14,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 16,
        jogo_id: 31
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 12,
        jogo_id: 12
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 10,
        jogo_id: 23
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 16,
        jogo_id: 31
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 46,
        jogo_id: 39
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 11,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 18,
        jogo_id: 42
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 1,
        jogo_id: 43
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 35,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 41,
        jogo_id: 51
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 46,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 4,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 22,
        jogo_id: 49
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 2,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 8,
        jogo_id: 44
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 48,
        jogo_id: 41
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 17,
        jogo_id: 22
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 17,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 2,
        jogo_id: 16
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 38,
        jogo_id: 27
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 6,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 22,
        jogo_id: 50
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 14,
        jogo_id: 50
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 2,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 8,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 20,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 13,
        jogo_id: 32
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 39,
        jogo_id: 27
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 11,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 3,
        jogo_id: 47
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 27,
        jogo_id: 49
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 30,
        jogo_id: 18
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 19,
        jogo_id: 26
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 3,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 4,
        jogo_id: 44
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 47,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 7,
        jogo_id: 22
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 20,
        jogo_id: 13
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:29',
        usuario_id: 32,
        jogo_id: 20
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:29',
        usuario_id: 26,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:30',
        usuario_id: 29,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:30',
        usuario_id: 36,
        jogo_id: 12
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:31',
        usuario_id: 48,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:31',
        usuario_id: 23,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:32',
        usuario_id: 24,
        jogo_id: 52
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:32',
        usuario_id: 15,
        jogo_id: 41
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:33',
        usuario_id: 26,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:33',
        usuario_id: 25,
        jogo_id: 33
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:34',
        usuario_id: 8,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:34',
        usuario_id: 43,
        jogo_id: 50
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:35',
        usuario_id: 4,
        jogo_id: 51
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:35',
        usuario_id: 28,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:36',
        usuario_id: 40,
        jogo_id: 10
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:36',
        usuario_id: 26,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:37',
        usuario_id: 24,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:37',
        usuario_id: 45,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:38',
        usuario_id: 37,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:38',
        usuario_id: 25,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:39',
        usuario_id: 31,
        jogo_id: 41
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:39',
        usuario_id: 21,
        jogo_id: 23
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:40',
        usuario_id: 45,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:40',
        usuario_id: 13,
        jogo_id: 26
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:41',
        usuario_id: 24,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:41',
        usuario_id: 30,
        jogo_id: 16
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:42',
        usuario_id: 8,
        jogo_id: 44
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:42',
        usuario_id: 45,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:43',
        usuario_id: 32,
        jogo_id: 31
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:43',
        usuario_id: 47,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:44',
        usuario_id: 7,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:44',
        usuario_id: 2,
        jogo_id: 11
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:45',
        usuario_id: 3,
        jogo_id: 46
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:45',
        usuario_id: 38,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:46',
        usuario_id: 47,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:46',
        usuario_id: 3,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:47',
        usuario_id: 44,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:47',
        usuario_id: 13,
        jogo_id: 16
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:48',
        usuario_id: 42,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:48',
        usuario_id: 10,
        jogo_id: 18
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:49',
        usuario_id: 19,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:49',
        usuario_id: 43,
        jogo_id: 29
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:50',
        usuario_id: 31,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:50',
        usuario_id: 35,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 14,
        jogo_id: 35
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:02',
        usuario_id: 20,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 10,
        jogo_id: 23
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:03',
        usuario_id: 23,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 19,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:04',
        usuario_id: 45,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 12,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:05',
        usuario_id: 13,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 25,
        jogo_id: 23
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:06',
        usuario_id: 38,
        jogo_id: 52
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 12,
        jogo_id: 49
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:07',
        usuario_id: 18,
        jogo_id: 17
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 29,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:08',
        usuario_id: 22,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 9,
        jogo_id: 25
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:09',
        usuario_id: 33,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 35,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:10',
        usuario_id: 1,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 18,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:11',
        usuario_id: 23,
        jogo_id: 41
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 18,
        jogo_id: 48
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:12',
        usuario_id: 39,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 46,
        jogo_id: 40
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:13',
        usuario_id: 18,
        jogo_id: 27
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 35,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:14',
        usuario_id: 31,
        jogo_id: 11
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 46,
        jogo_id: 17
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:15',
        usuario_id: 20,
        jogo_id: 18
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 16,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:16',
        usuario_id: 23,
        jogo_id: 15
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 27,
        jogo_id: 26
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:17',
        usuario_id: 16,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 12,
        jogo_id: 33
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:18',
        usuario_id: 38,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 44,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:19',
        usuario_id: 20,
        jogo_id: 12
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 22,
        jogo_id: 42
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:20',
        usuario_id: 44,
        jogo_id: 12
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 2,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:21',
        usuario_id: 22,
        jogo_id: 51
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 35,
        jogo_id: 16
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:22',
        usuario_id: 34,
        jogo_id: 51
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 44,
        jogo_id: 29
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:23',
        usuario_id: 29,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 45,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:24',
        usuario_id: 14,
        jogo_id: 46
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 21,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:25',
        usuario_id: 3,
        jogo_id: 30
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 48,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:26',
        usuario_id: 18,
        jogo_id: 36
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 30,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:27',
        usuario_id: 8,
        jogo_id: 27
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 2,
        jogo_id: 32
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:28',
        usuario_id: 9,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:29',
        usuario_id: 32,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:29',
        usuario_id: 12,
        jogo_id: 29
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:30',
        usuario_id: 38,
        jogo_id: 12
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:30',
        usuario_id: 44,
        jogo_id: 21
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:31',
        usuario_id: 20,
        jogo_id: 22
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:31',
        usuario_id: 11,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:32',
        usuario_id: 38,
        jogo_id: 49
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:32',
        usuario_id: 17,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:33',
        usuario_id: 41,
        jogo_id: 24
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:33',
        usuario_id: 3,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:34',
        usuario_id: 19,
        jogo_id: 35
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:34',
        usuario_id: 33,
        jogo_id: 27
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:35',
        usuario_id: 43,
        jogo_id: 26
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:35',
        usuario_id: 36,
        jogo_id: 38
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:36',
        usuario_id: 35,
        jogo_id: 17
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:36',
        usuario_id: 16,
        jogo_id: 18
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:37',
        usuario_id: 28,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:37',
        usuario_id: 17,
        jogo_id: 44
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:38',
        usuario_id: 36,
        jogo_id: 28
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:38',
        usuario_id: 15,
        jogo_id: 34
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:39',
        usuario_id: 16,
        jogo_id: 14
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:39',
        usuario_id: 37,
        jogo_id: 19
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:40',
        usuario_id: 33,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:40',
        usuario_id: 12,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:41',
        usuario_id: 5,
        jogo_id: 37
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:41',
        usuario_id: 16,
        jogo_id: 10
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:42',
        usuario_id: 6,
        jogo_id: 13
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:42',
        usuario_id: 29,
        jogo_id: 43
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:43',
        usuario_id: 13,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:43',
        usuario_id: 21,
        jogo_id: 11
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:44',
        usuario_id: 23,
        jogo_id: 31
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 00:00:44',
        usuario_id: 22,
        jogo_id: 32
      }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comentario', null, {});
  }
};