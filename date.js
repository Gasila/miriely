const dataNamoro = new Date("2025-03-09T00:00:00");

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - dataNamoro.getFullYear();
  let meses = agora.getMonth() - dataNamoro.getMonth();
  let dias = agora.getDate() - dataNamoro.getDate();
  let horas = agora.getHours() - dataNamoro.getHours();
  let minutos = agora.getMinutes() - dataNamoro.getMinutes();
  let segundos = agora.getSeconds() - dataNamoro.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  // Função auxiliar para pluralização
  function plural(valor, singular, plural) {
    return `${valor} ${valor === 1 ? singular : plural}`;
  }

  let partes = [];

  if (anos > 0) partes.push(plural(anos, "ano", "anos"));
  if (meses > 0 || anos > 0) partes.push(plural(meses, "mês", "meses"));

  partes.push(plural(dias, "dia", "dias"));
  partes.push(plural(horas, "hora", "horas"));
  partes.push(plural(minutos, "minuto", "minutos"));
  partes.push(plural(segundos, "segundo", "segundos"));

  document.getElementById("tempoJuntos").innerHTML = partes.join(", ") + " 💖";
}

setInterval(atualizarContador, 1000);
atualizarContador();
