async function fetchProdutos(url) {
  const response = await fetch(url)
  const jsonBody = await response.json()
  //console.log(jsonBody)
  return jsonBody
}

const requisicao = fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto'
)

// se eu quiser obter no console log
requisicao.then(response => console.log(response))
