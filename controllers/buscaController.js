const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
        Usuario,
        Jogo
} = require('../models')


const buscaController = {

        usuarios: async (req, res) => {

                let {
                        item
                } = req.params;

                let user = await Usuario.findAll({
                        where: {
                                nome: {
                                        [Op.like]: '%' + item + '%'
                                }
                        },
                        order: [
                                ['nome', 'ASC']
                        ]
                }).then(users => {
                        return res.status(200).json(users)
                }).catch(error => {
                        return res.status(400).json(error)
                })


                res.send(user);
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


                        let whereClause ={};

                        if (nome != '') {
                                console.log("daniele");
                                whereClause['nome'] = { 
                                  [Op.like]: '%' + nome + '%'
                                };
                        }

                        if(tema != 0){
                                whereClause['tema_id'] = tema;
                        }

                        if(dominio != 0){
                                whereClause['dominio_id'] = dominio;
                        }

                        if(mecanica != 0){
                                whereClause['mecanica_id'] = mecanica;
                        }

                        console.log(whereClause);
                        // if (tema != 0 && dominio != 0 && mecanica != 0) {
                                busca = await Jogo.findAll({
                                        order: [
                                                ['nome', 'ASC']
                                              ],
                                        where: whereClause
                                })
                        // }

                        res.send(busca)

                } catch (error) {
                        res.status(401)
                }
        }


}

module.exports = buscaController;