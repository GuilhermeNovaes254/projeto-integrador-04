const {
    Cidade,
    Dominio,
    Estado,
    Mecanica,
    Tema,
    Comentario,
    Usuario
} = require('../models')
const busca = require('./buscaController');

const homeController = {


    index: async (req, res) => {

        const jogos = await busca.listaJogos(10)

        res.render('index', {
            title: 'Home',
            jogos
        });

    },

    loginError: (req, res) => {
        res.render('loginError', {
            title: 'Erro Login'
        });

    },


    feeds: async (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        const jogos = await busca.listaJogos(10);
        const jogosRecentes = await busca.listaJogos(2);

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto
        }

        res.render('feeds', {
            title: 'Feeds',
            jogos,
            jogosRecentes
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

    perfil: async (req, res) => {

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if (req.session.usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = req.session.usuario.foto,
                fotoUsuario
        }

        let whereClause = {};
        whereClause['usuario_id'] = req.session.usuario.id;
        const comentarios = await Comentario.findAll({
            order: [
                ['data', 'ASC']
            ],
             where: whereClause, 
             include: [{
                model: Usuario,
                as: 'usuario'
                }]
        });

        res.render('perfil', {
            title: 'perfil',
            apelidoUsuario: req.session.usuario.apelido,
            fotoUsuario,
            nomeUsuario: req.session.usuario.nome,
            apelidoUsuario: req.session.usuario.apelido,
            descricaoUsuario: req.session.usuario.descricao,
            cidadeUsuario: req.session.usuario.cidade,
            estadoUsuario: req.session.usuario.estado,
            idUsuario: req.session.usuario.id,
            comentarios
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