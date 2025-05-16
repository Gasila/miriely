function normalizarTexto(texto) {
  return texto
    .trimEnd() // só remove espaços no final
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // remove acentos
}

function pedirSenha() {
  var senha = prompt("Digita a senha delícia:");

  if (senha && normalizarTexto(senha) === normalizarTexto("morango")) {
    location.href = "nivel4.htm";
  } else {
    alert("Errou bb 😏");
  }
}
