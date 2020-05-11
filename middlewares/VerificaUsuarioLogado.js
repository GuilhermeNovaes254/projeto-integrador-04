const VerificaUsuarioLogado = (req,res,next) => {
    // se session do usuário não estiver 

    if(!req.session.usuario){
        res.redirect('/login?error=2');
    }

    // Se chegou até aqui, a session está ok
    next();
}

module.exports = VerificaUsuarioLogado;