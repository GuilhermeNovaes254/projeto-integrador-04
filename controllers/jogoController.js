const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const colorThief = require('colorthief');

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

        const jogo = await Jogo.findOne({
            raw: true,
            order: [
                ['nome', 'ASC']
            ],
            where: {
                id
            }
        });

        let jogosRelacionados = await Jogo.findAll({
            limit: 5,
            where: {
                id: { [Op.ne]: jogo.id },
                tema_id: jogo.tema_id
            }
        });

        let comentarios, countComentarios;
        await Comentario.findAndCountAll({
            limit: 6,
            order: [
                ['data', 'DESC']
            ],
            where: {
                jogo_id: jogo.id
            },
            include: [{
                model: Usuario,
                as: 'usuario'
            }]
        }).then(result => {
            comentarios = result.rows;
            countComentarios = result.count;
        });

        let existe;
        await Favorito.count({
            where: {
                jogo_id: id,
                usuario_id: req.session.usuario.id
            }
        }).then(result => {
            existe = result;
        });

        let dominantColor = await colorThief.getColor(`http://localhost:5000/buscaImagem/${jogo.fotoTema}`);

        dominantColor = dominantColor.map(value => {
            if (value > 200) {
                return 190;
            } else {
                return value;
            }
        }).join(', ');

        res.render('jogo', {
            title: 'jogo',
            jogo,
            comentarios,
            jogosRelacionados,
            countComentarios,
            dominantColor,
            favorito: existe > 0 ? true : false
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

    carregaComentario: async (req, res) => {
        try {

            let {
                jogo,
                indice
            } = req.query

            let comentarios, countComentarios;
            await Comentario.findAndCountAll({
                limit: 5,
                order: [
                    ['data', 'DESC']
                ],
                where: {
                    jogo_id: jogo,
                    id: { [Op.lt]: indice }
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }]
            }).then(result => {
                comentarios = result.rows;
                countRestantes = result.count;
            });

            res.render('./partials/coments', { layout: false, comentarios: comentarios, flagPerfilUsuario: false, countRestantes });

        } catch (error) {
            res.status(401)
        }
    },


    // Ações
    postaComentario: async (req, res) => {
        try {

            let {
                texto,
                jogo
            } = req.body

            const ts = new Date();
            let dataHora = ts.toLocaleString();

            let comentario = {
                texto,
                data: dataHora,
                usuario_id: req.session.usuario.id,
                jogo_id: jogo,
                usuario: {
                    id: req.session.usuario.id,
                    nome: req.session.usuario.nome,
                    foto: req.session.usuario.foto,
                    apelido: req.session.usuario.apelido,
                }
            };

            await Comentario.create(comentario);

            res.render('./partials/coments', { layout: false, comentarios: [comentario], flagPerfilUsuario: false });

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
                    avaliacao: parseFloat(nota)
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


    adicionaFavorito: async (req, res) => {
        try {

            let {
                jogo
            } = req.body;
            
            let existe;
            await Favorito.count({
                where: {
                    jogo_id: jogo,
                    usuario_id: req.session.usuario.id
                }
            }).then((resposta) => {
                existe = resposta;
            });

            if (existe == 0) {
                await Favorito.create({
                    usuario_id: req.session.usuario.id,
                    jogo_id: jogo
                }).then(() => {
                    res.status(200).send(true);
                });

            } else {
                await Favorito.destroy({
                    where: {
                        jogo_id: jogo,
                        usuario_id: req.session.usuario.id
                    }
                }).then(() => {
                    res.status(200).send(false);
                });
            }

        } catch (error) {
            res.status(401)
        }
    },

    adicionaColecao: async (req, res) => {
        try {

            let {
                jogo
            } = req.body;
            
            let existeColecao;
            await Colecao.count({
                where: {
                    jogo_id: jogo,
                    usuario_id: req.session.usuario.id
                }
            }).then((resposta) => {
                existeColecao = resposta;
            });

            if (existeColecao == 0) {
                await Colecao.create({
                    usuario_id: req.session.usuario.id,
                    jogo_id: jogo
                }).then(() => {
                    res.status(200).send(true);
                });

            } else {
                await Colecao.destroy({
                    where: {
                        jogo_id: jogo,
                        usuario_id: req.session.usuario.id
                    }
                }).then(() => {
                    res.status(200).send(false);
                });
            }

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