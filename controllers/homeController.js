const {
    Cidade,
    Dominio,
    Estado,
    Mecanica,
    Tema,
} = require('../models')

const homeController = {


    index: (req, res) => {
        res.render('index', {
            title: 'Home'
        });

    },

    loginError: (req, res) => {
        res.render('loginError', {
            title: 'Erro Login'
        });

    },


    feeds: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        res.render('feeds', {
            title: 'Feeds',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario

        });
    },

    cadastroJogo: async (req, res) => {
        var temas = await Tema.findAll();
        var dominios = await Dominio.findAll();
        var mecanicas = await Mecanica.findAll();
        var errors;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto,
            fotoUsuario
        }

        res.render('cadastroJogo', {
            title: 'Cadastro Jogo',
            apelidoUsuario: req.session.usuario.apelido,
            temas,
            dominios,
            mecanicas,
            fotoUsuario,
            formData: req.body,
            errors
        });
    },

    perfil: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto,
            fotoUsuario
        }

        res.render('perfil', {
            title: 'perfil',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            nomeUsuario : req.session.usuario.nome,
            apelidoUsuario : req.session.usuario.apelido,
            descricaoUsuario : req.session.usuario.descricao,
            cidadeUsuario : req.session.usuario.cidade,
            estadoUsuario : req.session.usuario.estado
        });
    },

    jogo: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto,
            fotoUsuario
        }

        res.render('jogo', {
            title: 'jogo',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario
        });
    },

    busca: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        res.render('busca', {
            title: 'busca',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario
        });
    },

    cadastro: (req, res) => {
        res.render('cadastro', {
            title: 'cadastro'
        });
    },

    perfilAdm: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        res.render('perfilAdm', {
            title: 'perfilAdm',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario
        });
    },

    perfilModerador: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        res.render('perfilModerador', {
            title: 'perfilModerador',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario
        });
    },

    moduloDestaques: async (req, res) => {

        userInfo = req.session.usuario;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        let cidade = await Cidade.findOne({
            where: {
                id: userInfo.cidade_id
            }
        });

        let estado = await Estado.findOne({
            where: {
                id: cidade.estado_id
            }
        });


        res.render('moduloDestaques', {

            title: 'moduloDestaques',
            apelidoUsuario: userInfo.apelido,
            nomeUsuario: userInfo.nome,
            descricaoUsuario: userInfo.descricao,
            cidadeUsuario: cidade.cidade,
            estadoUsuario: estado.sigla,
            fotoUsuario
        });
    },

    excluir: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        res.render('excluir', {
            title: 'excluir',
            nomeUsuario: req.session.usuario.nome,
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario
        });
    },

    editar: async (req, res) => {

        userInfo = req.session.usuario;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        let cidade = await Cidade.findOne({
            where: {
                id: userInfo.cidade_id
            }
        });

        let estado = await Estado.findOne({
            where: {
                id: cidade.estado_id
            }
        });

        res.render('editar', {
            title: 'editar',

            apelidoUsuario: userInfo.apelido,
            nomeUsuario: userInfo.nome,
            descricaoUsuario: userInfo.descricao,
            cidadeUsuario: cidade.cidade,
            estadoUsuario: estado.sigla,
            fotoUsuario
        });

    },

    semPrivilegio: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto
        }

        res.render('semPrivilegio', {
            title: 'Sem Privilégio',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario
        });
    },

};



module.exports = homeController;