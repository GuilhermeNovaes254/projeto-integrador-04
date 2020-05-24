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
                        return res.status(200).json(error)
                })


                res.send(user);
        },

        jogos: async (req, res) => {
                console.log('**** Passei no BuscaController ****')
                let {
                        tema, dominio,mecanica
                } = req.params;

                console.log('passei no BuscaController')
                
                if(tema != 0){
                        var temaData = await Tema.findOne({
                                where: {
                                        nome: tema
                                }
                        })
                }

                if(dominio != 0){
                        var dominioData = await Dominio.findOne({
                                where: {
                                        nome: tema
                                }
                        })
                }

                if(mecanica != 0){
                        let mecanicaData = await Mecanica.findOne({
                                where: {
                                        nome: tema
                                }
                        })
                }


                let jogoTema = await Jogo.findAll({
                        where: {
                                tema_id: temaData
                        },
                        order: [
                                ['nome', 'ASC']
                        ]
                });

                let jogoDomino = await Jogo.findAll({
                        where: {
                                dominio_id: dominioData
                        },
                        order: [
                                ['nome', 'ASC']
                        ]
                });

                let jogoMecanica = await Jogo.findAll({
                        where: {
                                mecanica_id: mecanicaData
                        },
                        order: [
                                ['nome', 'ASC']
                        ]
                });

                
                res.send(jogoTema);

                
        }

}

module.exports = buscaController;