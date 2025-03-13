const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados'
]

// Filter - quando retorna true ele coloca no array
const precosFiltro = precos.filter(preco => preco.includes('R$'))

console.log(precosFiltro)

// Map - utilizado para manipular e devolver um novo array
const precoNumeros = precosFiltro.map(function (preco) {
  return +preco.replace('R$ ', '') //  esse + transforma os elementos do array em número
})

// const total = precoNumeros.reduce(function (acumulador, atual) {
//   console.log(acumulador, atual)
//   return acumulador + atual
// })

const total = precoNumeros.reduce((acumulador, atual) => acumulador + atual) //  esse reduce é uma função que recebe dois argumentos: acumulador e atual, e retorna um novo acumulador. Inicialmente o acumulador é 0.

console.log(total)

// Observação: Map, Filter e Reduce não alteram o array original eles retornam um novo array com os valores alterados ou filtrados.
