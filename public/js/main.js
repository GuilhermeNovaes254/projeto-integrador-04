AOS.init();

function initModal(){
  var btEntrar = document.querySelector('.js-modal-login');

  if(btEntrar){
    btEntrar.addEventListener('click', openModal);
  }
}

function openModal(){
  var modalElement = document.querySelector('.o-modal-container');
  var btClose = document.querySelector('.js-modal-close');

  if(modalElement){
    modalElement.classList.add('js-active-modal');

    btClose.addEventListener('click', function(){
      modalElement.classList.remove('js-active-modal');
    });
  }
}

window.onload = initModal;