var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const {
    check,
    validationResult,
    body
} = require('express-validator');

var storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({
    storage: storage
})

const {
    Jogo
} = require('../models');


// Controllers
const homeController = require('../controllers/homeController');
const autorizaLogin = require('../controllers/autorizaLoginController');
const formController = require('../controllers/formsController');
const localizacaoController = require('../controllers/localizacaoController');
const buscaController = require('../controllers/buscaController');
const parametrosJogoController = require('../controllers/parametrosJogoController')
const perfisController = require('../controllers/perfisController')
const elementosJogos = require('../controllers/jogoController')

//API busca imagem
const imagemController = require('../controllers/imagemController');
router.get('/buscaImagem/:nomeImagem', imagemController.buscaImagem);

// Middlewares
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const VerificaAdm = require('../middlewares/VerificaAdm');
const VerificaMod = require('../middlewares/VerificaModerador');

// Sem verificação 
router.get('/', homeController.index);
router.get('/cadastro', homeController.cadastro);
router.get('/login/error', homeController.loginError);
router.get('/buscaEstado', localizacaoController.buscaEstado);
router.get('/buscaCidade/:id', localizacaoController.buscaCidade);
router.get('/buscaJogo', buscaController.jogos);
router.get('/buscaUsuario/:item', buscaController.usuarios);
router.get('/busca/usuario',buscaController.dadosUsuario);
router.get('/tema', parametrosJogoController.tema);
router.get('/dominio', parametrosJogoController.dominio);
router.get('/mecanica', parametrosJogoController.mecanica);
router.get('/tema/todos', parametrosJogoController.temaTodos);
router.get('/dominio/todos', parametrosJogoController.dominioTodos);
router.get('/mecanica/todos', parametrosJogoController.mecanicaTodos);

router.get('/aprovaAdm',perfisController.perfilAdm)
router.get('/adm/conta',perfisController.listaNumUsuarios)


router.get('/mod/conta',perfisController.listaNumJogos)
router.get('/aprovaMod',perfisController.perfilModerador)
router.get('/aprovaMod/aprova',perfisController.aprovaJogo)
router.get('/aprovaMod/nega',perfisController.negaJogo)

router.get('/buscaJogo/lista', buscaController.listaJogos)

// Tela Jogo
// Tela Jogo--Sem verificaxao
router.get('/jogo/elementos/avaliacao', elementosJogos.contaAvalicao)
router.get('/jogo/elementos/joguei', VerificaUsuarioLogado, elementosJogos.contaJaJoguei)
router.get('/jogo/elementos/favorito', elementosJogos.contaFavorito)
router.get('/jogo/elementos/comentario', elementosJogos.carregaComentario)
router.get('/jogo/elementos/avaliacao/carrega', elementosJogos.carregaAvaliacao)

// Tela Jogo--Com verificacao
router.post('/jogo/elementos/comentario', VerificaUsuarioLogado, elementosJogos.postaComentario)
router.post('/jogo/elementos/avaliacao/:jogo/:nota', VerificaUsuarioLogado, elementosJogos.postaAvaliacao)
router.post('/jogo/elementos/joguei', VerificaUsuarioLogado, elementosJogos.postaJaJoguei)
router.post('/jogo/elementos/amei', VerificaUsuarioLogado, elementosJogos.postaAmei)


// Com verificação
router.get('/feeds', VerificaUsuarioLogado, homeController.feeds);
router.get('/cadastroJogo', VerificaUsuarioLogado, homeController.cadastroJogo);
router.get('/perfil/:id', VerificaUsuarioLogado, homeController.perfil);
router.get('/jogo', VerificaUsuarioLogado, elementosJogos.jogo);
router.get('/busca', VerificaUsuarioLogado, homeController.busca);
router.get('/moduloDestaques', VerificaUsuarioLogado, homeController.moduloDestaques);
router.get('/excluir', VerificaUsuarioLogado, homeController.excluir);
router.get('/semPrivilegio', VerificaUsuarioLogado, homeController.semPrivilegio);
router.get('/editar', VerificaUsuarioLogado, homeController.editar);

// Páginas Restritas
router.get('/perfilModerador', VerificaMod, VerificaUsuarioLogado, homeController.perfilModerador);
router.get('/perfilAdm', VerificaAdm, VerificaUsuarioLogado, perfisController.perfilAdm);
router.get('/perfilAdm/aprovaModerador/:id', VerificaAdm, VerificaUsuarioLogado, perfisController.aprovaModerador);
router.get('/perfilAdm/reprovaModerador/:id', VerificaAdm, VerificaUsuarioLogado, perfisController.reprovaModerador);
// router.get('/perfilModerador', VerificaUsuarioLogado, homeController.perfilModerador);
// router.get('/perfilAdm', VerificaUsuarioLogado, homeController.perfilAdm);


// POSTS 
router.post('/login', autorizaLogin.loginSession);

// POSTS formulario
router.post('/cadastro', formController.cadastroUsuario);
router.post('/excluir', VerificaUsuarioLogado, formController.excluirUsuario);
router.post('/editar', VerificaUsuarioLogado, upload.any(), [
    check("nomeUser").isLength({
        min: 2,
        max: 100
    })
    .withMessage("Nome deve conter no mínimo 2 e no máximo 100 caracteres!"),
    check("apelido").isLength({
        min: 2,
        max: 20
    })
    .withMessage("Apelido deve conter no mínimo 2 e no máximo 20 caracteres!"),
    check("genero").toInt(),
    check("estado").toInt(),
    check("cidade").toInt(),
    check("tipoNivelAP").toInt(),
    check("descricaoUser").isLength({
        max: 500
    })
    .withMessage("Descrição deve conter no máximo 500 caracteres!")
],formController.editarUsuario);

router.post('/cadastroJogo', VerificaUsuarioLogado, upload.any(), [
        check("nomeJogo").isLength({
            min: 2,
            max: 100
        })
        .withMessage("O nome do Jogo deve conter no mínimo 2 e no máximo 100 caracteres!"),
        check("descricaoJogo").isLength({
            max: 450
        })
        .withMessage("A descrição do Jogo deve conter no máximo 450 caracteres!"),
        check("duracao").toInt().isLength({
            max: 3
        })
        .withMessage("A duração do Jogo deve conter no máximo 3 caracteres!"),
        check("downtimeJogo").toInt(),
        check("tutorialJogo").isLength({
            max: 450
        })
        .withMessage("O tutorial do Jogo deve conter no máximo 450 caracteres!"),
        check("pesoJogo").toInt(),
        check("regrasJogo").isLength({
            max: 450
        })
        .withMessage("As regras do Jogo deve conter no máximo 450 caracteres!"),
        check("maxJogadores").toInt().isLength({
            max: 2
        })
        .withMessage("A quantidade máxima de jogadores deve conter no máximo 2 caracteres!"),
        check("minJogadores").toInt().isLength({
            max: 2
        })
        .withMessage("A quantidade mínima de jogadores deve conter no máximo 2 caracteres!"),
        check("temaJogo").toInt().isLength({
            min: 1
        })
        .withMessage("Tema é obrigatório!"),
        check("dominioJogo").toInt().isLength({
            min: 1
        })
        .withMessage("Domínio é obrigatório!"),
        check("mecanicaJogo").toInt().isLength({
            min: 1
        })
        .withMessage("Mecânica é obrigatório!"),
        check("video").isLength({
            max: 500
        })
        .withMessage("O link do Jogo deve conter no máximo 500 caracteres!"),
        body("nomeJogo").custom(value => {
                return Jogo.findOne({
                    where: {
                        nome: value
                    }
                }).then(jogo => {
                    if (jogo){
                        return Promise.reject("O jogo informado já está cadastrado!")
                    }
                });
            })
    ],
    formController.cadastrarJogo);

module.exports = router;