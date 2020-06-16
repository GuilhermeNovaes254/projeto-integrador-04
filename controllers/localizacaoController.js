const {
    Cidade,
    Estado
} = require('../models')

const localizacao = {

    buscaEstado: async (req, res) => {
        let estado = await Estado.findAll();


        res.send(estado);
    },

    buscaCidade: async (req, res) => {

        let {
            id
        } = req.params;
        let cidade = await Cidade.findAll({
            where: {
                estado_id: id
            },
            order: [
                ['cidade', 'ASC']
            ]
        });


        res.send(cidade);
    },

    buscaEstadoController: async (idEstado) => {
        let estado = await Estado.findOne({
            where: {
                id: idEstado
            }
        });

        return estado
    },

    buscaCidadeController: async (idCidade) => {

        let cidade = await Cidade.findOne({
            where: {
                id: idCidade
            }
        });


        return cidade;
    }
};



module.exports = localizacao;