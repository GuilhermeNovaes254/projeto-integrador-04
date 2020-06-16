let url = window.location.href;
let page = url.split('/');
page = page[page.length-1];

if(page.split('?')[0] == 'jogo'){
  let writeComment = document.querySelector('.c-write');
  writeComment.classList.add('js-activeWrite');
}