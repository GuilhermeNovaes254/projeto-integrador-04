
let xhr = new XMLHttpRequest();

async function listaPessoas() {

    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            let resposta = JSON.parse(xhr.responseText);
            //console.log(resposta.length)
            //let tbody = document.getElementById('dinamico');
            let tbody = document.getElementById('table').getElementsByTagName('tbody')[0]


            if (resposta.length == 0) {
                let x = document.createElement("TR");
                let y1 = document.createElement("TD");
                let y2 = document.createElement("TD");
                let y3 = document.createElement("TD");

                y1.innerHTML = '<p>  </p>'
                y2.innerHTML = '<p>Sem ações necessárias</p>'
                y3.innerHTML = '<p>  </p>'

                x.appendChild(y1)
                x.appendChild(y2)
                x.appendChild(y3)

                tbody.appendChild(x)
                console.log('Sem resposta')

            } else {
                for (let i = 0; i < resposta.length; i++) {
                    console.log('oi')
                    let x = document.createElement("TR");
                    let y1 = document.createElement("TD");
                    let y2 = document.createElement("TD");
                    let y3 = document.createElement("TD");

                    y1.innerHTML = '<p>' + resposta[i].foto + '</p>'
                    y2.innerHTML = '<p>' + resposta[i].nome + '</p>'
                    y3.innerHTML = `<img id="like" src='/images/icons/like.png' alt="Like"><img id="like" src='/images/icons/dislike.png' alt="Dislike">`

                    x.appendChild(y1)
                    x.appendChild(y2)
                    x.appendChild(y3)

                    tbody.appendChild(x)

                }
            }


        }
    };


    let url = '/aprovaMod'
    // '/aprovaMod'
    //console.log(url)
    xhr.open('GET', url);
    xhr.send();

}


function conta() {
    fetch('/mod/conta?estado=aprovado')
    .then(resposta=>resposta.json())
    .then(res=>{
        let divAprovados = document.getElementById('numAprovados')
        divAprovados.innerText = res.length 
    })
    
    fetch('/mod/conta?estado=pendente')
    .then(resposta=>resposta.json())
    .then(res=>{
        let divPendentes = document.getElementById('numPendentes')
        divPendentes.innerText = res.length 
    })

    fetch('/mod/conta?estado=negado')
    .then(resposta=>resposta.json())
    .then(res=>{
        let divNegados = document.getElementById('numRejeitados')
        divNegados.innerText = res.length 
    })
      

}

window.addEventListener("load", function (event) {
    listaPessoas();
    conta();
  
});