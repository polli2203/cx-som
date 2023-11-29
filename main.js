function tocaSom(idElementoAudio){
    //if else elemento operadores comparação
    const elemento = document.querySelector(idElementoAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("elemento não encontrado");
    }
const listaDeTeclas = document.querySelectorAll('.tecla');
for(let contador = 0;contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
        }
    }
}