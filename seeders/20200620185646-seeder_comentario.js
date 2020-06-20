'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comentario', [{
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.',
        data: '2015-01-01 08:00:00',
        usuario_id: 1,
        jogo_id: 1,
      }, {
        texto: 'Admodum accumsan disputationi eu sit',
        data: '2016-01-02 09:00:00',
        usuario_id: 2,
        jogo_id: 1,
      }, {
        texto: 'Mussum Ipsum, Admodum accumsan disputationi eu sit.',
        data: '2017-01-01 10:20:00',
        usuario_id: 3,
        jogo_id: 1,
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2018-12-01 11:00:00',
        usuario_id: 1,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-01-01 12:30:02',
        usuario_id: 2,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-02-01 01:00:01',
        usuario_id: 3,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-03-01 02:00:01',
        usuario_id: 4,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-04-01 03:00:02',
        usuario_id: 5,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-05-01 04:00:02',
        usuario_id: 9,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-06-01 05:00:03',
        usuario_id: 10,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-07-01 06:00:03',
        usuario_id: 6,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-08-01 07:00:04',
        usuario_id: 7,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-09-01 08:00:04',
        usuario_id: 8,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-10-01 09:00:05',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-11-01 10:00:05',
        usuario_id: 10,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-11-01 11:00:06',
        usuario_id: 1,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-11-01 12:00:06',
        usuario_id: 2,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 08:00:07',
        usuario_id: 3,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 09:00:07',
        usuario_id: 4,
        jogo_id: 1
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 10:00:08',
        usuario_id: 5,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 11:00:08',
        usuario_id: 6,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-01 12:00:09',
        usuario_id: 4,
        jogo_id: 2
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-05 01:00:09',
        usuario_id: 7,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-05 02:00:10',
        usuario_id: 8,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-05 03:00:10',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-10 08:00:11',
        usuario_id: 9,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-11 08:00:11',
        usuario_id: 10,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-12 08:00:12',
        usuario_id: 1,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-13 08:00:12',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-14 09:00:13',
        usuario_id: 2,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-15 09:00:13',
        usuario_id: 3,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-15 10:30:14',
        usuario_id: 4,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-15 10:40:14',
        usuario_id: 5,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-15 11:00:15',
        usuario_id: 6,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-16 08:00:15',
        usuario_id: 7,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-17 08:00:16',
        usuario_id: 8,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-18 08:00:16',
        usuario_id: 3,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-19 08:00:17',
        usuario_id: 5,
        jogo_id: 3
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-20 08:00:17',
        usuario_id: 9,
        jogo_id: 9
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-21 08:00:18',
        usuario_id: 10,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-22 08:00:18',
        usuario_id: 1,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-23 08:00:19',
        usuario_id: 2,
        jogo_id: 4
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-24 08:00:19',
        usuario_id: 3,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2019-12-25 08:00:20',
        usuario_id: 4,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-01-01 11:00:20',
        usuario_id: 5,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-01-02 11:00:21',
        usuario_id: 6,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-01-03 11:00:21',
        usuario_id: 7,
        jogo_id: 5
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-01-04 11:00:22',
        usuario_id: 8,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-01-05 11:00:22',
        usuario_id: 9,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-01-06 11:00:23',
        usuario_id: 10,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-02-07 11:00:23',
        usuario_id: 1,
        jogo_id: 6
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-02-08 09:00:24',
        usuario_id: 3,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-02-09 09:00:24',
        usuario_id: 2,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-02-10 09:00:25',
        usuario_id: 4,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-03-11 09:00:25',
        usuario_id: 5,
        jogo_id: 7
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-03-12 09:00:26',
        usuario_id: 6,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-03-13 08:00:26',
        usuario_id: 7,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-03-14 08:00:27',
        usuario_id: 8,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-04-15 08:00:27',
        usuario_id: 9,
        jogo_id: 8
      }, {
        texto: 'In sed imperdiet est. Aliquam erat volutpat. Suspendisse porta ante ligula, sed convallis leo congue nec. Nulla vel augue eros. Proin pretium, nunc vitae interdum elementum, ex nibh aliquet dui, et hendrerit libero magna nec diam. Cras gravida augue turpis, in interdum risus feugiat quis.',
        data: '2020-04-16 08:00:28',
        usuario_id: 2,
        jogo_id: 8
      } ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comentario', null, {});
  }
};