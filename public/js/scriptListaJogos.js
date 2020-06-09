var xhr = new XMLHttpRequest();

async function listaJogos() {
    xhr.onload = async function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            let resposta = await JSON.parse(xhr.responseText);

            let highFive1 = document.getElementById('highlights-five1')
            let highFive2 = document.getElementById('highlights-five2')
            let highFive3 = document.getElementById('highlights-five3')

            highFive1.innerHTML = ''
            highFive1.innerText = ''

            highFive2.innerHTML = ''
            highFive2.innerText = ''

            highFive3.innerHTML = ''
            highFive3.innerText = ''

            for (let i = 0; i < resposta.length; i++) {

                if (i < 10) {
                    highFive1.innerHTML += `<div class="o-highlights__content o-highlights-five__content o-col-and-5 animate-float-shadow" data-aos="fade-up" data-aos-duration="1000">`
                    highFive1.innerHTML += `<div class="o-highlights__header o-highlights-five__header" >`
                    highFive1.innerHTML += `<h2>${resposta[i].nome}</h2>`
                    highFive1.innerHTML += `<a href='/jogo?jogo=${resposta[i].id}'><img src="${resposta[i].foto}" alt="${resposta[i].nome}"></a>`
                    highFive1.innerHTML += `</div>`
                    highFive1.innerHTML += `<div class="o-highlights__description o-highlights-five__description"></div>`
                    highFive1.innerHTML += `</div>`
                }

                if (i > 10 && i < 20 ) {
                    highFive2.innerHTML += `<div class="o-highlights__content o-highlights-five__content o-col-and-5 animate-float-shadow" data-aos="fade-up" data-aos-duration="1000">`
                    highFive2.innerHTML += `<div class="o-highlights__header o-highlights-five__header" >`
                    highFive2.innerHTML += `<h2>${resposta[i].nome}</h2>`
                    highFive2.innerHTML += `<a href='/jogo?jogo=${resposta[i].id}'><img src="${resposta[i].foto}" alt="${resposta[i].nome}"></a>`
                    highFive2.innerHTML += `</div>`
                    highFive2.innerHTML += `<div class="o-highlights__description o-highlights-five__description"></div>`
                    highFive2.innerHTML += `</div>`
                }

                if (i > 20 && i < 30 ) {
                    highFive3.innerHTML += `<div class="o-highlights__content o-highlights-five__content o-col-and-5 animate-float-shadow" data-aos="fade-up" data-aos-duration="1000">`
                    highFive3.innerHTML += `<div class="o-highlights__header o-highlights-five__header" >`
                    highFive3.innerHTML += `<h2>${resposta[i].nome}</h2>`
                    highFive3.innerHTML += `<a href='/jogo?jogo=${resposta[i].id}'><img src="${resposta[i].foto}" alt="${resposta[i].nome}"></a>`
                    highFive3.innerHTML += `</div>`
                    highFive3.innerHTML += `<div class="o-highlights__description o-highlights-five__description"></div>`
                    highFive3.innerHTML += `</div>`
                }


            }
        }
    };

    let url = '/buscaJogo/lista?limite=30'

    xhr.open('GET', url);
    xhr.send();
}

listaJogos();