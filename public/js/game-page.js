let commentsAvaliate = document.querySelectorAll('.c-comments__features--evaluation span');

const AdicionarCor = () =>{

  if(commentsAvaliate){
    commentsAvaliate.forEach(note => {

      let noteValue = note.textContent;
      let noteConverter = noteValue.replace(".", "");
      let elParent = note.parentNode;
      elParent.classList.add('js-note-' + noteConverter);

    });
  };

}

window.addEventListener('DOMContentLoaded', AdicionarCor);

/* export default AdicionarCor; */