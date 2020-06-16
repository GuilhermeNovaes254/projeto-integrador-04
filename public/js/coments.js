let url = window.location.href;
let page = url.split('/');
page = page[page.length-1];

if(page.split('?')[0] == 'jogo'){
  let writeComment = document.querySelector('.c-write');
  writeComment.classList.add('js-activeWrite');

  let spaceComment = document.querySelector('.c-coments__box--header');
  spaceComment.classList.add('js-spaceComment');

  let featuresComment = document.querySelectorAll('.c-coments__features');

  featuresComment.forEach(el => {
    el.classList.add('js-hiddenEl');
  });
  
}