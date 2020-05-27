const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
        Usuario,
        Mecanica,
        Tema,
        Dominio,
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

                let {
                        tema,
                        dominio,
                        mecanica
                } = req.params;


                if (tema != 0) {

                        // Não está funcionando
                        var jogoTema = await Jogo.findAll({
                                where: {
                                    tema_id: tema
                                }
                        }).then(temas => {
                                return res.status(200).json(temas)
                        }).catch(error => {
                                return res.status(400).json(error)
                        })

                }


                if (dominio != 0) {


                }


                if (mecanica != 0) {


                }

                res.send(jogoTema);


        }

}

module.exports = buscaController;