var express = require('express');
var router = express.Router();

let homeController = require('../controllers/homeController');
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado')


/* GET home page. */
router.get('/', homeController.index);
router.get('/login', homeController.login);
router.get('/feeds', VerificaUsuarioLogado, homeController.feeds);
router.get('/cadastroJogo', homeController.cadastroJogo);
router.get('/perfil', homeController.perfil);
router.get('/jogo', homeController.jogo);
router.get('/busca', homeController.busca);
router.get('/cadastro', homeController.cadastro);
router.get('/perfilAdm', homeController.perfilAdm);
router.get('/perfilModerador', homeController.perfilModerador);
router.get('/moduloDestaques', homeController.moduloDestaques);
router.get('/excluir', homeController.excluir);
router.get('/editar', homeController.editar);

/* POSTS */
router.post('/login', homeController.login);

module.exports = router;
