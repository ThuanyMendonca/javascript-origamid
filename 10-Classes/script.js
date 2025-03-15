class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links)
    this.addClickEvent()
  }

  handleClick(event) {
    event.preventDefault()
    const href = event.target.getAttribute('href')
    const section = document.querySelector(href)

    window.scrollTo({
      // offsetTop pega onde está a section e o calculo abaixo deixa as section centralizadas
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: 'smooth'
    })
  }
  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener('click', this.handleClick)
    })
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, sections) {
    super(links)

    this.sectionElements = document.querySelectorAll(sections)
    this.handleScroll = this.handleScroll.bind(this) // esse bind faz o this ser o da classe ActiveSmoothScroll e não o window do activeNavScroll
    this.handleScroll() // chama o metodo para iniciar com o scroll ativo
    this.activeNavScroll()
  }

  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[i].classList.add('active')
      } else {
        this.linkElements[i].classList.remove('active')
      }
    })
  }

  activeNavScroll() {
    window.addEventListener('scroll', this.handleScroll)
  }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", 'section')

//console.log(scroll.linkElements)
