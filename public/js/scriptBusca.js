function buscarDados() {

    document.getElementById('tipo').addEventListener('click', function () {
        console.log(this.value)
        if (this.value == 'jogo') {

            document.getElementById('tipo').addEventListener('change', function () {
                
                
                /*
                // Set up our HTTP request
                var xhr = new XMLHttpRequest();

                // Setup our listener to process completed requests
                xhr.onclick = function () {

                    // Process our return data
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // Runs when the request is successful
                        let cidades = JSON.parse(xhr.responseText);
                        let select = document.getElementById('cidade');
                        select.innerText = '';
                        select.innerHTML = '<option value="">Selecione</option>';

                        for (let cidade of cidades) {
                            select.innerHTML += `<option value="${cidade.id}">${cidade.cidade}</option>`
                        }
                    }

                };
                // Create and send a GET request
                // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
                // The second argument is the endpoint URL
                let url = '/buscaCidade/' + estadoselecionado
                xhr.open('GET', url);
                xhr.send();
                */
            })
        }

        if (this.value == 'usuario') {

            let campo = document.getElementById('campoUsuario').value
            
        }

    })
};


function buscaJogoFunc() {

}


function tipo() { // Quando o tipo é selecionado

    document.getElementById('tipo').addEventListener('change', function () {
        console.log(this.value)

        if (this.value == 'jogo') {

            document.getElementById('buscaJogo').style.visibility = "visible";
            document.getElementById('buscaUsuario').style.visibility = "hidden";

        }

        if (this.value == 'usuario') {

            document.getElementById('buscaJogo').style.visibility = "hidden";
            document.getElementById('buscaUsuario').style.visibility = "visible";

        }
    })

}

tipo()