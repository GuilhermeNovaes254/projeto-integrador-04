const { Dominio, Tema, Mecanica } = require('../models');
const {Usuario} = require('../models')
const bcrypt = require('bcrypt')

const homeController = {
  
  index: (req, res) => {
    res.render('index', {
      title: 'Home'
    });
  },

  login: async (req,res) => {
    // Lendo as infos do Body
    const {email,senha} = req.body;
    // tentar carregar um usuario
    const user = await Usuario.findOne({ where: { email }});
    //Verifica se existe usarui com o e-mail passado
    if(!user){
        res.redirect('/login?error=1');
    }
    
    // validar senha passada via post contra a guardada
    if(!bcrypt.compareSync(senha, user.senha)){
        res.redirect('/login?error=1');
    }

    // setar uma session com o usuario
    req.session.usuario = user;

    // redirecionar o suaurio para a rota '/home'
    res.redirect('/home');
},

  feeds: (req, res) => {
    res.render('feeds', {
      title: 'Feeds'
    });
  },

  cadastroJogo: async (req, res) => {
    var temas = await Tema.findAll();
    var dominios = await Dominio.findAll();
    var mecanicas = await Mecanica.findAll();
    res.render('cadastroJogo', {
      title: 'Cadastro Jogo',
      temas,
      dominios,
      mecanicas
    });
  },

  perfil: (req, res) => {
    res.render('perfil', {
      title: 'perfil'
    });
  },

  jogo: (req, res) => {
    res.render('jogo', {
      title: 'jogo'
    });
  },

  busca: (req, res) => {
    res.render('busca', {
      title: 'busca'
    });
  },

  cadastro: (req, res) => {
    res.render('cadastro', {
      title: 'cadastro'
    });
  },

  perfilAdm: (req, res) => {
    res.render('perfilAdm', {
      title: 'perfilAdm'
    });
  },

  perfilModerador: (req, res) => {
    res.render('perfilModerador', {
      title: 'perfilModerador'
    });
  },

  moduloDestaques: (req, res) => {
    res.render('moduloDestaques', {
      title: 'moduloDestaques'
    });
  },

  excluir: (req, res) => {
    res.render('excluir', {
      title: 'excluir'
    });
  },

  editar: (req, res) => {
    res.render('editar', {
      title: 'editar'
    });
  },


};



module.exports = homeController;