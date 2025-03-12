// ... Rest - o resto coloca dentro do array exemplo array possui a,b,c e se eu adicionar mais alguma coisa, ele vai utilizar o a,b,c e o que eu adiciona

function showList(empresa, ...clientes) {
  console.log(empresa)
  console.log(clientes)
}

showList('Origamid', 'João', 'Maria', 10)

// Spread
const numeros = [1, 2, 4, 29, 32, 2, 45, 3]

console.log(Math.max(...numeros))

const itens = document.querySelectorAll('li')

itens.forEach(item => {
  console.log(item)
})

// Transformando em array

/**
const itens2 = Array.from(document.querySelectorAll('li'))
 * 
  itens2.map(item => {
    console.log(item)
  })
  *

  ou

  [...itens2].map(item => {
    console.log(item)
  })
 */

const carro1 = { cor: 'Azul', portas: 4, ano: 2020 }

const cloneCarro2 = carro1 //  esse é uma referencia ao carro

const cloneCarro = { ...carro1, turbo: true } // esse é uma cópia

console.log(carro1)

console.log('****************************************************************')

class Transporte {
  constructor() {
    this.terrestre = true
  }

  andar() {
    console.log('Andou')
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super()
    this.cor = cor
    this.portas = portas
  }
}

const carro = new Carro('Azul', 4)
const cloneCarro3 = { ...carro } //  nesse caso ele não acessa o metodo andar

console.log(carro)
console.log(cloneCarro3)
