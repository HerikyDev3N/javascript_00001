var data = new Date()
//console.log(data)
var hoje = data.getDay()
//console.log(hoje)

switch (hoje) {
  case 0:
        console.log('Domingo')
        break;
  case 1:
        console.log('Segunda-Feira')
        break;
  case 2:
        console.log('Terça-Feira')
        break;
  case 5:
        console.log('Sextouuuu')
        break;
  default:
    console.log('Dia da Semana Inválido!')
}