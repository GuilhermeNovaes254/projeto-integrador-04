var xhr = new XMLHttpRequest();

function consultaUsuario(usuario) {

    xhr.onload = function () {
        table.innerText = "";
        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            var resposta = JSON.parse(xhr.responseText);
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
                table.innerHTML = table.innerHTML + cabecalho + tabela1 + tabela2 + tabela3 + "</table><div id='separador'></div>"

            }


        } else {
            // console.log('erro na Api')
        }

    };


    let url = '/buscaUsuario/' + usuario
    // console.log(url)
    xhr.open('GET', url);
    xhr.send();
}


async function consultaJogo(tema, dominio, mecanica, nome) {

    let url = '/buscaJogo?tema=' + tema + '&dominio=' + dominio + '&mecanica=' + mecanica + '&nome=' + nome
    console.log(url)
    fetch(url, { method: 'GET' })
    .then(console.log("Fetched"))
    // .then(res => {

    //     if (res.length == []) {
    //         document.getElementById("table");
    //         table.innerHTML = "<table id='table'>";
    //         table.innerHTML = table.innerHTML + "<h2>Não foram encontrados dados</h2>"
    //         table.innerHTML = table.innerHTML + "</table>"
    //     } else {

    //        jogos = res;


    //     }
    // }) 

}


function buscarDados() {

    var tipo;
    var usuario;
    var tema;
    var dominio;
    var mecanica;
    var nome;

    document.getElementById("tipo").addEventListener('change', function () {
        tipo = document.getElementById("tipo").value;

    });


    document.getElementById('busca').addEventListener('click', function (evt) {

        usuario = document.getElementById("campoUsuario").value;

        if (tipo == 'jogo') {
            nome = document.getElementById("campoJogo").value;
            tema = document.getElementById("temaSelector").value;
            dominio = document.getElementById("dominioSelector").value;
            mecanica = document.getElementById("mecanicaSelector").value;
        }


        if (tipo == 'usuario') {
            consultaUsuario(usuario);

        } else {
            consultaJogo(tema, dominio, mecanica, nome);
        }

    })

};

/*********************************************************/
// Controle do Front End 

async function tipoSelector() { // Quando o tipo é selecionado

    document.getElementById('tipo').addEventListener('change', function () {
       // console.log(this.value)

        if (this.value == 'jogo') {

           
            //Faz requisição Fetch em cada parametro 
            async function consultaApi(param) {

                let url = '/'+ param +'/todos'
                let promise =  await fetch(url)
                let nome = param +'Selector'
                // console.log(nome)
                let selector = document.getElementById(nome);
                
                let promiseJson = await promise.json()
                // console.log(promiseJson)

                selector.innerText = '';
                selector.innerHTML = ''
                selector.innerHTML = selector.innerHTML + '<option value=0>Selecionar</option>'

                for(let item of promiseJson ){
                     selector.innerHTML = selector.innerHTML + `<option value= ${item.id}>${item.nome}</option>` 
                }

            }

            consultaApi('tema')
            consultaApi('dominio')
            consultaApi('mecanica')

           
            document.getElementById('buscaUsuario').style.height = "0px";
            document.getElementById('buscaUsuario').style.width = "0px";

            document.getElementById('buscaJogo').style.visibility = "visible";
            document.getElementById('buscaUsuario').style.visibility = "hidden";

            document.getElementById('buscaJogo').style.height = "auto";
        }

        if (this.value == 'usuario') {


            document.getElementById('buscaJogo').style.height = "0px";
            document.getElementById('buscaJogo').style.width = "0px";
            
            document.getElementById('buscaJogo').style.visibility = "hidden";
            document.getElementById('buscaUsuario').style.visibility = "visible";

            document.getElementById('buscaUsuario').style.height = "auto";

        }
    })

}


tipoSelector()
buscarDados()