var xhr = new XMLHttpRequest();

let id = jogoId;
let user = userId;

// 'Joguei',
//     usuario_id
//     jogo_id

// 'Favorito',
//     usuario_id
//     jogo_id 

// 'Comentario',
//     id
//     texto
//     data
//     usuario_id
//     jogo_id

// 'Colecao',
//     usuario_id
//     jogo_id

// 'Avaliacao',
//     usuario_id
//     jogo_id
//     avaliacao

async function carregaElementos() {
    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            let resposta = JSON.parse(xhr.responseText);

            let banner = document.getElementsByClassName('c-banner-jogo')
            let headPage = document.getElementById("headPage");
            let nome = document.getElementById("jogoNome");
            let descricao = document.getElementById('jogoDescricao');
            let linkYt = document.getElementById("jogolinkYoutube");

            nome.innerText = resposta.nome
            descricao.innerText = resposta.descricao

            if (resposta.fotoTema != null) {
                banner[0].style.backgroundImage = `url(${resposta.fotoTema} )`;
            } else {
                banner[0].style.backgroundImage = `url('images/default/h1.jpg')`
            }


            headPage.innerHTML = ''
            headPage.innerHTML += `<img  class="c-photo-game" src=${resposta.foto} alt="">`


            if (resposta.video != null) {
                linkYt.innerHTML = `<iframe width="560" height="315" src=${resposta.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            } else {
                linkYt.innerHTML = '<h2>Não há vídeo</h2>'
            }

        }
        carregaAvaliacao();
    }

    let url = `/jogo/elementos/jogoid?jogo=${id}`
    xhr.open('GET', url);
    xhr.send();


}


async function carregaAvaliacao() {
    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            if (xhr.responseText != 0) {
                let resposta = JSON.parse(xhr.responseText);

                console.log(resposta);
                Avaliar(parseInt(resposta.avaliacao) + 1);
            }
        } else {
            'problema no carrega'
        }
    }

    let url = `/jogo/elementos/avaliacao/carrega?jogo=${jogoId}`
    xhr.open('GET', url);
    xhr.send();


}

async function leEstrelas() {

    document.getElementById("rated").addEventListener('click', function () {
        nota = document.getElementById("rating").textContent
        console.log(nota)

        xhr.onload = function () {

            // Process our return data
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Atribuido')

            } else {
                console.log('Erro')
            }
        }


        let url = `/jogo/elementos/avaliacao/${jogoId}/${nota}`
        xhr.open('POST', url);
        xhr.send();
    });

}


carregaElementos();
leEstrelas();