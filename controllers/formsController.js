const {
    Cidade,
    Dominio,
    Estado,
    Jogo,
    Mecanica,
    Tema,
    Usuario
} = require('../models');
const bcrypt = require('bcrypt');
const {
    check,
    validationResult,
    body
} = require('express-validator');

const forms = {

    cadastroUsuario: async (req, res) => {
        let listOfErrors = validationResult(req);
        if (listOfErrors.isEmpty()) {
            const {
                nome,
                apelido,
                email,
                senha
            } = req.body;

            let foto = 'PerfilVermelho.png'
            let fotoTema = 'ProfileDefaultTema.jpg'

            await Usuario.create({
                nome: nome,
                email: email,
                apelido: apelido,
                foto,
                fotoTema,
                senha: bcrypt.hashSync(senha, 10),
                cargo: 0, //usuario comum
                aprovado: 1
            });

            const user = await Usuario.findOne({
                where: {
                    email
                }
            });

            req.session.usuario = user;

            return res.redirect('/feeds');
        }else{
            return res.render("cadastro", {errors:listOfErrors.errors,
                title: 'Cadastro',
                formData: req.body
            })
        }
    },

    excluirUsuario: async (req, res) => {
        let {
            nome
        } = req.body;
        const user = await Usuario.findOne({
            where: {
                nome: nome
            }
        });

        let id = req.session.usuario.id;

        if (user.id != id) {
            res.redirect('/excluir');
        } else {

            Usuario.destroy({
                where: {
                    id: user.id
                }
            })

            req.session.destroy();
            res.render('index', {
                title: 'Home'
            });
        }
    },

    editarUsuario: async (req, res) => {
        let foto = '';
        let fotoTema = '';

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto,
            fotoUsuario
        }

        let {
            files
        } = req;

        for (let file of files) { 
            if(file.fieldname == 'fotoTema'){
                fotoTema = file.originalname
            }
            if(file.fieldname == 'avatar'){
                foto = file.originalname
            }
        }

        let listOfErrors = validationResult(req);

        if (listOfErrors.isEmpty()) {
            let {
                nomeUser,
                apelido,
                genero,
                estado,
                cidade,
                diaNasc,
                mesNasc,
                anoNasc,
                tipoNivelAP,
                descricaoUser,
                senha,
                senha2,
                imagemTema,
                imagemPerfil
            } = req.body;

            if(fotoTema.length < 1){
                fotoTema = imagemTema;
            }
            
            if(foto.length < 1){
                foto = imagemPerfil;
            }

            let dataDeNascimento = anoNasc+"-"+mesNasc+"-"+diaNasc;
            let senhaEncript;

            let id = req.session.usuario.id

            if (senha != '' && senha == senha2) {
                senhaEncript = bcrypt.hashSync(senha, 10);
            }
            
            let updateUser = {
                nome: nomeUser,
                apelido,
                genero,
                dataDeNascimento,
                tipoAp: tipoNivelAP,
                descricao: descricaoUser,
                senha: senhaEncript,
                foto,
                fotoTema
            }

            if(!isNaN(cidade)){
                updateUser = {...updateUser, cidade_id:cidade};
            }
            if(!isNaN(estado)){
                updateUser = {...updateUser, cidade_estado_id:estado};
            }       

            const user = await Usuario.update(updateUser,{
                where: {
                    id: id
                }
            });

            const userAtualizado = await Usuario.findOne({
                where: {
                    id: id
                }
            });

            req.session.usuario = userAtualizado;
            return res.redirect('/perfil/'+id);
        } else {



            let cidade;
            if (req.session.usuario.cidade_id != null && typeof(req.session.usuario.cidade_id) != "undefined") {
                cidade = await Cidade.findOne({
                    where: {
                        id: req.session.usuario.cidade_id
                    }
                });
            } else {
                cidade = '-'
            }
            
            let estado;
            if (req.session.usuario.cidade_estado_id != null && typeof(req.session.usuario.cidade_estado_id) != "undefined") {
                estado = await Estado.findOne({
                    where: {
                        id: req.session.usuario.cidade_estado_id
                    }
                });
            } else {
                estado = '-'
            }

            let diaNasc, mesNasc, anoNasc;
            if (req.session.usuario.dataDeNascimento != null){
                diaNasc = req.session.usuario.dataDeNascimento.slice(8,10);
                mesNasc = req.session.usuario.dataDeNascimento.slice(5,7);
                anoNasc = req.session.usuario.dataDeNascimento.slice(0,4);
            }

            return res.render("editar",  {errors:listOfErrors.errors,
                title: 'Atualizar Informações',
                apelidoUsuario: req.session.usuario.apelido,
                nomeUsuario: req.session.usuario.nome,
                descricaoUsuario: req.session.usuario.descricao,
                genero: req.session.usuario.genero,
                estado: req.session.usuario.cidade_estado_id,
                cidade: req.session.usuario.cidade_id,
                diaNasc,
                mesNasc,
                anoNasc,
                nivelAp: req.session.usuario.tipoAp,
                fotoUsuario,
                formData: req.body,
                foto,
                fotoTema,
                cidadeUsuario: cidade.cidade ? cidade.cidade : '',
                estadoUsuario: estado.sigla ? estado.sigla : '',
                formData: req.body
                })
        }

        res.locals.USUARIO = req.session.usuario;
    },

    cadastrarJogo: async (req, res) => {
        var temas = await Tema.findAll();
        var dominios = await Dominio.findAll();
        var mecanicas = await Mecanica.findAll();
        let foto = '';
        let fotoTema = '';

        fotoUsuario = 'images/icons/PerfilVermelho.png'

        if(req.session.usuario.foto != 'images/icons/PerfilVermelho.png'){
            fotoUsuario = req.session.usuario.foto,
            fotoUsuario
        }

        let {
            files
        } = req;

        for (let file of files) {
            if (file.fieldname == 'fotoTemaJogo') {
                fotoTema = file.originalname
            }
            if (file.fieldname == 'fotoPerfilJogo') {
                foto = file.originalname
            }
        }

        let listOfErrors = validationResult(req);

        if (listOfErrors.isEmpty()) {
            const {
                nomeJogo,
                anoJogo,
                faixaEtaria,
                duracao,
                descricaoJogo,
                temaJogo,
                minJogadores,
                maxJogadores,
                pesoJogo,
                dominioJogo,
                mecanicaJogo,
                downtimeJogo,
                tutorialJogo,
                regrasJogo,
                imagemTema,
                imagemPerfil,
                video
            } = req.body;

            if(fotoTema.length < 1){
                fotoTema = imagemTema;
            }
            
            if(foto.length < 1){
                foto = imagemPerfil;
            }

            if(fotoTema === ""){
                fotoTema = 'GameDefaultTema.png';
            }

            if(foto === ""){
                foto = 'GameDefault.png';
            }

            const jogo = await Jogo.create({
                nome: nomeJogo,
                ano: anoJogo,
                descricao: descricaoJogo,
                faixaEtaria: faixaEtaria,
                duracao: duracao,
                downtime: downtimeJogo,
                tutorial: tutorialJogo,
                peso: pesoJogo,
                regras: regrasJogo,
                qntMax: maxJogadores,
                qntMin: minJogadores,
                aprovado: 0,
                tema_id: temaJogo,
                dominio_id: dominioJogo,
                mecanica_id: mecanicaJogo,
                foto,
                fotoTema,
                video
            })

            return res.redirect('/feeds');


        }else {
            return res.render("cadastroJogo",  {errors:listOfErrors.errors,
                title: 'Cadastro Jogo',
                apelidoUsuario: req.session.usuario.apelido,
                temas,
                dominios,
                mecanicas,
                fotoUsuario,
                formData: req.body,
                foto,
                fotoTema
            })
        }
    }


};



module.exports = forms