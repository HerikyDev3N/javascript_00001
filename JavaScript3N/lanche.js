// Definindo um objeto Pizza para representar cada opção
function Pizza(nome, ingredientes) {
  this.nome = nome;
  this.ingredientes = ingredientes;
}

// Lista de pizzas
var pizzas = [
  new Pizza("Margherita", ["Molho de Tomate", "Mozzarella", "Manjericão"]),
  new Pizza("Pepperoni", ["Molho de Tomate", "Pepperoni", "Mozzarella"]),
  new Pizza("Frango com Catupiry", ["Molho de Tomate", "Frango", "Catupiry", "Mozzarella"]),
  new Pizza("Vegana", ["Molho de Tomate", "Vegetais", "Queijo Vegano"])
];

// Função para exibir o menu de pizzas
function exibirMenu() {
  console.log("===== Menu de Pizzas =====");
  pizzas.forEach(function (pizza, index) {
      console.log(index + 1 + ". " + pizza.nome);
  });
}

// Função para processar o pedido do usuário
async function fazerPedido() {
  return new Promise(resolve => {
      setTimeout(() => {
          const indiceEscolhido = Math.floor(Math.random() * pizzas.length);
          resolve(indiceEscolhido);
      }, 2000); // Atraso de 2 segundos para simular o sorteio
  });
}

// Função principal assíncrona
async function pizzaria() {
  console.log("Bem-vindo à Pizzaria!");

  // Exibir o menu
  exibirMenu();

  // Simular a escolha de uma pizza (substitua por input do usuário ou lógica desejada)
  const opcaoUsuario = 2;

  // Verificar se a escolha do usuário é válida
  if (isNaN(opcaoUsuario) || opcaoUsuario < 1 || opcaoUsuario > pizzas.length) {
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      return;
  }

  console.log("\nProcessando pedido...");

  // Simular o processo de pedido assíncrono
  const indiceSorteado = await fazerPedido();

  // Exibir a pizza escolhida
  console.log("\nA pizza escolhida é: " + pizzas[indiceSorteado].nome);
  console.log("Ingredientes: " + pizzas[indiceSorteado].ingredientes.join(", "));
  console.log("Bom apetite!");
}

// Chamar a função principal para iniciar a pizzaria
pizzaria();
