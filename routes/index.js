var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController');
const autorizaLogin = require('../controllers/autorizaLoginController');
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado')
const VerificaAdm = require('../middlewares/VerificaAdm')
const VerificaMod = require('../middlewares/VerificaModerador')

/* GET home page. */
router.get('/', homeController.index);
router.get('/feeds', VerificaUsuarioLogado, homeController.feeds);
router.get('/cadastroJogo',VerificaUsuarioLogado, homeController.cadastroJogo);
router.get('/perfil', VerificaUsuarioLogado,homeController.perfil);
router.get('/jogo',VerificaUsuarioLogado,homeController.jogo);
router.get('/busca', VerificaUsuarioLogado,homeController.busca);
router.get('/cadastro', VerificaUsuarioLogado,homeController.cadastro);
router.get('/moduloDestaques', VerificaUsuarioLogado,homeController.moduloDestaques);
router.get('/excluir', VerificaUsuarioLogado,homeController.excluir);
router.get('/semPrivilegio', VerificaUsuarioLogado,homeController.semPrivilegio);

/* GET Páginas Restritas */
router.get('/perfilModerador', VerificaMod, VerificaUsuarioLogado, homeController.perfilModerador);
router.get('/perfilAdm', VerificaAdm, VerificaUsuarioLogado, homeController.perfilAdm);

/* POSTS */
router.post('/login', autorizaLogin.loginSession);


module.exports = router;
