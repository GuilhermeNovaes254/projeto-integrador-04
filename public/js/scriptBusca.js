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

            for (let i = 1; i <= resposta.length; i++) {

                let tabela1 = "<tr><img id='foto' src=" + resposta[0].foto + "></tr>";
                let tabela2 = "<li>Nome: " + resposta[0].nome + "</li>";
                let tabela3 = "<li>Apelido: " + resposta[0].apelido + "</li>";
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

            var resposta = JSON.parse(xhr.responseText);

            console.log("Tamanho: " + resposta.length)
            console.log(resposta.length)

            console.log(resposta)
            let table = document.getElementById("table");

            table.innerText = '';
            table.innerHTML = '';
            let cabecalho = "<table id='table'>";

            table.innerHTML = "<table id='table'>"
            if (resposta.length == undefined) {
                table.innerHTML = table.innerHTML + "<h2>Não foram encontrados dados</h2>"
                table.innerHTML = table.innerHTML + "</table>"
            } /*else {
                
                for (let j = 0; j <= resposta.length; j++) {

                    table.innerHTML = table.innerHTML + cabecalho

                    if (resposta[0].foto != null) {
                        let tabela1 = "<tr><img id='foto' src=" + resposta[0].foto + "></tr>";
                        table.innerHTML = table.innerHTML + tabela1
                    }

                    let tabela3 = "<li>Nome: " + resposta[0].nome + "</li>";
                    table.innerHTML = table.innerHTML + tabela3

                    if (resposta[0].ano != null) {
                        let tabela4 = "<li>Ano: " + resposta[0].ano + "</li>";
                        table.innerHTML = table.innerHTML + tabela4
                    }

                    if (resposta[0].faixaEtaria != null) {
                        let tabela5 = "<li>Faixa Etária: " + resposta[0].faixaEtaria + "</li>";
                        table.innerHTML = table.innerHTML + tabela5
                    }

                    if (resposta[0].duracao != null) {
                        let tabela6 = "<li>Duração: " + resposta[0].duracao + "</li>";
                        table.innerHTML = table.innerHTML + tabela6
                    }

                    if (resposta[0].downtime != null) {
                        let tabela7 = "<li>Downtime: " + resposta[0].downtime + "</li>";
                        table.innerHTML = table.innerHTML + tabela7
                    }

                    if (resposta[0].notaJogo != null) {
                        let tabela8 = "<li>Nota Jogo: " + resposta[0].notaJogo + "</li>";
                        table.innerHTML = table.innerHTML + tabela8
                    }

                    if (resposta[0].qntMax != null) {
                        let tabela9 = "<li>Máximo Jogadores: " + resposta[0].qntMax + "</li>";
                        table.innerHTML = table.innerHTML + tabela9
                    }

                    if (resposta[0].qntMin != null) {
                        let tabela10 = "<li>Mínimo Jogadores: " + resposta[0].qntMin + "</li>";
                        table.innerHTML = table.innerHTML + tabela10
                    }


                    let tabela11 = "<li>Tema: " + resposta[0].tema_id + "</li>";
                    table.innerHTML = table.innerHTML + tabela11

                    let tabela12 = "<li>Domínio: " + dominioQuery + "</li>";
                    let tabela13 = "<li>Mecânica: " + mecanicaQuery + "</li>";
                    table.innerHTML = table.innerHTML + tabela11 + tabela12 + tabela13


                    if (resposta[0].descricao != null) {
                        let tabela14 = "<li>Descrição: " + resposta[0].descricao + "</li>";
                        table.innerHTML = table.innerHTML + tabela14
                    }




                }
                table.innerHTML = table.innerHTML + "</table>"
            }*/
        } else {
            console.log('erro na Api')
        }

    };


    //let url = '/buscaJogo/' + tema + '/' + dominio + '/' + mecanica
    let url = '/buscaJogo?tema='+tema +'&dominio='+dominio +'&mecanica='+mecanica 
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