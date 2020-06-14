// var xhr = new XMLHttpRequest();

// let id = jogoId;
// let user = userId;

// async function carregaComentarios() {

//     // let url = `/jogo/elementos/comentario?jogo=${jogoId}`
//     // fetch(url, {
//     //     method: 'GET'
//     // })
//     // .then((resposta) => resposta.json())
//     // .then((resposta) => {
//     //     console.log(resposta)
//     // })


// }

// async function carregaAvaliacao() {


//     let url = `/jogo/elementos/avaliacao/carrega?jogo=${jogoId}`
//     fetch(url, {
//             method: 'GET'
//         })
//         .then((resposta) => resposta.json())
//         .then((resposta) => {
//             console.log('Carrega' + resposta)
//             Avaliar(parseInt(resposta.avaliacao) + 1);
//         })

// }

// async function carregaElementos() {


//     let url = `/jogo/elementos/jogoid?jogo=${id}`
//     fetch(url, {
//             method: 'GET'
//         })
//         .then((resposta) => resposta.json())
//         .then((resposta) => {

//             let banner = document.getElementsByClassName('c-banner-jogo')
//             let headPage = document.getElementById("headPage");
//             let nome = document.getElementById("jogoNome");
//             let descricao = document.getElementById('jogoDescricao');
//             let linkYt = document.getElementById("jogolinkYoutube");

//             nome.innerText = resposta.nome
//             descricao.innerText = resposta.descricao

//             if (resposta.fotoTema != null) {
//                 banner[0].style.backgroundImage = `url(${resposta.fotoTema} )`;
//             } else {
//                 banner[0].style.backgroundImage = `url('images/default/h1.jpg')`
//             }

//             if (resposta.foto != null) {
//                 headPage.innerHTML = ''
//                 headPage.innerHTML += `<img  class="c-photo-game" src=${resposta.foto} alt="">`
//             } else {
//                 headPage.innerHTML = ''
//                 headPage.innerHTML +=`<img  class="c-photo-game" src='images/default/jogoDefault.jpg' alt="">`
//             }


//             if (resposta.video != null) {
//                 linkYt.innerHTML = `<iframe width="560" height="315" src=${resposta.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//             } else {
//                 linkYt.innerHTML = '<h2>Não há vídeo</h2>'
//             }


//             carregaComentarios();
//             carregaAvaliacao();

//         })
// }


// async function leEstrelas() {

//     document.getElementById("rated").addEventListener('click', function () {
//         nota = document.getElementById("rating").textContent
//         //console.log(nota)

//         let url = `/jogo/elementos/avaliacao/${jogoId}/${nota}`
//         fetch(url, {
//                 method: 'POST'
//             })
//             .then((resposta) => console.log(resposta.statusText))

//     });

// }




// carregaElementos();
// leEstrelas();
