function normalizarTexto(texto) {
  return texto
    .trimEnd() // só remove espaços no final
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // remove acentos
}

function pedirSenha() {
  var senha = prompt("Digita a senha delícia:");

  if (senha && normalizarTexto(senha) === normalizarTexto("pernuda")) {
    location.href = "nivel3.htm";
  } else {
    alert("Errou bb 😏");
  }
}
