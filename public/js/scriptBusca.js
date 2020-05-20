function buscarDados() {
    let tema 
    let dominio
    let mecanica

    document.getElementById('temaSelector').addEventListener('change', function(evt){
        tema = document.getElementById("temaSelector").value;
        console.log(tema)
    });

    document.getElementById('dominioSelector').addEventListener('change', function (evt) {
        dominio = document.getElementById("dominioSelector").value;
        console.log(dominio)
    });

    
    document.getElementById('mecanicaSelector').addEventListener('change', function (evt) {
        mecanica = document.getElementById("mecanicaSelector").value;
        console.log(mecanica)
    });


    document.getElementById('busca').addEventListener('click', function (evt) {
        console.log("CLICADO")



    });

};


/*********************************************************/
// Controle do Front End 

function tipo() { // Quando o tipo é selecionado

    document.getElementById('tipo').addEventListener('change', function () {
        console.log(this.value)

        if (this.value == 'jogo') {

            document.getElementById('buscaUsuario').style.height = "0px";

            document.getElementById('buscaJogo').style.visibility = "visible";
            document.getElementById('buscaUsuario').style.visibility = "hidden";

            document.getElementById('buscaJogo').style.height = "auto";
        }

        if (this.value == 'usuario') {
            document.getElementById('buscaJogo').style.height = "0px";

            document.getElementById('buscaJogo').style.visibility = "hidden";
            document.getElementById('buscaUsuario').style.visibility = "visible";

            document.getElementById('buscaUsuario').style.height = "auto";

        }
    })

}

tipo()
buscarDados()