var xhr = new XMLHttpRequest();

let id = jogoId;
let user = userId;

async function carregaComentarios() {

    let url = `/jogo/elementos/comentario?jogo=${jogoId}`
    fetch(url, {
            method: 'GET'
        })
        .then((resposta) => resposta.json())
        .then((resposta) => {



            let comentario = document.getElementById('comentarios');
            comentario.innerHTML = '';

            for (let i = 0; i < resposta.length; i++) {
                let urlUsuario = `/busca/usuario?id=${resposta[i].usuario_id}`
                fetch(urlUsuario).then((usuario) => usuario.json())
                    .then((usuario) => {

                        comentario.innerHTML += `<div class="c-coments">
                                        <div class="c-coments__photo">`

                        if (usuario.foto != null) {
                            comentario.innerHTML += `<img src=${usuario.foto} alt=""></img>`
                        } else {
                            comentario.innerHTML += `<img src='images/icons/PerfilVermelho.png' alt=""></img>`
                        }

                        comentario.innerHTML += `<h4>${usuario.apelido}</h4>
                                                </div><div class="c-coments__box animate-bubble-float-left">
                                                <div class="c-coments__box--header"><h3></h3>
                                                <div class="c-coments__features"><div class="c-coments__features--players">`
                                                
                        comentario.innerHTML += `<strong><i class="icon ion-ios-game-controller-a-outline"></i>742</strong></div>
                                                <div class="c-coments__features--likes"><strong><i class="icon ion-ios-heart-outline"></i>550</strong>
                                                </div><div class="c-coments__features--evaluation js-note-yellow">
                                                <span>3.0</span></div></div></div><p>${resposta[i].texto}</p></div></div>`
                    })
            }
        })


}

async function carregaAvaliacao() {


    let url = `/jogo/elementos/avaliacao/carrega?jogo=${jogoId}`
    fetch(url, {
            method: 'GET'
        })
        .then((resposta) => resposta.json())
        .then((resposta) => {
            Avaliar(parseInt(resposta.avaliacao) + 1);
        })

}

async function carregaElementos() {


    let url = `/jogo/elementos/jogoid?jogo=${id}`
    fetch(url, {
            method: 'GET'
        })
        .then((resposta) => resposta.json())
        .then((resposta) => {

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

            if (resposta.foto != null) {
                headPage.innerHTML = ''
                headPage.innerHTML += `<img  class="c-photo-game" src=${resposta.foto} alt="">`
            } else {
                headPage.innerHTML = ''
                headPage.innerHTML += `<img  class="c-photo-game" src='images/default/jogoDefault.jpg' alt="">`
            }


            if (resposta.video != null) {
                linkYt.innerHTML = `<iframe width="560" height="315" src=${resposta.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            } else {
                linkYt.innerHTML = '<h2>Não há vídeo</h2>'
            }


            carregaComentarios();
            carregaAvaliacao();

        })
}


async function leEstrelas() {

    document.getElementById("rated").addEventListener('click', function () {
        nota = document.getElementById("rating").textContent
        //console.log(nota)

        let url = `/jogo/elementos/avaliacao/${jogoId}/${nota}`
        fetch(url, {
                method: 'POST'
            })
            .then((resposta) => console.log(resposta.statusText))

    });

}




carregaElementos();
leEstrelas();