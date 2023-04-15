const gerarBotao = document.querySelector('#gerar');
const numerosGerados = document.querySelector('#numerosGerados');

const gerarNumero = () => Math.floor(Math.random() * 100) + 1;


gerarBotao.addEventListener('click', () => {
  const novoNumero = gerarNumero();
  const novoItem = document.createElement('li');
  novoItem.textContent = novoNumero;
  numerosGerados.appendChild(novoItem);
});

