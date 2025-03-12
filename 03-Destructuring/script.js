function handleMouseMove(event) {
  // Destruturando event.clientX e event.clientY
  const { clientX, clientY, target } = event
  console.log(clientX, clientY, target)
}

// Outra forma de desestruturar
function handleMouseMoveDiff({ clientX, clientY, target }) {
  // Aqui você pode fazer algo com os valores desestruturados
  clientX = 'abc'
  console.log(clientX, clientY, target)
}

//document.documentElement.addEventListener('mousemove', handleMouseMove)
//document.documentElement.addEventListener('mousemove', handleMouseMoveDiff)

// Arrays
const frutas = ['Banana', 'Uva']

const [fruta1, fruta2] = frutas

//console.log(fruta1)
//console.log(fruta2)

const useState = [
  'blue',
  function (color) {
    useState[0] = color
  }
]

const [color, setColor] = useState

setColor('red')
