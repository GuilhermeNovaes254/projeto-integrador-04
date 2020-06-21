
let filtro = document.querySelector('.c-search-form__inline-filters__current');
let filtroTipo = document.querySelector('.c-search-form__inline-filters__current span');
let boxOpcoes = document.querySelector('.c-search-form__inline-filters__options');
let inputGames = document.querySelector('#advance-search-games');
let inputUsers = document.querySelector('#advance-search-users');
let btnSearch = document.querySelector('.c-search-form__submit');
let Url = window.location.href.replace('/feeds','');
let valueSearch;

const ativarBotaoDaBusca = () =>{
  if(inputGames){
    inputGames.addEventListener('change',function(){
      valueSearch = inputGames.value;
    })
  
    btnSearch.addEventListener('click', function(){
      window.location.href = Url + "/busca?tipo=jogo&nomeUsuario=&nomeJogo=" + valueSearch + "&tema=0&dominio=0&mecanica=0";
    }); 
  }
}

window.addEventListener('DOMContentLoaded', function(){

  if(inputUsers){
    inputUsers.style.display = "none";
  }

  ativarBotaoDaBusca();

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

          inputGames.addEventListener('change',function(){
            valueSearch = inputGames.value;
          })
        
          btnSearch.addEventListener('click', function(){
            window.location.href = Url + "/busca?tipo=jogo&nomeUsuario=&nomeJogo=" + valueSearch + "&tema=0&dominio=0&mecanica=0";
          }); 

        }else{
          filtroTipo.textContent = 'Usuários';
          inputUsers.style.display = "block";
          inputGames.style.display = "none";

          inputUsers.addEventListener('change',function(){
            valueSearch = inputUsers.value;
          })

          btnSearch.addEventListener('click', function(){
            window.location.href = Url + "/busca?tipo=usuario&nomeUsuario=" + valueSearch + "&nomeJogo=&tema=0&dominio=0&mecanica=0";
          }); 
        }
    
    });
  }
  

});