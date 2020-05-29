const Sequelize = require('sequelize');

const {
    Mecanica,
    Tema,
    Dominio
} = require('../models')


const parametros = {

    tema: async (req, res) => {

        let {id} = req.query
   
        let resTema = []
        resTema = await Tema.findOne({
            where: {id: id}
        })
        res.send(resTema)
    },

    dominio: async (req, res) => {

        let {id} = req.query

        let resDominio = []
        resDominio = await Dominio.findOne({
            where: {id: id}
        })
        res.send(resDominio)
    },

    mecanica: async (req, res) => {

        let {id} = req.query

        let resMecanica = []
        resMecanica = await Mecanica.findOne({
            where: {id: id}
        })
        res.send(resMecanica)
    }
}

module.exports = parametros;