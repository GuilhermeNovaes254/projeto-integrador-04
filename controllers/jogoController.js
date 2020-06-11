const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
    Joguei,
    Favorito,
    Comentario,
    Colecao,
    Avaliacao
} = require('../models')



const jogoController = {

    // Funcoes de conta **************************
    contaAvalicao: async (req, res) => {
        try {
            let {
                id
            } = req.query
            
            let soma = 0 
            let quantidade = 0
            let valor = 0

            whereClause = {}
            whereClause['jogo_id'] = id

            quantidade = await Avaliacao.count({
                where: whereClause
            });
            
            soma = await Avaliacao.sum('avaliacao',{
                where: whereClause
            });

            valor = (soma/quantidade).toFixed(1);
            console.log(valor)
            //res.send(valor)

        } catch (error) {
            res.status(401)
        }
    },
    
        contaJaJoguei: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        contaFavorito: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        // Funcoes de carregar dados **************************
        carregaJogoId: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        carregaJogosRelac: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        carregaComentario: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },


        // Funcoes de postar dados **************************
        postaComentario: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        postaAvaliacao: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        postaJaJoguei: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },

        postaAmei: async (req, res) => {
            try {


            } catch (error) {
                res.status(401)
            }
        },
    

};

module.exports = jogoController