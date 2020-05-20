function tipo() {

    let tipo = document.getElementById('tipo')
    tipo.addEventListener('change',function(){
        console.log(this.value)
        
        if (this.value == 'jogo') {

            let elementoJogo = document.getElementById('buscaJogo').style.visibility = "visible";
            let elementoUsuario = document.getElementById('buscaUsuario').style.visibility = "hidden";

        }
        
        if (this.value == 'usuario') {
            // Abre barra de pesquisa para nome
            let elementoJogo = document.getElementById('buscaJogo').style.visibility = "hidden";
            let elementoUsuario = document.getElementById('buscaUsuario').style.visibility = "visible";

            // consulta o banco que traz sobre as pessoas

        }
    })
            
}

tipo()