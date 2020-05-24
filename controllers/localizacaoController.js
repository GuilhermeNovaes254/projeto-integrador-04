const {Cidade, Estado} = require('../models')

const localizacao = {

    buscaEstado: async (req, res) => {
            let estado = await Estado.findAll();


            res.send(estado);
    },

    buscaCidade: async (req, res) => {

        let {id} = req.params;
        let cidade = await Cidade.findAll({
            where: {
                estado_id: id
            },
            order: [
                ['cidade', 'ASC']
            ]
        });

    
        res.send(cidade);
    }

};



module.exports = localizacao;