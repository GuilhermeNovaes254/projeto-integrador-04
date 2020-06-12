const {
    Cidade,
    Dominio,
    Jogo,
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

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        res.render('feeds', {
            title: 'Feeds',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            idUsuario: req.session.usuario.id

        });
    },

    cadastroJogo: async (req, res) => {
        var temas = await Tema.findAll();
        var dominios = await Dominio.findAll();
        var mecanicas = await Mecanica.findAll();
        let foto;
        let fotoTema;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
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
            foto,
            fotoTema,
            idUsuario: req.session.usuario.id
        });
    },

    perfil: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto,
                fotoUsuario
        }

        res.render('Perfil', {
            title: 'perfil',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            nomeUsuario: req.session.usuario.nome,
            apelidoUsuario: req.session.usuario.apelido,
            descricaoUsuario: req.session.usuario.descricao,
            cidadeUsuario: req.session.usuario.cidade,
            estadoUsuario: req.session.usuario.estado,
            idUsuario: req.session.usuario.id
        });
    },

    jogo: (req, res) => {

        let {
            id
        } = req.query;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto,
                fotoUsuario
        }

        res.render('jogo', {
            title: 'jogo',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            id,
            idUsuario: req.session.usuario.id
        });
    },

    busca: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        res.render('busca', {
            title: 'busca',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            idUsuario: req.session.usuario.id
        });
    },

    cadastro: (req, res) => {
        res.render('cadastro', {
            title: 'cadastro'
        });
    },

    perfilModerador: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        res.render('perfilModerador', {
            title: 'perfilModerador',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            idUsuario: req.session.usuario.id
        });
    },

    moduloDestaques: async (req, res) => {

        userInfo = req.session.usuario;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        let cidade
        if (userInfo.cidade_id != null) {
            cidade = await Cidade.findOne({
                where: {
                    id: userInfo.cidade_id
                }
            });
        } else {
            cidade = '-'
        }      

        let estado
        if (cidade.estado_id != null) {
            estado = await Estado.findOne({
                where: {
                    id: cidade.estado_id
                }
            });
        } else {
            estado = '-'
        }


        res.render('moduloDestaques', {

            title: 'moduloDestaques',
            apelidoUsuario: userInfo.apelido,
            nomeUsuario: userInfo.nome,
            descricaoUsuario: userInfo.descricao,
            cidadeUsuario: cidade.cidade,
            estadoUsuario: estado.sigla,
            fotoUsuario,
            idUsuario: req.session.usuario.id
        });
    },

    excluir: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        res.render('excluir', {
            title: 'excluir',
            nomeUsuario: req.session.usuario.nome,
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            idUsuario: req.session.usuario.id
        });
    },

    editar: async (req, res) => {

        userInfo = req.session.usuario;

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        let cidade
        if (userInfo.cidade_id != null) {
            cidade = await Cidade.findOne({
                where: {
                    id: userInfo.cidade_id
                }
            });
        }else {
            cidade = '-'
        }
        
        let estado = ''
        if (cidade.estado_id != null) {
            estado = await Estado.findOne({
                where: {
                    id: cidade.estado_id
                }
            });
        } else {
            estado = '-'
        }

        res.render('editar', {
            title: 'Atualizar Informações',

            apelidoUsuario: userInfo.apelido,
            nomeUsuario: userInfo.nome,
            descricaoUsuario: userInfo.descricao,
            cidadeUsuario: cidade.cidade ? cidade.cidade : '',
            estadoUsuario: estado.sigla ? estado.sigla : '',
            fotoUsuario,
            idUsuario: req.session.usuario.id
        });

    },

    semPrivilegio: (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        res.render('semPrivilegio', {
            title: 'Sem Privilégio',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            idUsuario: req.session.usuario.id
        });
    },

};



module.exports = homeController;