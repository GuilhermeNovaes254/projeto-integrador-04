var xhr = new XMLHttpRequest();

let id = jogoId;

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
            console.log(banner)
            if(resposta.fotoTema != null){
                banner[0].style.backgroundImage = `url(${resposta.fotoTema} )`;
            }else{
                banner[0].style.backgroundImage = `url('images/default/h1.jpg')`
            }
            

            headPage.innerHTML = ''
            headPage.innerHTML += `<img  class="c-photo-game" src=${resposta.foto} alt="">`
            

            if( resposta.video != null){
                linkYt.innerHTML = ''
                linkYt.innerHTML = `<iframe width="560" height="315" src=${resposta.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }else{
                linkYt.innerHTML = '<h2>Não há vídeo</h2>'
            }

        }
    }
    
    let url = `/jogo/elementos/jogoid?jogo=${id}`
    xhr.open('GET', url);
    xhr.send();

}

carregaElementos()