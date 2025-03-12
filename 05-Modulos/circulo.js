import numeroAleatorio from './numeroAleatorio.js'

function area(raio) {
  return Math.PI * raio ** 2
}

function circunferencia(raio) {
  return 2 * Math.PI * raio
}

function aleatorio() {
  return numeroAleatorio()
}

const Circulo = {
  area,
  circunferencia,
  aleatorio
}

export default Circulo
