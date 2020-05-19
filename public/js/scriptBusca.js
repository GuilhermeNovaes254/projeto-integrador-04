function tipo() {

    let select = document.getElementById('tipo');
    console.log(select.innerText)
    var xhr = new XMLHttpRequest();

    if (select == 'jogo') {
        console.log('jogo')
        /*  
        // Abre os próximo pop-ups
        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            let select = document.getElementById('tipo');
            select.innerText = '';
            select.innerHTML = '<option value="">Selecione</option>';



            for (let estado of estados) {
                select.innerHTML += `<option value="${estado.id}">${estado.sigla}</option>`
            }

        }
        // Create and send a GET request
        // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
        // The second argument is the endpoint URL

        xhr.open('GET', '/buscaEstado');
        xhr.send();
*/
    } else {
        // Abre barra de pesquisa para nome
        console.log('done')
        // select.innerHTML += "<input type='text'  class='form-control inputCadastro' id='busca' placeholder='Buscar'  name='nome'>"

        // consulta o banco que traz sobre as pessoas

    }
}

tipo()