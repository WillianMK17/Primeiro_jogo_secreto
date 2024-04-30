//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 0 e 10"

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;
//funcoes com paramentros
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}
function exibirMensagemInicial(){
  exibirTextoNaTela('h1','jogo do número secreto');
  exibirTextoNaTela('p','Escolha um número de 1 a 10');

}
exibirMensagemInicial();
  


function verificarChute(){
    let chute = document.querySelector('input').value; //tipo booleano true or false
    console.log(chute == numeroSecreto); // == comparar e = para atribuir valor
    if( chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa= tentativas > 1 ? 'tentativas': 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas)
      document.getElementById('reiniciar').removeAttribute('disabled')
     // exibirTextoNaTela('p','Você descobriu o número secreto com x tentativas');
    } else{
      if( chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor');
      } else{
        exibirTextoNaTela('p','O número secreto é maior');
      }
      tentativas++;
      limparCampo()
    }
}
// na funçao gera o numero secreto, depois return para a variavel numero secreto. que é ativada quando
// aperta o botao chute, caindo na funcao verificar chute
//funcoes com retorno (return)
function GerarNumeroAleatorio() {
  //return parseInt(Math.random() * 10 + 1);
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == 10) {
    listaDeNumerosSorteados=[];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return GerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = GerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

