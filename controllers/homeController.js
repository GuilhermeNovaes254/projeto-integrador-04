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
      title: 'Feeds',apelidoUsuario: req.session.usuario.apelido
    });
  },

  cadastroJogo: async (req, res) => {
    var temas = await Tema.findAll();
    var dominios = await Dominio.findAll();
    var mecanicas = await Mecanica.findAll();
    res.render('cadastroJogo', {
      title: 'Cadastro Jogo',apelidoUsuario: req.session.usuario.apelido,
      temas,
      dominios,
      mecanicas
    });
  },

  perfil: (req, res) => {
    res.render('perfil', {
      title: 'perfil',apelidoUsuario: req.session.usuario.apelido
    });
  },

  jogo: (req, res) => {
    res.render('jogo', {
      title: 'jogo',apelidoUsuario: req.session.usuario.apelido
    });
  },

  busca: (req, res) => {
    res.render('busca', {
      title: 'busca',apelidoUsuario: req.session.usuario.apelido
    });
  },

  cadastro: (req, res) => {
    res.render('cadastro', {
      title: 'cadastro',apelidoUsuario: req.session.usuario.apelido
    });
  },

  perfilAdm: (req, res) => {
    res.render('perfilAdm', {
      title: 'perfilAdm',apelidoUsuario: req.session.usuario.apelido
    });
  },

  perfilModerador: (req, res) => {
    res.render('perfilModerador', {
      title: 'perfilModerador',apelidoUsuario: req.session.usuario.apelido
    });
  },

  moduloDestaques: (req, res) => {
    res.render('moduloDestaques', {
      title: 'moduloDestaques',apelidoUsuario: req.session.usuario.apelido
    });
  },

  excluir: (req, res) => {
    res.render('excluir', {
      title: 'excluir',nomeUsuario: req.session.usuario.nome,
      apelidoUsuario: req.session.usuario.apelido
    });
  },

  editar: (req, res) => {
    res.render('editar', {
      title: 'editar',apelidoUsuario: req.session.usuario.apelido
    });
  },

  semPrivilegio: (req, res) => {
    res.render('semPrivilegio', {
      title: 'Sem Privilégio',apelidoUsuario: req.session.usuario.apelido
    });
  },

};



module.exports = homeController;