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

                console.log("******** Busca Controller ********")
                let {item} = req.params;
                console.log(item)
                
                let user = await Usuario.findAll({
                        where: {
                                nome: {
                                        [Op.like]: '%'+item+'%'
                                }
                        }
                        // },
                        // order: [
                        //         ['nome', 'ASC']
                        // ]
                })
                res.send(user);
        },

        jogos: (req, res) => {

        }

}

module.exports = buscaController;