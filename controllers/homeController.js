const homeController = {

  index: (req, res) => {
    res.render('index', {
      title: 'Home'
    });
  },

  login: (req, res) => {
    res.render('login', {
      title: 'Login'
    });
  },

  home2: (req, res) => {
    res.render('home2', {
      title: 'home2'
    });
  },

  cadastroJogo: (req, res) => {
    res.render('cadastroJogo', {
      title: 'Cadastro Jogo'
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