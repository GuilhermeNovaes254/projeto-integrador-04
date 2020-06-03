const {Usuario} = require('../models')
const bcrypt = require('bcrypt')

const autorizaLogin = {

    loginSession: async (req, res) => {

        // Lendo as infos do Body


        const {email,senha} = req.body;

        // tentar carregar um usuario
        const user = await Usuario.findOne({
            where: { email }
       });
       
        //Verifica se existe usarui com o e-mail passado
        if (!user) {
            res.redirect('/login/error');
        }

        // validar senha passada via post contra a guardada
        if (!bcrypt.compareSync(senha, user.senha)) {
            res.redirect('/login/error');
        }

        // setar uma session com o usuario
        req.session.usuario = user;
        

        // redirecionar o suaurio para a rota '/feeds'*/
        res.redirect('/perfilModerador')   
    }



};



module.exports = autorizaLogin;