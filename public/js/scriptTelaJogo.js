// var xhr = new XMLHttpRequest();

// let id = jogoId;
// let user = userId;

async function carregaComentarios(jogoId) {
    let qtdComentarios = document.getElementsByClassName('c-coments');
    let indice = qtdComentarios[qtdComentarios.length - 1].id;
    let url = `/jogo/elementos/comentario?jogo=${jogoId}&indice=${indice}`;

    fetch(url, {method: 'GET'})
        .then((resposta) => resposta.text())
        .then((comentarios) => {
            console.log(comentarios);
            document.getElementById('comentarios').insertAdjacentHTML('beforeend', comentarios);
            var count = document.getElementById('count').value;
            if(count <= 5){
                document.getElementById("verMais").style.display = "none";
            }
        })
}


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