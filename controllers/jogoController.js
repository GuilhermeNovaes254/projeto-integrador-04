const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
    Joguei,
    Favorito,
    Comentario,
    Colecao,
    Avaliacao,
    Jogo,
    Usuario
} = require('../models');

const jogoController = {

    jogo: async (req, res) => {

        let { id } = req.query;

        let whereClause = {};
        whereClause['id'] = id;


        const jogo = await Jogo.findOne({
            raw: true,
            order: [
                ['nome', 'ASC']
            ],
            where: whereClause
        });

        //TODO: ajustar jogoRelacionados
        // let jogoRelacionados = await Jogo.findAll({
        //     limit: 5,
        //     raw: true,
        //     order: [
        //         ['nome', 'ASC']
        //     ],
        //     where: {
        //         nome: { $not: jogo.nome },
        //         tema_id: jogo.tema_id,
        //     }
        // });

        let whereClauseComentario = {};
        whereClauseComentario['jogo_id'] = jogo.id;
        const comentarios = await Comentario.findAll({
            order: [
                ['data', 'ASC']
            ],
             where: whereClauseComentario, 
             include: [{
                model: Usuario,
                as: 'usuario'
                }]
        });


        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto,
                fotoUsuario
        }

        res.render('jogo', {
            title: 'jogo',
            jogo,
            comentarios
        });
    },

    // Funcoes de conta **************************
    contaAvalicao: async (req, res) => {
        try {

            let {
                jogo
            } = req.query

            let soma = 0
            let quantidade = 0
            let valor = 0

            whereClause = {}
            whereClause['jogo_id'] = jogo

            quantidade = await Avaliacao.count({
                where: whereClause
            });

            soma = await Avaliacao.sum('avaliacao', {
                where: whereClause
            });

            valor = (soma / quantidade).toFixed(1);
            console.log(valor)
            //res.send(valor)

        } catch (error) {
            res.status(401)
        }
    },

    contaJaJoguei: async (req, res) => {
        try {

            let {
                jogo
            } = req.query

            let quantidade = 0
            let usuarioId = req.session.usuario.id
            console.log(jogo)
            whereClause = {}
            whereClause['jogo_id'] = jogo
            whereClause['usuario_id'] = usuariosId

            quantidade = await Joguei.count({
                where: whereClause
            });

            console.log(quantidade)
            //res.send(quantidade)

        } catch (error) {
            res.status(401)
        }
    },

    contaFavorito: async (req, res) => {
        try {

            let {
                jogo
            } = req.query

            let quantidade = 0
            let usuarioId = req.session.usuario.id

            whereClause = {}
            whereClause['jogo_id'] = jogo
            whereClause['usuario_id'] = usuarioId

            quantidade = await Favorito.count({
                where: whereClause
            });

            console.log(quantidade)
            //res.send(quantidade)

        } catch (error) {
            res.status(401)
        }
    },

    // Funcoes de carregar dados **************************
    carregaJogoId: async (req, res) => {
        try {

            let {
                jogo
            } = req.query

            let busca = {}
            whereClause = {}
            whereClause['id'] = jogo

            busca = await Jogo.findOne({
                where: whereClause
            });

            res.send(busca)

        } catch (error) {
            res.status(401)
        }
    },

    carregaJogosRelac: async (req, res) => {
        try {

            let {
                jogo
            } = req.query

            let jogoBase = {}
            whereClause = {}
            whereClause['id'] = jogo

            jogoBase = await Jogo.findOne({
                where: whereClause
            });

            let tema = jogoBase.tema_id

            whereClause = {}
            whereClause['tema_id'] = tema


            let jogosIndicados = await Jogo.findAll({
                where: whereClause,
                limit: 5
            });


            res.send(jogosIndicados)


        } catch (error) {
            res.status(401)
        }
    },

    carregaComentario: async (req, res) => {
        try {

            let {
                jogo
            } = req.query

            whereClause = {}
            whereClause['jogo_id'] = jogo
            console.log("*******************************************************")
            console.log(jogo)
            let busca = await Comentario.findAll({
                where: whereClause,
                order: [
                    ['id', 'DESC']
                ]
            });

            res.status(200).send(busca)

        } catch (error) {
            res.status(401)
        }
    },


    // Funcoes de postar dados **************************
    postaComentario: async (req, res) => {
        try {

            let {
                comentario,
                jogo
            } = req.body

            let usuarioId = req.session.usuario.id

            const ts = new Date();
            let dataHora = ts.toLocaleString();

            await Comentario.create({
                texto: comentario,
                data: dataHora,
                usuario_id: usuarioId,
                jogo_id: jogo,
            });


        } catch (error) {
            res.status(401)
        }
    },

    postaAvaliacao: async (req, res) => {
        try {

            let {
                jogo,
                nota
            } = req.params;


            let usuarioId = req.session.usuario.id

            whereClause = {}
            whereClause['jogo_id'] = jogo
            whereClause['usuario_id'] = usuarioId

            let existe = await Avaliacao.count({
                where: whereClause
            });

            if (existe == 0) {
                await Avaliacao.create({
                    usuario_id: parseInt(usuarioId),
                    jogo_id: parseInt(jogo),
                    avaliacao:parseFloat(nota)
                });
                console.log("criada")
            } else {
                await Avaliacao.update({
                    avaliacao: parseFloat(nota)
                }, {
                    where: whereClause
                });
                console.log('nota Atribuida')
            }
            res.status(200).send('OK')
        } catch (error) {
            res.status(401)
        }
    },

    postaJaJoguei: async (req, res) => {
        try {

            let {
                jogo
            } = req.body;

            let usuarioId = req.session.usuario.id

            await Joguei.create({
                usuario_id: usuarioId,
                jogo_id: jogo
            });


        } catch (error) {
            res.status(401)
        }
    },

    postaAmei: async (req, res) => { //Favorito
        try {

            let {
                jogo
            } = req.body;

            let usuarioId = req.session.usuario.id

            await Favorito.create({
                usuario_id: usuarioId,
                jogo_id: jogo
            });

        } catch (error) {
            res.status(401)
        }
    },

    carregaAvaliacao: async (req, res) => {
        try {

            let {
                jogo
            } = req.query;

            console.log(jogo)
            let usuarioId = req.session.usuario.id

            whereClause = {}
            whereClause['jogo_id'] = jogo
            whereClause['usuario_id'] = usuarioId

            let avaliacao = await Avaliacao.findOne({
                where: whereClause
            })


            res.send(avaliacao)


        } catch (error) {
            res.status(401)
        }
    },


};

module.exports = jogoController