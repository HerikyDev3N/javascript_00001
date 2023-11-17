const meuBotao = document.getElementById('meuBotao');
const imagemPular = document.getElementById('imagemPular');

function alterarForma() {
  meuBotao.classList.add('clicado');
  meuBotao.innerText = 'Clicou';
}

meuBotao.addEventListener('mouseout', function() {
  meuBotao.classList.remove('clicado');
  meuBotao.classList.add('saiu');
  meuBotao.innerText = 'Saiu';

  // Exibir a imagem e fazer ela pular
  imagemPular.style.display = 'block';
  setTimeout(() => {
    imagemPular.style.width = '100%'; // Ajuste a largura desejada
    imagemPular.style.height = '100%'; // Ajuste a altura desejada
    imagemPular.style.top = '50%'; // Centraliza verticalmente
    imagemPular.style.left = '50%'; // Centraliza horizontalmente
    setTimeout(() => {
      imagemPular.style.display = 'none'; // Ocultar a imagem
      imagemPular.style.width = '50px'; // Restaurar a largura inicial
      imagemPular.style.height = '50px'; // Restaurar a altura inicial
      imagemPular.style.top = '50%'; // Restaurar a posição vertical inicial
      imagemPular.style.left = '50%'; // Restaurar a posição horizontal inicial
    }, 500);
  }, 50);
});
