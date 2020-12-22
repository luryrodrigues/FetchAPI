const removeCliente = id => {
  if(confirm("Tem certeza que deseja excluir o cliente?")){
    deletaCliente(id)
  }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf,nome, id) => {
  const linha = document.createElement('tr')
  const conteudoLinha = `
  <tr>
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="edita-clientes.html?id=${id}">
    <button type="button" class="btn btn-info" onclick="detalhaCliente(${id})">Editar</button>
    </a>
  </tr>
`
  linha.innerHTML = conteudoLinha
  return linha
};


listarClientes().then(exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})