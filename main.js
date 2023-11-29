//Criando/declarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    //if else elemento operadores comparação
    const elemento = document.querySelector(idElementoAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("elemento não encontrado");
    }
}
//criando referência constante listaDeTeclas buscando 
//todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//estrutura de repetição "while" significa 
//"enquanto algo acontecer" mudou while para "for"
for(let contador = 0;contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas [contador];
    const efeito = tecla.classList [1];
    const idAudio = #som_${efeito};
    tecla.onclick = function(){
        tocaSom (idAudio);
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
