let url = window.location.href;
let page = url.split('/');
page = page[page.length-1];

if(page.split('?')[0] == 'jogo'){
  let writeComment = document.querySelector('.c-write');
  writeComment.classList.add('js-activeWrite');

  let spaceComment = document.querySelectorAll('.c-comments__box--header');

  spaceComment.forEach(el => {
    el.classList.add('js-spaceComment');
  });
  
}