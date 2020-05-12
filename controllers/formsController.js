const {
    Usuario
} = require('../models')
const bcrypt = require('bcrypt')

const formsController = {

    cadastroUsuario: async (req, res) => {
        let {
            nome,
            email,
            senha
        } = req.body;

        if (nome.length < 3 || email.length < 10 || senha.length < 3) {
            res.redirect('/login/error');
        }


        Usuario.create({
            nome: nome,
            email: email,
            senha: bcrypt.hashSync(senha, 10),
            cargo: 0, //usuario comum
            aprovado: 1
        });

        const user = await Usuario.findOne({
            where: {
                email
            }
        });

        req.session.usuario = user;

        res.render('perfil', {
            title: 'Perfil'
        });
    },

    excluiUsuario: async (req, res) => {
        let {
            nome
        } = req.body;
        console.log(nome)
        const user = await Usuario.findOne({
            where: {
                nome: nome
            }
        });

        let id = req.session.usuario.id;

        if (user.id != id) {
            res.redirect('/excluir');
        } else {

            Usuario.destroy({
                where: {
                    id: user.id
                }
            })

            req.session.destroy();
            res.render('index', {
                title: 'Home'
            });
        }
    }
};


module.exports = formsController;