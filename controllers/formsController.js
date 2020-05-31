const {
    Cidade,
    Dominio,
    Estado,
    Jogo,
    Mecanica,
    Tema,
    Usuario
} = require('../models');
const bcrypt = require('bcrypt');
const {
    check,
    validationResult,
    body
} = require('express-validator');

const forms = {

    cadastroUsuario: async (req, res) => {
        let {
            nome,
            apelido,
            email,
            senha
        } = req.body;

        if (nome.length < 3 || apelido.length < 3 || email.length < 10 || senha.length < 3) {
            res.redirect('/login/error');
        }

        let fotoAvatar = 'images/icons/PerfilVermelho.png'

        Usuario.create({
            nome: nome,
            email: email,
            apelido: apelido,
            foto: fotoAvatar,
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
            title: 'Perfil',
            apelidoUsuario: apelido,
            fotoUsuario: fotoAvatar
        });
    },

    excluirUsuario: async (req, res) => {
        let {
            nome
        } = req.body;
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
    },

    cadastrarJogo: async (req, res) => {
        var temas = await Tema.findAll();
        var dominios = await Dominio.findAll();
        var mecanicas = await Mecanica.findAll();

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto,
            fotoUsuario
        }

        let listOfErrors = validationResult(req);

        if (listOfErrors.isEmpty()) {
            const {
                nomeJogo,
                anoJogo,
                faixaEtaria,
                duracao,
                descricaoJogo,
                temaJogo,
                minJogadores,
                maxJogadores,
                pesoJogo,
                dominioJogo,
                mecanicaJogo,
                downtimeJogo,
                tutorialJogo,
                regrasJogo
            } = req.body;

            let {
                files
            } = req;

            let foto = '';
            let fotoTema = '';

            for (let file of files) {
                if (file.fieldname == 'fotoTemaJogo') {
                    fotoTema = file.originalname
                }
                if (file.fieldname == 'fotoPerfilJogo') {
                    foto = file.originalname
                }
            }

            const jogo = await Jogo.create({
                nome: nomeJogo,
                ano: anoJogo,
                descricao: descricaoJogo,
                faixaEtaria: faixaEtaria,
                duracao: duracao,
                downtime: downtimeJogo,
                tutorial: tutorialJogo,
                peso: pesoJogo,
                regras: regrasJogo,
                qntMax: maxJogadores,
                qntMin: minJogadores,
                aprovado: 0,
                tema_id: temaJogo,
                dominio_id: dominioJogo,
                mecanica_id: mecanicaJogo,
                foto,
                fotoTema
            })

            return res.redirect('/feeds');


        }else {
            return res.render("cadastroJogo",  {errors:listOfErrors.errors,
                title: 'Cadastro Jogo',
                apelidoUsuario: req.session.usuario.apelido,
                temas,
                dominios,
                mecanicas,
                fotoUsuario
            })
        }
    }


};



module.exports = forms