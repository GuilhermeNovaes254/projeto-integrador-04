const Sequelize = require('sequelize')
const config = require('../config/database');
const db = new Sequelize(config)
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
        countComentarios = await Comentario.count({
            limit: 6,
            order: [
                ['data', 'DESC']
            ],
            where: {
                jogo_id: jogo.id
            }
        });

        const query = `
            SELECT 
                c.id AS comentario_id,
                c.texto AS comentario_texto, 
                DATE_FORMAT(c.data, "%d/%m/%Y %H:%i") AS comentario_data,
                u.id AS usuario_id,
                u.foto AS usuario_foto,
                u.apelido AS usuario_apelido,
                j.id AS jogo_id,
                j.nome AS jogo_nome,
                TRIM(a.avaliacao / 2)+0 AS avaliacao,
                f.usuario_id AS favorito
            FROM comentario c
            INNER JOIN jogo j ON c.jogo_id = j.id
            INNER JOIN usuario u ON c.usuario_id = u.id
            LEFT JOIN avaliacao a ON a.usuario_id = c.usuario_id AND a.jogo_id = c.jogo_id
            LEFT JOIN favorito f ON f.usuario_id = f.usuario_id AND f.jogo_id = c.jogo_id
            WHERE j.id = ${jogo.id}
            ORDER BY c.data DESC
            LIMIT 6`;

        comentarios = await db.query(query, { type: Sequelize.QueryTypes.SELECT });

        let contaFavorito;
        await Favorito.count({
            where: {
                jogo_id: id,
                usuario_id: req.session.usuario.id
            }
        }).then(result => {
            contaFavorito = result;
        });

        let contaColecao;
        await Colecao.count({
            where: {
                jogo_id: id,
                usuario_id: req.session.usuario.id
            }
        }).then(result => {
            contaColecao = result;
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
            title: 'Jogo',
            jogo,
            comentarios,
            jogosRelacionados,
            countComentarios,
            dominantColor,
            favorito: contaFavorito > 0 ? true : false,
            colecao: contaColecao > 0 ? true : false
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

    contaJaJoguei: async (id) => {

        let quantidade = 0
        whereClause = {}
        whereClause['usuario_id'] = id

        quantidade = await Colecao.count({
            where: whereClause
        });

        return quantidade;

    },

    contaFavorito: async (id) => {

        let quantidade = 0
        whereClause = {}
        whereClause['usuario_id'] = id

        quantidade = await Favorito.count({
            where: whereClause
        });

        return quantidade;
    },

    // Ações
    carregaComentario: async (req, res) => {
        try {

            let {
                jogo,
                indice
            } = req.query

            const countRestantes = await Comentario.count({
                limit: 5,
                order: [
                    ['data', 'DESC']
                ],
                where: {
                    jogo_id: jogo,
                    id: { [Op.lt]: indice }
                }
            });

            const query = `
                SELECT 
                    c.id AS comentario_id,
                    c.texto AS comentario_texto, 
                    DATE_FORMAT(c.data, "%d/%m/%Y %H:%i") AS comentario_data,
                    u.id AS usuario_id,
                    u.foto AS usuario_foto,
                    u.apelido AS usuario_apelido,
                    j.id AS jogo_id,
                    j.nome AS jogo_nome,
                    TRIM(a.avaliacao / 2)+0 AS avaliacao,
                    f.usuario_id AS favorito
                FROM comentario c
                INNER JOIN jogo j ON c.jogo_id = j.id
                INNER JOIN usuario u ON c.usuario_id = u.id
                LEFT JOIN avaliacao a ON a.usuario_id = c.usuario_id AND a.jogo_id = c.jogo_id
                LEFT JOIN favorito f ON f.usuario_id = f.usuario_id AND f.jogo_id = c.jogo_id
                WHERE j.id = ${jogo} AND c.id < ${indice}
                ORDER BY c.data DESC
                LIMIT 5`;

            const comentarios = await db.query(query, { type: Sequelize.QueryTypes.SELECT });

            res.render('./partials/comments', { layout: false, comentarios: comentarios, flagPerfilUsuario: false, countRestantes });

        } catch (error) {
            res.status(401)
        }
    },



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

            const dataFormatada = `${
                ts.getDate().toString().padStart(2, '0')}/${
                (ts.getMonth()+1).toString().padStart(2, '0')}/${
                ts.getFullYear().toString().padStart(4, '0')} ${
                ts.getHours().toString().padStart(2, '0')}:${
                ts.getMinutes().toString().padStart(2, '0')}`;

            const resposta = {
                comentario_texto: texto,
                comentario_data: dataFormatada,
                usuario_id: req.session.usuario.id,
                usuario_foto: req.session.usuario.foto,
                usuario_apelido: req.session.usuario.apelido,
                jogo_id: jogo
            }

            res.render('./partials/comments', { layout: false, comentarios: [resposta], flagPerfilUsuario: false });

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

            let existeFavorito;
            await Favorito.findOrCreate({
                where: {
                    jogo_id: jogo,
                    usuario_id: req.session.usuario.id
                }
            }).spread(function (favorito, created) {
                if (created) {
                    res.status(200).send(true);
                } else {
                    existeFavorito = true;
                }
            });

            if (existeFavorito) {
                Favorito.destroy({
                    where: {
                        jogo_id: jogo,
                        usuario_id: req.session.usuario.id
                    }
                }).then(() => {
                    res.status(200).send(false);
                });
            }
        }
        catch (error) {
            res.status(401)
        }
    },

    adicionaColecao: async (req, res) => {
        try {

            let {
                jogo
            } = req.body;

            let existeColecao;
            await Colecao.findOrCreate({
                where: {
                    jogo_id: jogo,
                    usuario_id: req.session.usuario.id
                }
            }).spread(function (colecao, created) {
                if (created) {
                    res.status(200).send(true);
                } else {
                    existeColecao = true;
                }
            });

            if (existeColecao) {
                Colecao.destroy({
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