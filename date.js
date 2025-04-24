const dataNamoro = new Date("2025-03-09T00:00:00");

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - dataNamoro.getFullYear();
  let meses = agora.getMonth() - dataNamoro.getMonth();
  let dias = agora.getDate() - dataNamoro.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  // Função para singular/plural
  function formatar(valor, singular, plural) {
    return valor > 0 ? `${valor} ${valor === 1 ? singular : plural}` : "";
  }

  const partes = [
    formatar(anos, "ano", "anos"),
    formatar(meses, "mês", "meses"),
    formatar(dias, "dia", "dias"),
    formatar(horas, "hora", "horas"),
    formatar(minutos, "minuto", "minutos"),
    formatar(segundos, "segundo", "segundos"),
  ].filter(Boolean); // remove valores vazios

  document.getElementById("tempoJuntos").innerHTML =
    partes.join(", ") + " 💖";
}

setInterval(atualizarContador, 1000);
atualizarContador();