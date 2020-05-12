const {Usuario} = require('../models')
const bcrypt = require('bcrypt')

const formsController = {

    cadastroUsuario: async (req, res) => {
        let {nome, email,senha} = req.body;

        if(nome.length < 3 || email.length < 10 || senha.length < 3){
            res.redirect('/login/error');
        }


        Usuario.create({
            nome : nome,
            email: email,
            senha: bcrypt.hashSync(senha,10),
            cargo: 0, //usuario comum
            aprovado: 1 
        });

        res.render('perfil', {
            title: 'Perfil'
        });
    },

};


module.exports = formsController;