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
    },

    temaTodos: async (req, res) => {
        
        let tema = []
        tema = await Tema.findAll();
        res.send(tema);
    },

    dominioTodos: async (req, res) => {

        let dominio = await Dominio.findAll();
        res.send(dominio);
    },

    mecanicaTodos: async (req, res) => {
        
        let mecanica = await Mecanica.findAll();
        res.send(mecanica);
    },
}

module.exports = parametros;