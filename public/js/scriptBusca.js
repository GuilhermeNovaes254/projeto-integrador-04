function consultaUsuario(usuario) {
    console.log("Usuario FUNCAO")

}


function consultaJogo(tema, dominio, mecanica) {
    console.log("JOGO FUNCAO")

}


function buscarDados() {

    let tipo;
    let usuario;
    let tema;
    let dominio;
    let mecanica;

    document.getElementById("tipo").addEventListener('change', function () {
        tipo = document.getElementById("tipo").value;
    });

    // Pega o valor do Campo Usuario
    document.getElementById("campoUsuario").addEventListener('change', function (evt) {
        usuario = document.getElementById("campoUsuario").value;
        console.log(usuario)
    });


    // Pega os valores dos campos Jogos
    document.getElementById('temaSelector').addEventListener('change', function (evt) {
        tema = document.getElementById("temaSelector").value;
        console.log(tema)
    });

    document.getElementById('temaSelector').addEventListener('change', function (evt) {
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

        //console.log("CLICADO")

        if (tipo == 'usuario') {
            consultaUsuario(usuario);
        } else {
            consultaJogo(tema, dominio, mecanica);
        }

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