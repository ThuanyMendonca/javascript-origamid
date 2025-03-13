fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then(response => response.json())
  .then(jsonBody => {
    const app = document.getElementById('app')
    jsonBody.forEach(produto => {
      app.innerHTML += `<p>${produto.nome}</p>`
    })
  })

const data = {
  id: 'akaa',
  nome: 'AKAAA',
  email: 'doiaeiedao@gmail.com',
  senha: '123456',
  cep: '123456',
  rua: 'Rua dos Bobos',
  numero: '123',
  bairro: 'Bairro do Bobos',
  cidade: 'Cidade do Bobos',
  estado: 'SP'
}
console.log(data)
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(jsonBody => {
    console.log(jsonBody)
  })
