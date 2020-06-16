const comentario = document.getElementById('comentario-texto');
comentario.addEventListener('keyup', function () {
    if (this.value.length > 0) {
        document.getElementById('posta-comentario').disabled = false;
    } else {
        document.getElementById('posta-comentario').disabled = true
    }
});

const btnComentario = document.getElementById('posta-comentario');
btnComentario.addEventListener('click', function () {
    document.getElementById('spinner').className = "spinner-border spinner-border-sm";
    postaComentario();
});

async function carregaComentarios(jogoId) {
    let qtdComentarios = document.getElementsByClassName('c-coments');
    let indice = qtdComentarios[qtdComentarios.length - 1].id;
    let url = `/jogo/elementos/comentario?jogo=${jogoId}&indice=${indice}`;

    fetch(url, { method: 'GET' })
        .then((resposta) => resposta.text())
        .then((comentarios) => {
            document.getElementById('comentarios').insertAdjacentHTML('beforeend', comentarios);
            let qtdRestantes = document.getElementsByClassName('countRestantes');
            let indiceRestantes = qtdRestantes[qtdRestantes.length - 1].value;
            if (indiceRestantes <= 5) {
                document.getElementById("verMais").style.display = "none";
            }
        })
}

async function postaComentario() {

    const comentario = {
        texto: document.getElementById('comentario-texto').value,
        jogo: document.getElementById('jogoId').value
    };

    let url = `/jogo/elementos/comentario`;
    fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentario)
        })
        .then((resposta) => resposta.text())
        .then((comentario) => {
            document.getElementById('comentario-texto').value = ''
            document.getElementById('posta-comentario').disabled = true;
            document.getElementById('coment-box').insertAdjacentHTML('afterend', comentario);
            let elemento = document.getElementById('no-data');
            if (elemento) {
                comentariosExiste.style.display = "none"
            }
            document.getElementById('spinner').className = '';
        });
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