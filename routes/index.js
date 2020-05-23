var express = require('express');
var router = express.Router();

// Controllers
const homeController = require('../controllers/homeController');
const autorizaLogin = require('../controllers/autorizaLoginController');
const formController = require('../controllers/formsController');
const localizacaoController = require('../controllers/localizacaoController');
const buscaController = require('../controllers/buscaController');

// Middlewares
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const VerificaAdm = require('../middlewares/VerificaAdm');
const VerificaMod = require('../middlewares/VerificaModerador');

// Sem verificação 
router.get('/', homeController.index);
router.get('/cadastro',homeController.cadastro);
router.get('/login/error', homeController.loginError);
router.get('/buscaEstado', localizacaoController.buscaEstado);
router.get('/buscaCidade/:id', localizacaoController.buscaCidade);
router.get('/buscaJogo/:tema/:mecanica/:dominio', buscaController.jogos);
router.get('/buscaUsuario/:item', buscaController.usuarios);



// Com verificação
router.get('/feeds', VerificaUsuarioLogado, homeController.feeds);
router.get('/cadastroJogo',VerificaUsuarioLogado, homeController.cadastroJogo);
router.get('/perfil', VerificaUsuarioLogado,homeController.perfil);
router.get('/jogo',VerificaUsuarioLogado,homeController.jogo);
router.get('/busca', VerificaUsuarioLogado,homeController.busca);
router.get('/moduloDestaques', VerificaUsuarioLogado,homeController.moduloDestaques);
router.get('/excluir', VerificaUsuarioLogado,homeController.excluir);
router.get('/semPrivilegio', VerificaUsuarioLogado,homeController.semPrivilegio);
router.get('/editar', VerificaUsuarioLogado,homeController.editar);

// Páginas Restritas
router.get('/perfilModerador', VerificaMod, VerificaUsuarioLogado, homeController.perfilModerador);
router.get('/perfilAdm', VerificaAdm, VerificaUsuarioLogado, homeController.perfilAdm);

// POSTS 
router.post('/login', autorizaLogin.loginSession);

// POSTS formulario
router.post('/cadastro', formController.cadastroUsuario);
router.post('/excluir', VerificaUsuarioLogado, formController.excluirUsuario);
router.post('/editar', VerificaUsuarioLogado, formController.editarUsuario);
router.post('/cadastroJogo', VerificaUsuarioLogado, formController.cadastrarJogo);

module.exports = router;