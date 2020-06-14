const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
        Usuario,
        Jogo
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
        
        listaJogos: async (limit) => {
                try {
                        // let {limite} = req.query

                        //limite = parseInt(limite)
                        console.log(limit)

                        let busca = []
        
                        busca = await Jogo.findAll({
                                limit: limit,
                                order: [
                                        ['id', 'DESC']
                                ]
                        })
        
                        return busca;

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
        }

}

module.exports = buscaController;