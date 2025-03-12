import { areaQuadrado, perimetroQuadrado } from './quadrado.js'
import numeroAleatorio from './numeroAleatorio.js'
import Circulo from './circulo.js'

console.log(areaQuadrado(4))
console.log(perimetroQuadrado(5))
console.log(numeroAleatorio())

console.log(Circulo.area(2))
console.log(Circulo.circunferencia(4))
console.log(`Número aleatório ->  ${Circulo.aleatorio()}`)
