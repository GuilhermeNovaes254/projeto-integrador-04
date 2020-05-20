function tipo() {

    let select = document.getElementsByName

        console.log(select)

        if (select == 'jogo') {

            console.log('jogo')

            let elementoJogo = document.getElementById('buscaJogo').style.visibility = "visible";
            let elementoUsuario = document.getElementById('buscaUsuario').style.visibility = "hidden";

        }
        
        if (select == 'usuario') {
            // Abre barra de pesquisa para nome
            // console.log('done')
            let elementoJogo = document.getElementById('buscaJogo').style.visibility = "hidden";haha
            let elementoUsuario = document.getElementById('buscaUsuario').style.visibility = "visible";

            // consulta o banco que traz sobre as pessoas

        }
    
}

tipo()