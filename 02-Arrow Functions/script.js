function upperName(name) {
  return name.toUpperCase()
}

// Arrow function
const nameLowerCase = name => {
  return name.toLowerCase()
}

const countLetters = word => word.length

//console.log(countLetters('Josemira'))

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu)
    this.activeClass = 'active'
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', event => {
      console.log(this)
      event.target.classList.add(this.activeClass)
    })
  }
}
const menu = new Menu('.principal')
menu.addActiveEvent()

// Observação
/*

  // Quando utilizo a function (event) o this é referente ao objeto que está chamando a função, no caso o menuElement

  addActiveEvent() {
    this.menuElement.addEventListener('click', function (event) {
      console.log(this)
      event.target.classList.add(this.activeClass)
    })
  }  

  // Quando utilizo a arrow (event) o this é referente ao objeto global, no caso a classe Menu
  addActiveEvent() {
    this.menuElement.addEventListener('click', event => {
      console.log(this)
      event.target.classList.add(this.activeClass)
    })
  }

*/
