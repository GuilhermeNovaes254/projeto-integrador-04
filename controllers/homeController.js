const homeController = {
    
  index: (req, res) => {
    res.render('index',{ title: 'Home' });
  }
  
};

module.exports = homeController;