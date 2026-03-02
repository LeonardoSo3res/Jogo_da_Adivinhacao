const somAcerto = new Audio("somAcerto.mp3");
const somErro = new Audio("somErro.mp3");
const somDerrota = new Audio("fimdejogo.mp3");
const musica = new Audio("musica.mp3");

const form = document.getElementById('formulario');

function geraNumero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
} //gerador do numero

document.body.addEventListener("click", function iniciarMusica() {
  musica.loop = true; // música em loop
  musica.play();
  document.body.removeEventListener("click", iniciarMusica);
});

function adivinhar(event) {

  event.preventDefault(); // para evitar recarregar a página

  alert('Seja bem-vindo ao jogo da adivinhação!');

  const resposta = prompt(
    'Deseja continuar? \n (1) SIM \n (2) NÃO'
  );

  if (resposta !== '1') {
    alert('Até mais!');
    return;
  }

  alert('Ok, vamos começar! Você tem 3 chances.');

  const numeroSecreto = geraNumero(1, 11);
  let tentativas = 3;

  while (tentativas > 0) {

    const palpite = Number(
      prompt(`Digite um número entre 1 e 10. Tentativas restantes: ${tentativas}`)
    );

    if (palpite === numeroSecreto) {
      somAcerto.pause();
      somAcerto.currentTime = 0;
      somAcerto.play();
      alert('🎉 Você acertou!');
      return;

    } else {
      somErro.pause();
      somErro.currentTime = 0;
      somErro.play();

      tentativas--;

      if (tentativas > 0) {
                   
        if (palpite > numeroSecreto) {
          alert('❌ Você errou! O número secreto é MENOR.');
        } else {
          alert('❌ Você errou! O número secreto é MAIOR.');

        somErro.pause();
        somErro.currentTime = 0;
        somErro.play(); 

        }

      } else {

        alert(`😢 Você perdeu! O número correto era ${numeroSecreto}.`);
        somDerrota.pause();
        somDerrota.currentTime = 0;
        somDerrota.play();
        return; // encerra o jogo
      }
    }
  }
}

form.addEventListener('submit', adivinhar);
