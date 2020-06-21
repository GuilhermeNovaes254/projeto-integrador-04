const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
        Usuario,
        Jogo,
        Favorito,
        Colecao,
        Tema,
        Joguei
} = require('../models')


const buscaController = {

        usuarios: async (req, res) => {
                try {
                        let {
                                item
                        } = req.params;


                        let busca = []

                        let whereClause = {};

                        if (item != '') {
                                whereClause['nome'] = {
                                        [Op.like]: '%' + item + '%'
                                };
                        }


                        busca = await Usuario.findAll({
                                order: [
                                        ['nome', 'ASC']
                                ],
                                where: whereClause
                        })


                        res.send(busca)

                } catch (error) {
                        res.status(401)
                }
        },


        // jogos: async (req, res) => {
        //         try {
        //                 let {
        //                         nome,
        //                         tema,
        //                         dominio,
        //                         mecanica
        //                 } = req.query;

        //                 console.log('****************')
        //                 console.log(nome)

        //                 let busca = []


        //                 let whereClause = {};

        //                 if (nome != '') {
        //                         whereClause['nome'] = {
        //                                 [Op.like]: '%' + nome + '%'
        //                         };
        //                 }

        //                 whereClause['aprovado'] = 1;

        //                 if (tema != 0) {
        //                         whereClause['tema_id'] = tema;
        //                 }

        //                 if (dominio != 0) {
        //                         whereClause['dominio_id'] = dominio;
        //                 }

        //                 if (mecanica != 0) {
        //                         whereClause['mecanica_id'] = mecanica;
        //                 }

        //                 if (mecanica != 0) {
        //                         whereClause['mecanica_id'] = mecanica;
        //                 }

        //                 busca = await Jogo.findAll({
        //                         order: [
        //                                 ['nome', 'ASC']
        //                         ],
        //                         where: whereClause
        //                 })

        //                 console.log(busca)

        //                 res.render('busca', {
        //                         title: 'Busca',
        //                         apelidoUsuario: req.session.usuario.apelido,
        //                         idUsuario: req.session.usuario.id,
        //                         jogos: busca
        //                 });

        //         } catch (error) {
        //                 res.status(401)
        //         }
        // },

        listaJogos: async (limite, orderBy) => {
                try {
                        let busca = []

                        busca = await Jogo.findAll({
                                limit: limite,
                                where: {
                                        aprovado: 1
                                },
                                order: orderBy ? [orderBy] : null,
                                include: [{
                                        model: Tema,
                                        as: 'tema'
                                }]
                        })

                        for (let i = 0; i < busca.length; i++) {
                                await Favorito.count({
                                        where: {
                                                jogo_id: busca[i].id,
                                        }
                                }).then(result => {
                                        busca[i].totalFavorito = result;
                                });
                                await Joguei.count({
                                        where: {
                                                jogo_id: busca[i].id,
                                        }
                                }).then(result => {
                                        busca[i].totalJoguei = result;
                                });

                        }
                        return busca;

                } catch (error) {
                        return null;
                }
        },

        listaJogosFavoritos: async (limite, idUsuario) => {
                try {
                        let favoritos, countFavoritos;
                        await Favorito.findAndCountAll({
                                limit: limite,
                                where: {
                                        usuario_id: idUsuario
                                },
                                include: [{
                                        model: Jogo,
                                        as: 'jogo',
                                        include: [{
                                                model: Tema,
                                                as: 'tema'
                                        }]
                                }]
                        }).then(result => {
                                favoritos = result.rows;
                                countFavoritos = result.count;
                        });

                        let jogosFavoritos = [];
                        // for (let favorito of favoritos) {
                        //         jogosFavoritos.push(favorito.jogo);
                        // }
                        for (let i = 0; i < favoritos.length; i++) {
                                await Favorito.count({
                                        where: {
                                                jogo_id: favoritos[i].jogo.id,
                                        }
                                }).then(result => {
                                        favoritos[i].jogo.totalFavorito = result;
                                });
                                await Joguei.count({
                                        where: {
                                                jogo_id: favoritos[i].jogo.id,
                                        }
                                }).then(result => {
                                        favoritos[i].jogo.totalJoguei = result;
                                });

                                jogosFavoritos.push(favoritos[i].jogo);
                        }

                        return {
                                jogosFavoritos,
                                countFavoritos
                        };
                } catch (error) {
                        return null;
                }
        },

        listaJogosJogados: async (limite, idUsuario) => {
                try {
                        let jogados, countJogados;
                        await Joguei.findAndCountAll({
                                limit: limite,
                                where: {
                                        usuario_id: idUsuario
                                },
                                include: [{
                                        model: Jogo,
                                        as: 'jogo',
                                        include: [{
                                                model: Tema,
                                                as: 'tema'
                                        }]
                                }]
                        }).then(result => {
                                jogados = result.rows;
                                countJogados = result.count;
                        });

                        let jogosJaJoguei = [];
                        for (let i = 0; i < jogados.length; i++) {
                                await Favorito.count({
                                        where: {
                                                jogo_id: jogados[i].jogo.id,
                                        }
                                }).then(result => {
                                        jogados[i].jogo.totalFavorito = result;
                                });
                                await Joguei.count({
                                        where: {
                                                jogo_id: jogados[i].jogo.id,
                                        }
                                }).then(result => {
                                        jogados[i].jogo.totalJoguei = result;
                                });

                                jogosJaJoguei.push(jogados[i].jogo);
                        }

                        return {
                                jogados,
                                countJogados
                        };
                } catch (error) {
                        return null;
                }
        },

        listaJogosColecao: async (limite, idUsuario) => {
                try {
                        let colecao, countColecao;
                        await Colecao.findAndCountAll({
                                limit: limite,
                                where: {
                                        usuario_id: idUsuario
                                },
                                include: [{
                                        model: Jogo,
                                        as: 'jogo',
                                        include: [{
                                                model: Tema,
                                                as: 'tema'
                                        }]
                                }]
                        }).then(result => {
                                colecao = result.rows;
                                countColecao = result.count;
                        });

                        let jogosColecao = [];

                        for (let i = 0; i < colecao.length; i++) {
                                await Favorito.count({
                                        where: {
                                                jogo_id: colecao[i].jogo.id,
                                        }
                                }).then(result => {
                                        colecao[i].jogo.totalFavorito = result;
                                });
                                await Joguei.count({
                                        where: {
                                                jogo_id: colecao[i].jogo.id,
                                        }
                                }).then(result => {
                                        colecao[i].jogo.totalJoguei = result;
                                });

                                jogosColecao.push(colecao[i].jogo);
                        }

                        return {
                                jogosColecao,
                                countColecao
                        };
                } catch (error) {
                        return null;
                }
        },

        dadosUsuario: async (req, res) => {
                try {
                        let {
                                id
                        } = req.query

                        let usuario = await Usuario.findOne({
                                where: {
                                        id
                                }
                        });

                        res.send(usuario)

                } catch (error) {
                        res.status(401)
                }
        },

        dadosUsuarioController: async (idUsuario) => {

                let usuario = await Usuario.findOne({
                        where: {
                                id: idUsuario
                        }
                });

                return usuario

        }
}

module.exports = buscaController;