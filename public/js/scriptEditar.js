let formData = JSON.parse(formDataEnv);
let foto1 = formFoto;
let fotoTema1 = formFotoTema;
let genero = formGenero;
let estado = formEstado;
let cidade = formCidade;
let diaNasc = formDiaNasc;
let mesNasc = formMesNasc;
let anoNasc = formAnoNasc;
let nivelAp = formNivelAp;
let moderador = formModerador;
let fotoTemaCad = formFotoTemaCad;
let fotoCad = formFotoCad;

//variaveis DOM
let fotoPerfil = document.getElementById('file-input');
let imgFotoPerfil = document.getElementById('imgFotoPerfil');
let fotoTema = document.getElementById('inputFileTema');
let imgFotoTema = document.getElementById('tema');
let selectestado = document.getElementById('estado');
let selectMesNasc = document.getElementById('mesNasc');
let selectGenero = document.getElementById('genero');
let selectNivelAp = document.getElementById('tipoNivelAP');
let imagemPerfil = document.getElementById('imagemPerfil');
let imagemTema = document.getElementById('imagemTema');
let selectCidade = document.getElementById('cidade');
let divModerador = document.getElementById('mostrarModerador');

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

            if (typeof(formData.estado) != "undefined" && formData.estado != null) {
                select.value = formData.estado;
            }else{
                select.value = estado;
            };

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

            if (typeof(formData.cidade) != "undefined" && formData.cidade != null) {
                select.value = formData.cidade
            }else{
                select.value = cidade;
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

let estadoselecionado = selectestado.addEventListener("change", function () {
    buscaCidades(this.value);
});

if (typeof(formData.estado) != "undefined" && formData.estado != null) {
    buscaCidades(formData.estado);
}else{
    buscaCidades(estado);
}

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

if (typeof(formData.anoNasc) != "undefined" && formData.anoNasc != null) {
    select.value = formData.anoNasc;
}else{
    if (typeof(anoNasc) != "undefined" && anoNasc != null && anoNasc != ""){
        select.value = anoNasc;
    }
};


let min2 = 1,
    max2 = 31,
    select2 = document.getElementById('diaNasc');
for (let i = min2; i <= max2; i++) {
    let opt2 = document.createElement('option');
    opt2.value = i;
    opt2.innerHTML = i;
    select2.appendChild(opt2);
}
if (typeof(formData.diaNasc) != "undefined" && formData.diaNasc != null) {
    select2.value = formData.diaNasc;
}else{
    if (typeof(diaNasc) != "undefined" && diaNasc != null && diaNasc != ""){
        select2.value = parseInt(diaNasc);
    }
};

//populando manualmente outros combos
if (typeof(formData.mesNasc) != "undefined" && formData.mesNasc != null) {
    selectMesNasc.value = formData.mesNasc;
}else{
    if (typeof(mesNasc) != "undefined" && mesNasc != null && mesNasc != ""){
        selectMesNasc.value = parseInt(mesNasc);
    }
};

if (typeof(formData.genero) != "undefined"  && formData.genero != null) {
    selectGenero.value = formData.genero;
}else{
    selectGenero.value = genero;
};

if (typeof(formData.tipoNivelAP) != "undefined" && formData.tipoNivelAP != null) {
    selectNivelAp.value = formData.tipoNivelAP;
}else{
    selectNivelAp.value = nivelAp;
};

if(moderador === '1'){
    divModerador.innerHTML += '<label for="moderador">Solicitar se tornar moderador</label><select class="form-control" id="moderador" name="moderador"><option value="0">Não</option><option value="1">Sim</option></select>';
    if (typeof(formData.moderador) != "undefined" && formData.moderador != null) {
        let selectModerador = document.getElementById('moderador');
        selectModerador.value = formData.moderador;
    }

}

//carregar foto selecionada para perfil e tema
fotoPerfil.addEventListener('change', function (evt) {

    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            imgFotoPerfil.src = fr.result;
            imgFotoPerfil.width = "150";
            imgFotoPerfil.height = "150";
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

//populando manualmente fotos
if (typeof(foto1) != "undefined" && foto1.length > 0) {
    imgFotoPerfil.src = '/buscaImagem/' + foto1;
    imagemPerfil.value = foto1;
}else{
    imagemPerfil.value = fotoCad; 
}

if (typeof(fotoTema1) != "undefined" && fotoTema1.length > 0) {
    imgFotoTema.style.backgroundImage = "url('" + '/buscaImagem/' + fotoTema1 + "')"
    imagemTema.value = fotoTema1;
}else{
    imagemTema.value = fotoTemaCad;
};