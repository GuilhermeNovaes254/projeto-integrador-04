const {Usuario, Privilegio} = require('../models')


const VerificaAdm = async (req,res,next) => {
    // se session do usuário não estiver 
    
    
    let  email = req.session.usuario.email;

    const user = await Usuario.findOne({ where: {email} });

    const perfil = await Privilegio.findOne({ where: {id : user.privilegio_id} });
    console.log(perfil)
    if(perfil.cargo < 1 || perfil.aprovado != 1){
        res.redirect('/semPrivilegio');
    }

    // Se chegou até aqui, a session está ok
    next();
}

module.exports = VerificaAdm;