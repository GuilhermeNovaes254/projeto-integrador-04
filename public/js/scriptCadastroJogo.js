let date = new Date();
let min = 1900,
    max = date.getFullYear(),
    select = document.getElementById('anoJogo');

for (let i = min; i <= max; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

select.value = new Date().getFullYear();

let min2 = 0,
    max2 = 18,
    select2 = document.getElementById('faixaEtaria');

for (let i = min2; i <= max2; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select2.appendChild(opt);
}

let fotoPerfil = document.getElementById('file-input');
let imgFotoPerfil = document.getElementById('imgFotoPerfil');
let fotoTema = document.getElementById('inputFileTemaJogo');
let imgFotoTema = document.getElementById('temaCadastroJogo');

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