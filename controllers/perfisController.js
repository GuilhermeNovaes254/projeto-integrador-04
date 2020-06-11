const {
    Usuario,
    Jogo
} = require('../models')


const aprovaPerfis = {

    perfilAdm: async (req, res) => {

        //cargo = 0 [usuário], 1 [moderador], 2[adm]
        //aprovado = 0 [pendente], 1 [aprovado], 2[negado]
        try {
            let moderadores = await Usuario.findAll({
                raw: true,
                order: [
                    ['nome', 'ASC']
                ],
                where: {
                    cargo: 1
                }
            });

            //if (moderadores) {
            const pendentes = moderadores.filter(moderador => moderador.aprovado == 0);
            const countPendente = pendentes.length;
            const countAprovado = moderadores.filter(moderador => moderador.aprovado == 1).length;
            const countNegado = moderadores.filter(moderador => moderador.aprovado == 2).length;

            const countStatus = {
                pendentes: countPendente ? countPendente : 0,
                aprovados: countAprovado ? countAprovado : 0,
                negados: countNegado ? countNegado : 0
            }

            res.render('perfilAdm', {
                title: 'perfilAdm',
                apelidoUsuario: req.session.usuario.apelido,
                countStatus,
                pendentes
            });

        } catch{
            res.status(400);
        }
    },

    aprovaModerador: async (req, res) => {
        try {
            let { id } = req.params;
            let whereClause = {};
            whereClause['id'] = id;

            await Usuario.update({
                aprovado: 1
            }, {
                where: whereClause
            })

            res.redirect('/perfilAdm')

        } catch (error) {
            res.status(401)
        }
    },

    reprovaModerador: async (req, res) => {        
        try {
            let { id } = req.params;
            let whereClause = {};
            whereClause['id'] = id;

            await Usuario.update({
                aprovado: 2
            }, {
                where: whereClause
            })

            res.redirect('/perfilAdm')

        } catch (error) {
            res.status(401)
        }
    },

    //**** USUARIOS ****
    aprovaAdm: async (req, res) => {
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

            res.send(busca)

        } catch (error) {
            res.status(401)
        }
    },

    //  **** JOGOS ****
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

            await Jogo.update({
                aprovado: 1
            }, {
                where: {
                    id: id
                }
            })

            return res.redirect('/perfilModerador')

        } catch (error) {
            res.status(401)
        }
    },


    negaJogo: async (req, res) => {
        try {
            let {
                id
            } = req.query

            await Jogo.update({
                aprovado: 2
            }, {
                where: {
                    id: id
                }
            })

            return res.redirect('/perfilModerador')

        } catch (error) {
            res.status(401)
        }
    },

}

module.exports = aprovaPerfis;