
let filtro = document.querySelector('.c-search-form__inline-filters__current');
let filtroTipo = document.querySelector('.c-search-form__inline-filters__current span');
let boxOpcoes = document.querySelector('.c-search-form__inline-filters__options');
let inputGames = document.querySelector('#advance-search-games');
let inputUsers = document.querySelector('#advance-search-users');

window.addEventListener('DOMContentLoaded', function(){

  if(inputUsers){
    inputUsers.style.display = "none";
  }

  if(filtro){
    filtro.addEventListener('click', function(){
      boxOpcoes.classList.toggle("js-is-open");
      filtro.classList.toggle("js-is-highlighted");
    });
  }

  if(boxOpcoes){
    boxOpcoes.addEventListener('change', function(){

      let target = event.target;
      let targetId = event.target.id;
    
        if(targetId == 'search-form_content_games'){
          filtroTipo.textContent = 'Jogos';
          inputUsers.style.display = "none";
          inputGames.style.display = "block";
        }else{
          filtroTipo.textContent = 'Usuários';
          inputUsers.style.display = "block";
          inputGames.style.display = "none";
        }
    
    });
  }
  

});