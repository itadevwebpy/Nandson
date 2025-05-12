function getValue(id) {
  const value = document.getElementById(id).value.trim();
  return value ? value : "dados não informados";
}

function enviarWhatsApp() {
  const nome = getValue("nome");
  const cpf = getValue("cpf");
  const nasc = getValue("nasc");

  if (
    !nome ||
    nome === "dados não informados" ||
    !cpf ||
    cpf === "dados não informados" ||
    !nasc ||
    nasc === "dados não informados"
  ) {
    alert("Por favor, preencha Nome, CPF e Data de Nascimento.");
    return;
  }

  const mensagem = `*FICHA DE CONSULTA*%0A
  *Nome:* ${nome}%0A
  *CPF:* ${cpf}%0A
  *RG:* ${getValue("rg")}%0A
  *Nascimento:* ${nasc}%0A
  *Pai:* ${getValue("pai")}%0A
  *Mãe:* ${getValue("mae")}%0A
  *Endereço:* ${getValue("endereco")}%0A
  *CEP:* ${getValue("cep")}%0A
  *Celular:* ${getValue("celular")}%0A
  *Fones:* ${getValue("fones")}%0A
  *Email:* ${getValue("email")}%0A
  *Profissão:* ${getValue("profissao")}%0A
  *Empresa:* ${getValue("empresa")}%0A
  *Endereço da Empresa:* ${getValue("enderecoEmpresa")}%0A
  *CEP da Empresa:* ${getValue("cepEmpresa")}%0A
  *Fone da Empresa:* ${getValue("foneEmpresa")}%0A
  *Tempo de Empresa:* ${getValue("tempoEmpresa")}%0A
  *Renda:* ${getValue("renda")}%0A
  *Banco:* ${getValue("banco")}%0A
  *Conta:* ${getValue("conta")}%0A
  *Agência:* ${getValue("agencia")}%0A
  *Referência Pessoal - Nome:* ${getValue("refNome")}%0A
  *Referência Pessoal - Celular:* ${getValue("refCelular")}`;

  const numero = "5511981524677";
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  
}
