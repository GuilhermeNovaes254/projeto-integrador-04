const {
    Usuario,
    Jogo
} = require('../models')


const aprovaPerfis = {

    //**** USUARIOS ****
    perfilAdm: async (req, res) => {
        try {
            let busca = [];

            let whereClause = {};

            whereClause['aprovado'] = 0;

            whereClause['cargo'] = 1;

            console.log(whereClause)

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

    listaNumUsuarios: async (req, res) => {
        try {
            let {
                estado
            } = req.query
            let busca = []
            console.log(estado)
            let whereClause = {}

            if (estado == 'pendente') {
                whereClause['aprovado'] = 0;
                busca = await Usuario.findAll({
                    where: whereClause
                })
            }

            if (estado == 'aprovado') {
                whereClause['aprovado'] = 1;
                busca = await Usuario.findAll({
                    where: whereClause
                })
            }

            if (estado == 'negado') {
                whereClause['aprovado'] = 2;
                busca = await Usuario.findAll({
                    where: whereClause
                })
            }

            busca
            res.send(busca)

        } catch (error) {
            res.status(401)
        }
    },


    aprovaUsuario: async (req, res) => {
        try {
            let {
                id
            } = req.query

            Usuario.update({
                aprovado: 1
            }, {
                where: {
                    id: id
                }
            })

            res.status(200)

        } catch (error) {
            res.status(401)
        }
    },


    negaUsuario: async (req, res) => {
        try {
            let {
                id
            } = req.query

            Usuario.update({
                aprovado: 2
            }, {
                where: {
                    id: id
                }
            })

            res.status(200)

        } catch (error) {
            res.status(401)
        }
    },


    //**** JOGOS ****
    perfilModerador: async (req, res) => {
        try {
            let busca = []

            let whereClause = {}

            whereClause['aprovado'] = 0;

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



    listaNumJogos: async (req, res) => {
        try {
            let {
                estado
            } = req.query
            let busca = []
            console.log(estado)
            let whereClause = {}

            if (estado == 'pendente') {
                whereClause['aprovado'] = 0;
                busca = await Jogo.findAll({
                    where: whereClause
                })
            }

            if (estado == 'aprovado') {
                whereClause['aprovado'] = 1;
                busca = await Jogo.findAll({
                    where: whereClause
                })
            }

            if (estado == 'negado') {
                whereClause['aprovado'] = 2;
                busca = await Jogo.findAll({
                    where: whereClause
                })
            }


            res.send(busca)

        } catch (error) {
            res.status(401)
        }
    },

    aprovaJogo: async (req, res) => {
        try {
            let {
                id
            } = req.query

            Jogo.update({
                aprovado: 1
            }, {
                where: {
                    id: id
                }
            })

            res.status(200)

        } catch (error) {
            res.status(401)
        }
    },


    negaJogo: async (req, res) => {
        try {
            let {
                id
            } = req.query

            Jogo.update({
                aprovado: 2
            }, {
                where: {
                    id: id
                }
            })

            res.status(200)

        } catch (error) {
            res.status(401)
        }
    },






}

module.exports = aprovaPerfis;