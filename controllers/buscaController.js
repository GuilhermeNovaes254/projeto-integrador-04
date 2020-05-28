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
              try {  
                let {
                        tema,
                        dominio,
                        mecanica
                } = req.query;

                let  resTema = []
                let  resDominio = []
                let  resMecanica = []
                               
                if (tema != 0) {

                        resTema = await Jogo.findAll({
                                where: {
                                        tema_id: tema
                                }
                        })

                }


                if (dominio != 0) {
                        
                        resDominio = await Jogo.findAll({
                                where: {
                                        dominio_id: dominio
                                }
                        })
                }

                if (mecanica != 0) {

                        resMecanica = await Jogo.findAll({
                                where: {
                                        mecanica_id: mecanica
                                }
                        })

                }

                res.send({resTema, resDominio, resMecanica});

                }catch(error){
                        res.status(401)
                }
        }

        
}

module.exports = buscaController;