var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // Runs when the request is successful
        var resposta = JSON.parse(xhr.responseText);
        console.log(resposta)
    } else {
        console.log('erro na Api')
    }

};

function consultaUsuario(usuario) {

    let url = '/buscaUsuario/' + usuario
    console.log(url)
    xhr.open('GET', url);
    xhr.send();

}


function consultaJogo(tema, dominio, mecanica) {

    let url = '/buscaJogo/' + tema + '/' + dominio + '/' + mecanica
    console.log(url)
    xhr.open('GET', url);
    xhr.send();

}


function buscarDados() {

    var tipo;
    var usuario;
    var tema;
    var dominio;
    var mecanica;

    document.getElementById("tipo").addEventListener('change', function () {
        tipo = document.getElementById("tipo").value;
    });

    // //Pega o valor do Campo Usuario
    // document.getElementById("campoUsuario").addEventListener('change', function (evt) {
    //     usuario = document.getElementById("campoUsuario").value;
    //     //console.log(usuario)
    // });


    // //Pega os valores dos campos Jogos
    // document.getElementById('temaSelector').addEventListener('change', function (evt) {
    //     tema = document.getElementById("temaSelector").value;
    //     console.log(tema)
    // });

    // document.getElementById('dominioSelector').addEventListener('change', function (evt) {
    //     dominio = document.getElementById("dominioSelector").value;
    //     console.log(dominio)
    // });


    // document.getElementById('mecanicaSelector').addEventListener('change', function (evt) {
    //     console.log(typeof (mecanica))
    //     mecanica = document.getElementById("mecanicaSelector").value;
    //     console.log(mecanica)
    //     console.log(typeof (mecanica))
    // });


    document.getElementById('busca').addEventListener('click', function (evt) {

        usuario = document.getElementById("campoUsuario").value;

        tema = document.getElementById("temaSelector").value;
        dominio = document.getElementById("dominioSelector").value;
        mecanica = document.getElementById("mecanicaSelector").value;

        // console.log('aqui = ' + tipo)
        // console.log('aqui = ' + usuario)
        console.log('aqui = ' + typeof(tema))
        console.log('aqui = ' + typeof(dominio))
        console.log('aqui = ' + typeof(mecanica));

        if (tipo == 'usuario') {
            consultaUsuario(usuario);
        } else {
            consultaJogo(tema, dominio, mecanica);
        }
    })

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