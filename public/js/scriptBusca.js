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
                table.innerHTML = table.innerHTML + "<h2>Não foram encontrados dados</h2>";
                table.innerHTML = table.innerHTML + "</table>";

            }

            for (let i = 0; i < resposta.length; i++) {

                let tabela1 = "<tr><img id='foto' src=" + resposta[i].foto + "></tr>";
                let tabela2 = "<li>Nome: " + resposta[i].nome + "</li>";
                let tabela3 = "<li>Apelido: " + resposta[i].apelido + "</li>";
                table.innerHTML = table.innerHTML + cabecalho + tabela1 + tabela2 + tabela3

            }


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

            var respostas = JSON.parse(xhr.responseText);
            console.log(respostas)
            let table = document.getElementById("table");

            table.innerText = '';
            table.innerHTML = "<table id='table'>";

            table.innerHTML = "<table id='table'>"
            if (respostas.length == []) {
                table.innerHTML = table.innerHTML + "<h2>Não foram encontrados dados</h2>"
                table.innerHTML = table.innerHTML + "</table>"
            } else {


                for (let i = 0; i < respostas.length; i++) {

                    if (respostas[i].foto != null) {
                        let tabela1 = "<tr><img id='foto' src=" + respostas[i].foto + "></tr>";
                        table.innerHTML = table.innerHTML + tabela1
                    }

                    let tabela3 = "<li>Nome: " + respostas[i].nome + "</li>";
                    table.innerHTML = table.innerHTML + tabela3

                    if (respostas[i].ano != null) {
                        let tabela4 = "<li>Ano: " + respostas[i].ano + "</li>";
                        table.innerHTML = table.innerHTML + tabela4
                    }

                    if (respostas[i].faixaEtaria != null) {
                        let tabela5 = "<li>Faixa Etária: " + respostas[i].faixaEtaria + "</li>";
                        table.innerHTML = table.innerHTML + tabela5
                    }

                    if (respostas[i].duracao != null) {
                        let tabela6 = "<li>Duração: " + respostas[i].duracao + "</li>";
                        table.innerHTML = table.innerHTML + tabela6
                    }

                    if (respostas[i].downtime != null) {
                        let tabela7 = "<li>Downtime: " + respostas[i].downtime + "</li>";
                        table.innerHTML = table.innerHTML + tabela7
                    }

                    if (respostas[i].notaJogo != null) {
                        let tabela8 = "<li>Nota Jogo: " + respostas[i].notaJogo + "</li>";
                        table.innerHTML = table.innerHTML + tabela8
                    }

                    if (respostas[i].qntMax != null) {
                        let tabela9 = "<li>Máximo Jogadores: " + respostas[i].qntMax + "</li>";
                        table.innerHTML = table.innerHTML + tabela9
                    }

                    if (respostas[i].qntMin != null) {
                        let tabela10 = "<li>Mínimo Jogadores: " + respostas[i].qntMin + "</li>";
                        table.innerHTML = table.innerHTML + tabela10
                    }


                   /* let urlFetch = '/tema?id=' + respostas[i].tema_id
                    fetch(urlFetch, {
                            method: 'get' // opcional 
                        })
                        .then(function (response) {
                            // use a resposta 
                        })
                        .catch(function (err) {
                            console.error(err);
                        });
*/
                    let tabela11 = "<li>Tema: " + respostas[i].tema_id + "</li>";
                    table.innerHTML = table.innerHTML + tabela11

                    let tabela12 = "<li>Domínio: " + respostas[i].dominio_id + "</li>";
                    let tabela13 = "<li>Mecânica: " + respostas[i].mecanica_id + "</li>";
                    table.innerHTML = table.innerHTML + tabela11 + tabela12 + tabela13


                    if (respostas[i].descricao != null) {
                        let tabela14 = "<li>Descrição: " + respostas[i].descricao + "</li>";
                        table.innerHTML = table.innerHTML + tabela14
                    }


                }
                table.innerHTML = table.innerHTML + "</table>"
            }
        } else {
            console.log('erro na Api')
        }

    };


    let url = '/buscaJogo?tema=' + tema + '&dominio=' + dominio + '&mecanica=' + mecanica
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