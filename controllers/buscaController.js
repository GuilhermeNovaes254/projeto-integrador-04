const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
        Usuario,
        Jogo,
        Favorito,
        Colecao
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


        jogos: async (req, res) => {
                try {
                        let {
                                nome,
                                tema,
                                dominio,
                                mecanica
                        } = req.query;

                        let busca = []


                        let whereClause = {};

                        if (nome != '') {
                                whereClause['nome'] = {
                                        [Op.like]: '%' + nome + '%'
                                };
                        }

                        whereClause['aprovado'] = 1;

                        if (tema != 0) {
                                whereClause['tema_id'] = tema;
                        }

                        if (dominio != 0) {
                                whereClause['dominio_id'] = dominio;
                        }

                        if (mecanica != 0) {
                                whereClause['mecanica_id'] = mecanica;
                        }

                        if (mecanica != 0) {
                                whereClause['mecanica_id'] = mecanica;
                        }

                        busca = await Jogo.findAll({
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

        listaJogos: async (limite, orderBy) => {
                try {
                        let busca = []

                        


                        busca = await Jogo.findAll({
                                limit: limite,
                                order: [
                                        ['id', 'DESC']
                                ],
                                order: [orderBy]
                        })

                        return busca;

                } catch (error) {
                        return null;
                }
        },

        listaJogosFavoritos: async (limite, idUsuario) => {
                try {
                        const favoritos = await Favorito.findAll({
                                limit: limite,
                                where: {
                                        usuario_id: idUsuario
                                },
                                include: [{
                                        model: Jogo,
                                        as: 'jogo'
                                }]
                        });

                        let jogosFavoritos = [];
                        for (let favorito of favoritos) {
                                jogosFavoritos.push(favorito.jogo);
                        }

                        return jogosFavoritos;
                } catch (error) {
                        return null;
                }
        },

        listaJogosColecao: async (limite, idUsuario) => {
                try {
                        const colecao = await Colecao.findAll({
                                limit: limite,
                                where: {
                                        usuario_id: idUsuario
                                },
                                include: [{
                                        model: Jogo,
                                        as: 'jogo'
                                }]
                        });

                        let jogosColecao = [];
                        for (let jogoColecao of colecao) {
                                jogosColecao.push(jogoColecao.jogo);
                        }

                        return jogosColecao;
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