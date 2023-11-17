// Opções de pizzas
var pizzas = [
  "Margherita",
  "Pepperoni",
  "Frango com Catupiry",
  "Vegana"
];

// Função para exibir o menu de pizzas
function exibirMenu() {
  console.log("===== Menu de Pizzas =====");
  for (var i = 0; i < pizzas.length; i++) {
      console.log(i + 1 + ". " + pizzas[i]);
  }
}

// Função principal
function pizzaria() {
  // Exibir o menu
  exibirMenu();

  // Sortear uma pizza aleatoriamente
  var indiceSorteado = Math.floor(Math.random() * pizzas.length);
  var pizzaEscolhida = pizzas[indiceSorteado];

  // Exibir a pizza sorteada
  console.log("\nSorteando uma pizza...");
  setTimeout(function () {
      console.log("\nA pizza escolhida é: " + pizzaEscolhida + ". Bom apetite!");
  }, 2000); // Atraso de 2 segundos para simular o sorteio
}

// Chamar a função principal para iniciar a pizzaria
pizzaria();
