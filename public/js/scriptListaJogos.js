var xhr = new XMLHttpRequest();

async function listaJogos() {
    xhr.onload = async function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            let resposta = await JSON.parse(xhr.responseText);

            let highFive = document.querySelectorAll('.o-highlights-five');
            let qntSliders = resposta.length;

            if(highFive){
                highFive.forEach(sliderCard => {
                    for (let i = 0; i < qntSliders; i++) {
                        sliderCard.innerHTML += `<div class="o-highlights__content o-highlights-five__content o-col-and-5 animate-float-shadow" data-aos="fade-up" data-aos-duration="1000">
                        <div class="o-highlights__header o-highlights-five__header" >
                          <h2>${resposta[i].nome}</h2>
                          <a href='/jogo?jogo=${resposta[i].id}'><img src="${resposta[i].foto != null ? resposta[i].foto : 'images/capitao_silver.jpg'}" alt="${resposta[i].nome}"></a>
                        </div>
                        <div class="o-highlights__description o-highlights-five__description">
                    
                        </div>
                      </div>`;
                    }
                });
            }
            
            console.log(resposta);

            /* for (let j = 0; j < 3; j++) {
                for (let i = 0; i < resposta.length; i++) {

                    highFive[j].innerHTML += `<div class="o-highlights__content o-highlights-five__content o-col-and-5 animate-float-shadow" data-aos="fade-up" data-aos-duration="1000">`
                    highFive[j].innerHTML += `<div class="o-highlights__header o-highlights-five__header" >`
                    highFive[j].innerHTML += `<h2>${resposta[i].nome}</h2>`
                    highFive[j].innerHTML += `<a href='/jogo?jogo=${resposta[i].id}'><img src="${resposta[i].foto}" alt="${resposta[i].nome}"></a>`
                    highFive[j].innerHTML += `</div>`
                    highFive[j].innerHTML += `<div class="o-highlights__description o-highlights-five__description"></div>`
                    highFive[j].innerHTML += `</div>`
                }
            } */
        }
    };

    let url = '/buscaJogo/lista?limite=10'

    xhr.open('GET', url);
    xhr.send();
}

listaJogos();