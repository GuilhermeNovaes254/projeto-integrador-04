const {
    Usuario
} = require('../models')
const bcrypt = require('bcrypt')

const forms = {

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

    excluirUsuario: async (req, res) => {
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
    },

    editarUsuario: async (req, res) => {
        let {
            nomeJogo,
            apelido,
            genero,
            estado,
            cidade,
            diaNasc,
            mesNasc,
            anoNasc,
            tipoNivelAP,
            descricaoJogo,
            senha,
            senha2,
            avatar
        } = req.body;

        let id = req.session.usuario.id

        const user = await Usuario.findOne({
            where: {
                id: id
            }
        });

        if (nomeJogo != '') {
            user.nome = nomeJogo;
        }
        if (apelido != '') {
            user.apelido = apelido;
        }
        if (genero != '') {
            user.genero = genero;
        }
        if (estado != '') {
            user.cidade_estado_id = estado;
        }
        if (cidade != '') {
            user.cidade_id = cidade;
        }
        if (tipoNivelAP != '') {
            user.tipoAp = tipoNivelAP;
        }
        if (descricaoJogo != '') {
            user.descricao = descricaoJogo;
        }
        if (senha != '' && senha == senha2) {
            user.senha = bcrypt.hashSync(senha, 10);
        }
        if (avatar != '') {
            user.foto = '../public/images/avatar/' + avatar;
        }
        if (diaNasc != 0 && mesNasc != 0 && anoNasc != 0) {
            // Formatação da data YYYY-MM-DD.
            diaNasc = user.dataDeNascimento.substring(0, 4);
            mesNasc = user.dataDeNascimento.substring(5, 7);
            anoNasc = user.dataDeNascimento.substring(8, 10);
            user.dataDeNascimento = `${anoNasc}-${mesNasc}-${diaNasc}`
        }
    }
};



module.exports = forms