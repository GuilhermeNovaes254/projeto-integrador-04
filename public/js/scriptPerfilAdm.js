var xhr = new XMLHttpRequest();

async function listaPessoas(){

    xhr.onload = function () {
        table.innerText = "";
        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            var resposta = JSON.parse(xhr.responseText);
            console.log(resposta)
            let tbody = document.getElementsByTagName("tbody");

            tbody.innerText = '';
            tbody.innerHTML = '';

            for( let i=0; i<resposta.length; i++ ){

                tbody.innerHTML += '<tr>'
                tbody.innerHTML += '<td><img src='+ resposta[i].foto +'alt="Avatar"></td>'
                tbody.innerHTML += '<td>'+resposta[i].descricao +'</td>'
                tbody.innerHTML += '<td>'
                tbody.innerHTML += '<img id="lapisVerde" src="/images/icons/lapisVerde.png" alt="lapisVerde">'
                tbody.innerHTML += '<img id="lapisVerde" src="/images/icons/Xis.png" alt="Xis">'
                tbody.innerHTML += '</td>'
                tbody.innerHTML += '</tr>'

            }
            


        }
    };


    let url = '/aprovaAdm'  
    // '/aprovaMod'
    console.log(url)
    xhr.open('GET', url);
    xhr.send();

}

document.addEventListener("onload", listaPessoas());
