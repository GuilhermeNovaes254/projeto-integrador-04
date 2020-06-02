const Sequelize = require('sequelize');

const {
        Usuario,
        Jogo
} = require('../models')


const aprovaPerfis = {

        perfilAdm: async (req, res) => {
            try{
                let busca = [];

                let whereClause = {};

                whereClause['aprovado'] = 0;

                whereClause['cargo'] = 1;

                busca = await Usuario.findAll({
                    order: [
                            ['nome', 'ASC']
                    ],
                    where: whereClause
            })

            }catch(error) {
                res.status(401)
            }
        },


        perfilModerador: async (req, res) => {
            try{
                let busca = []

                whereClause = []

                whereClause['aprovado'] = 0;

                busca = await Jogo.findAll({
                    order:[['nome','ASC']],
                    where: whereClause
                })

            }catch(error) {
                res.status(401)
            }
        },
}

module.exports = aprovaPerfis;