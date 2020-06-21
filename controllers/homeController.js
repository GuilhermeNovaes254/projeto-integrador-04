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
const local = require('./localizacaoController');
const jogoCtrl = require('./jogoController');
const Sequelize = require('sequelize')
const config = require('../config/database');
const db = new Sequelize(config)
const Op = Sequelize.Op;

const homeController = {


    index: async (req, res) => {

        const jogos = await busca.listaJogos(10, ['notaJogo', 'DESC']);

        res.render('index', {
            title: 'Home',
            jogos
        });

    },

    loginError: async (req, res) => {

        const jogos = await busca.listaJogos(10);

        res.render('index', {
            title: 'Home',
            jogos
        });

    },


    feeds: async (req, res) => {
        const jogos = await busca.listaJogos(10, ['notaJogo', 'DESC']);
        const jogosRecentes = await busca.listaJogos(10, ['id', 'DESC']);

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

        res.render('cadastroJogo', {
            title: 'Cadastro Jogo',
            apelidoUsuario: req.session.usuario.apelido,
            temas,
            dominios,
            mecanicas,
            formData: req.body,
            foto,
            fotoTema,
            idUsuario: req.session.usuario.id
        });
    },

    perfil: async (req, res) => {

        let { id } = req.params;

        // const comentarios = await Comentario.findAll({
        //     order: [
        //         ['data', 'ASC']
        //     ],
        //     where: {
        //         usuario_id: id
        //     },
        //     order: [['id', 'DESC']],
        //     include: [{
        //         model: Usuario,
        //         as: 'usuario'
        //     }, {
        //         model: Jogo,
        //         as: 'jogo'
        //     }]
        // });

        const query = `
            SELECT 
                c.id AS comentario_id,
                c.texto AS comentario_texto, 
                DATE_FORMAT(c.data, "%d/%m/%Y %H:%i") AS comentario_data,
                u.id AS usuario_id,
                u.foto AS usuario_foto,
                u.apelido AS usuario_apelido,
                j.id AS jogo_id,
                j.nome AS jogo_nome,
                TRIM(a.avaliacao / 2)+0 AS avaliacao,
                f.usuario_id AS favorito,
                joguei.usuario_id AS joguei
            FROM comentario c
            INNER JOIN jogo j ON c.jogo_id = j.id
            INNER JOIN usuario u ON c.usuario_id = u.id
            LEFT JOIN avaliacao a ON a.usuario_id = c.usuario_id AND a.jogo_id = c.jogo_id
            LEFT JOIN favorito f ON f.usuario_id = u.id AND f.jogo_id = c.jogo_id
            LEFT JOIN joguei ON joguei.usuario_id = u.id AND joguei.jogo_id = c.jogo_id
            WHERE c.usuario_id = ${id}
            ORDER BY c.data DESC`;

        let comentarios = await db.query(query, { type: Sequelize.QueryTypes.SELECT });
        console.log(comentarios);

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

        const { jogosFavoritos, countFavoritos } = await busca.listaJogosFavoritos(6, usuario.id);
        const { jogosColecao, countColecao } = await busca.listaJogosColecao(6, usuario.id);


        res.render('perfil', {
            title: 'Perfil',
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
            countFavoritos,
            jogosColecao,
            countColecao
        });
    },


    busca: async (req, res) => {

        let {
            nomeJogo,
            tema,
            dominio,
            mecanica,
            nomeUsuario,
            tipo
        } = req.query;

        let busca = []
        let whereClause = {};

        if (tipo = 'jogo' && tipo !== undefined) {
            if (nomeJogo != '') {
                whereClause['nome'] = {
                    [Op.like]: '%' + nomeJogo + '%'
                };
            }

            whereClause['aprovado'] = 1;

            if (tema != 0) {
                whereClause['tema_id'] = tema;
            }

            if (dominio != 0) {
                whereClause['dominio_id'] = dominio;
            }

            if (mecanica != 0) {
                whereClause['mecanica_id'] = mecanica;
            }

            busca = await Jogo.findAll({
                order: [
                    ['nome', 'ASC']
                ],
                where: whereClause
            })
        }

        res.render('busca', {
            title: 'Busca',
            apelidoUsuario: req.session.usuario.apelido,
            idUsuario: req.session.usuario.id,
            jogos: busca
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

        res.render('perfilModerador', {
            title: 'Perfil Moderador',
            apelidoUsuario: req.session.usuario.apelido,
            idUsuario: req.session.usuario.id
        });
    },

    moduloDestaques: async (req, res) => {

        let { id, tipo } = req.query

        const usuario = await busca.dadosUsuarioController(id)
        const estado = await local.buscaEstadoController(usuario.cidade_estado_id)
        const cidade = await local.buscaCidadeController(usuario.cidade_id)
        const favoritos = await jogoCtrl.contaFavorito(id)
        const jogados = await jogoCtrl.contaJaJoguei(id)


        let jogos;
        if (tipo == 1) {
            jogos = await busca.listaJogosColecao(100, id)
        } else {
            jogos = await busca.listaJogosFavoritos(100, id)
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

            title: 'Módulo Destaques',
            cidadeUsuario: CIDADE,
            estadoUsuario: ESTADO,
            jogos: tipo == 1 ? jogos.jogosColecao : jogos.jogosFavoritos,
            fotoTemaUsuario: usuario.fotoTema,
            fotoUsuario: usuario.foto,
            nomeUsuario: usuario.nome,
            apelidoUsuario: usuario.apelido,
            descricaoUsuario: usuario.descricao,
            favoritos,
            jogados

        });
    },

    excluir: (req, res) => {

        res.render('excluir', {
            title: 'Excluir',
            nomeUsuario: req.session.usuario.nome,
            apelidoUsuario: req.session.usuario.apelido,
            idUsuario: req.session.usuario.id
        });
    },

    editar: async (req, res) => {

        userInfo = req.session.usuario;
        let foto;
        let fotoTema;

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
            idUsuario: req.session.usuario.id,
            formData: req.body,
            foto,
            fotoTema,
            moderador: req.session.usuario.cargo === 0 ? 1 : 0
        });

    },

    semPrivilegio: (req, res) => {

        res.render('semPrivilegio', {
            title: 'Sem Privilégio',
            apelidoUsuario: req.session.usuario.apelido,
            idUsuario: req.session.usuario.id
        });
    },

};



module.exports = homeController;