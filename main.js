function tocaSom(idElementoAudio){
    constelemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado");
    }
}
const listaDeTeclas= document.querySelectorAll('.tecla');
for(let contador=0;contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const audio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}