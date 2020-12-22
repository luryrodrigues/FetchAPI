const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf,nome) => {
  const linha = document.createElement('tr')
  const conteudoLinha = `
  <tr>
    <td>${cpf}</td>
    <td>${nome}</td>
  </tr>
`
  linha.innerHTML = conteudoLinha
  return linha
};


listarClientes().then(exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
    })
})