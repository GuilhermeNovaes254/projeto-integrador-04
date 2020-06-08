let date = new Date();
let formData = JSON.parse(formDataEnv);
let foto1 = formFoto;
let fotoTema1 = formFotoTema;

//variaveis DOM
let selectTema = document.getElementById('temaJogo');
let selectPeso = document.getElementById('pesoJogo');
let selectDominio = document.getElementById('dominioJogo');
let selectMecanica = document.getElementById('mecanicaJogo');
let selectDownTime = document.getElementById('downtimeJogo');
let fotoPerfil = document.getElementById('file-input');
let imgFotoPerfil = document.getElementById('imgFotoPerfil');
let fotoTema = document.getElementById('inputFileTemaJogo');
let imgFotoTema = document.getElementById('temaCadastroJogo');
let imagemPerfil = document.getElementById('imagemPerfil');
let imagemTema = document.getElementById('imagemTema');

//preenchendo campo anoJogo
let min = 1900,
    max = date.getFullYear(),
    select = document.getElementById('anoJogo');

for (let i = min; i <= max; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
};

select.value = new Date().getFullYear();


if (typeof(formData.anoJogo) != "undefined") {
    select.value = formData.anoJogo;
};



//preenchendo campo faixaEtaria
let min2 = 0,
    max2 = 18,
    select2 = document.getElementById('faixaEtaria');

for (let i = min2; i <= max2; i++) {
    let opt2 = document.createElement('option');
    opt2.value = i;
    if(i === 0){
        opt2.innerHTML = "Livre";
    }else{
        opt2.innerHTML = i;
    }
    select2.appendChild(opt2);
};


if (typeof(formData.faixaEtaria) != "undefined") {
    select2.value = formData.faixaEtaria;
};

//populando manualmente outros combos
if (typeof(formData.temaJogo) != "undefined") {
    selectTema.value = formData.temaJogo;
};

if (typeof(formData.pesoJogo) != "undefined") {
    selectPeso.value = formData.pesoJogo;
};

if (typeof(formData.dominioJogo) != "undefined") {
    selectDominio.value = formData.dominioJogo;
};

if (typeof(formData.mecanicaJogo) != "undefined") {
    selectMecanica.value = formData.mecanicaJogo;
};

if (typeof(formData.downtimeJogo) != "undefined") {
    selectDownTime.value = formData.downtimeJogo;
};


//carregar foto selecionada para perfil
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

//carregar foto selecionada para tema
fotoTema.addEventListener('change', function (evt) {

    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            imgFotoTema.style.backgroundImage = "url('" + fr.result + "')"
        }
        fr.readAsDataURL(files[0]);
    }
})


//populando manualmente fotos
if (typeof(foto1) != "undefined" && foto1.length > 0) {
    imgFotoPerfil.src = '/buscaImagem/' + foto1;
    imagemPerfil.value = foto1;
};

if (typeof(fotoTema1) != "undefined" && fotoTema1.length > 0) {
    imgFotoTema.style.backgroundImage = "url('" + '/buscaImagem/' + fotoTema1 + "')"
    imagemTema.value = fotoTema1;
};