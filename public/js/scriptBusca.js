var xhr = new XMLHttpRequest();

function consultaUsuario(usuario) {

    xhr.onload = function () {
        table.innerText = "";
        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            var resposta = JSON.parse(xhr.responseText);
            console.log(resposta.length)
            let table = document.getElementById("table");

            table.innerText = '';
            table.innerHTML = '';
            let cabecalho = "<table id='table'>";

            if (resposta.length == 0) {
                table.innerHTML = table.innerHTML + "<h2>Sem dados</h2>"
            }

            for (let i = 1; i <= resposta.length; i++) {

                let tabela1 = "<tr><img id='foto' src=" + resposta[0].foto + "></tr>";
                let tabela2 = "<li>Nome: " + resposta[0].nome + "</li>";
                let tabela3 = "<li>Apelido: " + resposta[0].apelido + "</li>";
                table.innerHTML = table.innerHTML + cabecalho + tabela1 + tabela2 + tabela3

            }
            table.innerHTML = table.innerHTML + "</table>"

        } else {
            console.log('erro na Api')
        }

    };


    let url = '/buscaUsuario/' + usuario
    console.log(url)
    xhr.open('GET', url);
    xhr.send();
}


function consultaJogo(tema, dominio, mecanica) {

    xhr.onload = function () {
        table.innerText = "";

        if (xhr.status >= 200 && xhr.status < 300) {

            var resposta = JSON.parse(xhr.responseText);
            console.log(resposta)
            
           /* let table = document.getElementById("table");

            table.innerText = '';
            table.innerHTML = '';
            let cabecalho = "<table id='table'>";

            if (resposta.length == 0) {
                table.innerHTML = table.innerHTML + "<h2>Sem dados</h2>"
            }

            
            for (let i = 1; i <= resposta.length; i++) {

                let temaQuery;
                let dominioQuery;
                let mecanicaQuery;

                let tabela1 = "<tr><img id='foto' src=" + resposta[0].foto + "></tr>";
                let tabela2 = "<li>Nome: " + resposta[0].nome + "</li>";
                let tabela3 = "<li>Faixa Etária: " + resposta[0].faixaEtaria + "</li>";
                let tabela4 = "<li>Tema: " + temaQuery + "</li>";
                let tabela5 = "<li>Domínio: " + dominioQuery + "</li>";
                let tabela6 = "<li>Mecânica: " + mecanicaQuery + "</li>";
                table.innerHTML = table.innerHTML + cabecalho + tabela1 + tabela2 + tabela3 + tabela4 + tabela5 + tabela6

            }
            table.innerHTML = table.innerHTML + "</table>"
*/
        } else {
            console.log('erro na Api')
            console.log('TESTE')
        }

    };


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

    document.getElementById('busca').addEventListener('click', function (evt) {

        usuario = document.getElementById("campoUsuario").value;

        tema = document.getElementById("temaSelector").value;
        dominio = document.getElementById("dominioSelector").value;
        mecanica = document.getElementById("mecanicaSelector").value;

        // console.log('aqui = ' + tipo)
        // console.log('aqui = ' + usuario)
        // console.log('aqui = ' + typeof(tema))
        // console.log('aqui = ' + typeof(dominio))
        // console.log('aqui = ' + typeof(mecanica));

        if (tipo == 'usuario') {
            consultaUsuario(usuario);

        } else {
            consultaJogo(tema, dominio, mecanica);
        }

    })

};

/*********************************************************/
// Controle do Front End 

function tipoSelector() { // Quando o tipo é selecionado

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


tipoSelector()
buscarDados()