//#region EventListeners
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

const btnFavoritar = document.getElementById('favoritar');
btnFavoritar.addEventListener('click', function () {
    adicionaFavorito();
});

const btnColecionar = document.getElementById('colecao');
btnColecionar.addEventListener('click', function () {
    adicionaColecao();
});

const rating = document.getElementById('rating');
rating.addEventListener('change', function () {
    let nota = getRadioVal(this, 'c-rating');
    postaAvaliacao(nota)
});
//#endregion

//#region ActionRequests
async function carregaComentarios() {
    let qtdComentarios = document.getElementsByClassName('c-comments');
    let indice = qtdComentarios[qtdComentarios.length - 1].id;
    let url = `/jogo/acao/carregaComentario?jogo=${jogo}&indice=${indice}`;

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
        jogo
    };

    let url = `/jogo/acao/postaComentario`;
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
                elemento.style.display = "none"
            }
            document.getElementById('spinner').className = '';
        });
}

async function postaAvaliacao(nota) {
    let url = `/jogo/acao/postaAvaliacao`;
    fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jogo, nota })
        })
        .then((resposta) => resposta.json())
        .then((nota) => {
            document.getElementById('notaJogo').innerText = (nota.notaFinal / 2).toFixed(1);
            
        });
}


async function adicionaFavorito() {
    let url = `/jogo/acao/adicionaFavorito`;
    fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jogo })
        })
        .then((resposta) => resposta.text())
        .then((favorito) => {
            console.log(favorito);
            if (favorito == "true") {
                btnFavoritar.innerText = 'Desfavoritar';
            } else if (favorito == "false") {
                btnFavoritar.innerText = 'Favoritar';
            }
        });
}

async function adicionaColecao() {
    let url = `/jogo/acao/adicionaColecao`;
    fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jogo })
        })
        .then((resposta) => resposta.text())
        .then((colecao) => {
            console.log(colecao);
            if (colecao == "true") {
                btnColecionar.innerText = 'Retira coleção';
            } else if (colecao == "false") {
                btnColecionar.innerText = 'Adiciona coleção';
            }
        });
}
//#endregion

//#region TO_DO
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
//#endregion

//#region Funções gerais
function getRadioVal(form, name) {
    let val;
    let radios = form.elements[name];
    
    // loop through list of radio buttons
    for (let i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value;
            break;
        }
    }
    return val;
}

function alteraCorElementos() {
    document.querySelector('.c-jogo__left--news').style.background = `rgb(${dominantColor})`;
    document.getElementById('posta-comentario').style.background = `rgb(${dominantColor})`;
    document.querySelector('header').style.background = `rgb(${dominantColor})`;
    document.querySelector('footer div').style.background = `rgb(${dominantColor})`;
}
//#endregion

const jogo = document.getElementById('jogoId').value;

alteraCorElementos();