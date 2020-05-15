const { Dominio, Tema, Mecanica } = require('../models');
const {Usuario} = require('../models')

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
    res.render('feeds', {
      title: 'Feeds',nomeUsuario: req.session.usuario.nome
    });
  },

  cadastroJogo: async (req, res) => {
    var temas = await Tema.findAll();
    var dominios = await Dominio.findAll();
    var mecanicas = await Mecanica.findAll();
    res.render('cadastroJogo', {
      title: 'Cadastro Jogo',nomeUsuario: req.session.usuario.nome,
      temas,
      dominios,
      mecanicas
    });
  },

  perfil: (req, res) => {
    res.render('perfil', {
      title: 'perfil',nomeUsuario: req.session.usuario.nome
    });
  },

  jogo: (req, res) => {
    res.render('jogo', {
      title: 'jogo',nomeUsuario: req.session.usuario.nome
    });
  },

  busca: (req, res) => {
    res.render('busca', {
      title: 'busca',nomeUsuario: req.session.usuario.nome
    });
  },

  cadastro: (req, res) => {
    res.render('cadastro', {
      title: 'cadastro',nomeUsuario: req.session.usuario.nome
    });
  },

  perfilAdm: (req, res) => {
    res.render('perfilAdm', {
      title: 'perfilAdm',nomeUsuario: req.session.usuario.nome
    });
  },

  perfilModerador: (req, res) => {
    res.render('perfilModerador', {
      title: 'perfilModerador',nomeUsuario: req.session.usuario.nome
    });
  },

  moduloDestaques: (req, res) => {
    res.render('moduloDestaques', {
      title: 'moduloDestaques',nomeUsuario: req.session.usuario.nome
    });
  },

  excluir: (req, res) => {
    res.render('excluir', {
      title: 'excluir',nomeUsuario: req.session.usuario.nome
    });
  },

  editar: (req, res) => {
    res.render('editar', {
      title: 'editar',nomeUsuario: req.session.usuario.nome
    });
  },

  semPrivilegio: (req, res) => {
    res.render('semPrivilegio', {
      title: 'Sem Privilégio',nomeUsuario: req.session.usuario.nome
    });
  },

};



module.exports = homeController;