function buscaEstados() {
    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    // Setup our listener to process completed requests
    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            let estados = JSON.parse(xhr.responseText);
            let select = document.getElementById('estado');
            select.innerText = '';
            select.innerHTML = '<option value="">Selecione</option>';



            for (let estado of estados) {
                select.innerHTML += `<option value="${estado.id}">${estado.sigla}</option>`
            }

        }
    };

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL

    xhr.open('GET', '/buscaEstado');
    xhr.send();
};

buscaEstados();

function buscaCidades(estadoselecionado) {
    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    // Setup our listener to process completed requests
    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            let cidades = JSON.parse(xhr.responseText);
            let select = document.getElementById('cidade');
            select.innerText = '';
            select.innerHTML = '<option value="">Selecione</option>';

            for (let cidade of cidades) {
                select.innerHTML += `<option value="${cidade.id}">${cidade.cidade}</option>`
            }
        }

    };
    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    let url = '/buscaCidade/' + estadoselecionado
    xhr.open('GET', url);
    xhr.send();
};

let selectestado = document.getElementById('estado');

let estadoselecionado = selectestado.addEventListener("change", function () {
    buscaCidades(this.value);
});


let date = new Date();
let min = 1910,
    max = date.getFullYear(),
    select = document.getElementById('anoNasc');
for (let i = min; i <= max; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}
select.value = new Date().getFullYear();
let min2 = 1,
    max2 = 31,
    select2 = document.getElementById('diaNasc');
for (let i = min2; i <= max2; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select2.appendChild(opt);
}



//carregar foto selecionada para perfil e tema
let fotoPerfil = document.getElementById('file-input');
let imgFotoPerfil = document.getElementById('imgFotoPerfil');
let fotoTema = document.getElementById('inputFileTema');
let imgFotoTema = document.getElementById('tema');

fotoPerfil.addEventListener('change', function (evt) {

    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            imgFotoPerfil.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
})

fotoTema.addEventListener('change', function (evt) {

    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            imgFotoTema.style.backgroundImage = "url('"+fr.result+"')"
        }
        fr.readAsDataURL(files[0]);
    }
})