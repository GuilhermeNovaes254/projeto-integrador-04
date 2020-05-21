const {Usuario, Privilegio} = require('../models')


const VerificaModerador = async (req,res,next) => {
    // se session do usuário não estiver 
    
    
    //let  email = req.session.usuario.email;
    let  cargo = req.session.usuario.cargo;
    let  aprovado = req.session.usuario.aprovado;

    if(cargo == 0 || aprovado != 1){
    

        res.redirect('/semPrivilegio');
    }

    // Se chegou até aqui, a session está ok
    next();
}

module.exports = VerificaModerador;