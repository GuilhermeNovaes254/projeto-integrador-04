const {Usuario, Privilegio} = require('../models')


const VerificaAdm = async (req,res,next) => {
    // se session do usuário não estiver 
    
    //let  email = req.session.usuario.email;
    let  cargo = req.session.usuario.cargo;
    let  aprovado = req.session.usuario.aprovado;

    //const user = await Usuario.findOne({ where: {email} });

    //if(user.cargo != 2 || user.aprovado != 1){
    if(cargo != 2 || aprovado != 1){
        res.redirect('/semPrivilegio');
    }

    // Se chegou até aqui, a session está ok
    next();
}

module.exports = VerificaAdm;




/* MUDAR ATRIBUICOES */ 