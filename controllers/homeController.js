const {
    Cidade,
    Dominio,
    Estado,
    Mecanica,
    Tema,
    Comentario,
    Usuario,
    Jogo
} = require('../models')
const busca = require('./buscaController');
const local = require('./localizacaoController')

const homeController = {


    index: async (req, res) => {

        const jogos = await busca.listaJogos(10);

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

        const jogos = await busca.listaJogos(10, ['notaJogo', 'DESC']);
        const jogosRecentes = await busca.listaJogos(10, ['id', 'DESC']);

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

        let { id } = req.params;

        const comentarios = await Comentario.findAll({
            order: [
                ['data', 'ASC']
            ],
            where: {
                usuario_id: id
            },
            order: [['id', 'DESC']],
            include: [{
                model: Usuario,
                as: 'usuario'
            }, {
                model: Jogo,
                as: 'jogo'
            }]
        });

        const usuario = await Usuario.findOne({
            where: {
                id: id
            }
        });

        let cidade;
        if (usuario.cidade_id != null) {
            cidade = await Cidade.findOne({
                where: {
                    id: usuario.cidade_id
                }
            });
        }

        let estado;
        if (usuario.cidade_estado_id != null) {
            estado = await Estado.findOne({
                where: {
                    id: usuario.cidade_estado_id
                }
            });
        }

        const jogosFavoritos = await busca.listaJogosFavoritos(6, usuario.id);
        const jogosColecao = await busca.listaJogosColecao(6, usuario.id);


        res.render('perfil', {
            title: 'perfil',
            apelidoUsuario: usuario.apelido,
            fotoUsuario: usuario.foto,
            temaUsuario: usuario.fotoTema,
            nomeUsuario: usuario.nome,
            descricaoUsuario: usuario.descricao,
            cidadeUsuario: cidade ? cidade.cidade : '',
            estadoUsuario: estado ? estado.sigla : '',
            idUsuario: usuario.id,
            comentarios,
            jogosFavoritos,
            jogosColecao
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
        var errors;
        res.render('cadastro', {
            title: 'Cadastro',
            formData: req.body,
            errors
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

        let { id, tipo } = req.query

        const usuario = await busca.dadosUsuarioController(id)
        const estado = await local.buscaEstadoController(usuario.cidade_estado_id)
        const cidade = await local.buscaCidadeController(usuario.cidade_id)

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        let jogos;
        if (tipo == 1) {
            jogos = await busca.listaJogosColecao(100, id)
        } else {
            jogos = await busca.listaJogosFavoritos(100, id)
        }

        if (usuario.foto != 'images/icons/PerfilVermelho.png') {
            fotoUsuario = usuario.foto
        }

        let CIDADE
        if (cidade == null) {
            CIDADE = ''
        } else {
            CIDADE = cidade.cidade
        }

        let ESTADO
        if (estado == null) {
            ESTADO = ''
        } else {
            ESTADO = estado.sigla
        }

        res.render('moduloDestaques', {

            title: 'moduloDestaques',
            cidadeUsuario: CIDADE,
            estadoUsuario: ESTADO,
            jogos,
            fotoTemaUsuario: usuario.fotoTema,
            fotoUsuario: usuario.foto,
            nomeUsuario: usuario.nome,
            apelidoUsuario: usuario.apelido,
            descricaoUsuario: usuario.descricao

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
        let foto;
        let fotoTema;

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

        let estado = ''
        if (userInfo.cidade_estado_id != null) {
            estado = await Estado.findOne({
                where: {
                    id: userInfo.cidade_estado_id
                }
            });
        } else {
            estado = '-'
        }
        let diaNasc, mesNasc, anoNasc;
        if (userInfo.dataDeNascimento != null) {
            diaNasc = userInfo.dataDeNascimento.slice(8, 10);
            mesNasc = userInfo.dataDeNascimento.slice(5, 7);
            anoNasc = userInfo.dataDeNascimento.slice(0, 4);
        }
        res.render('editar', {
            title: 'Atualizar Informações',
            genero: userInfo.genero,
            estado: userInfo.cidade_estado_id,
            cidade: userInfo.cidade_id,
            diaNasc,
            mesNasc,
            anoNasc,
            nivelAp: userInfo.tipoAp,
            apelidoUsuario: userInfo.apelido,
            nomeUsuario: userInfo.nome,
            descricaoUsuario: userInfo.descricao,
            cidadeUsuario: cidade.cidade ? cidade.cidade : '',
            estadoUsuario: estado.sigla ? estado.sigla : '',
            fotoUsuario,
            idUsuario: req.session.usuario.id,
            formData: req.body,
            foto,
            fotoTema
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