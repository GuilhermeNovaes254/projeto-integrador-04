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