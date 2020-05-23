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
                let {buscaUsuario} = req.params;
                console.log(buscaUsuario)
                
                let user = await Usuario.findAll({
                        where: {
                                nome: {
                                        [Op.iLike]: '%'+buscaUsuario+'%'
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