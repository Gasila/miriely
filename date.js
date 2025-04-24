const dataNamoro = new Date("2025-03-09T00:00:00");

let diferencaBase = Date.now() - dataNamoro.getTime();
let segundosTotais = Math.floor(diferencaBase / 1000);

function atualizarContador() {
  // Cria uma nova data a partir da base inicial + segundos atualizados
  let tempoAtual = new Date(dataNamoro.getTime() + segundosTotais * 1000);

  let agora = tempoAtual;

  let anos = agora.getFullYear() - dataNamoro.getFullYear();
  let meses = agora.getMonth() - dataNamoro.getMonth();
  let dias = agora.getDate() - dataNamoro.getDate();
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  function plural(valor, singular, plural) {
    return `${valor} ${valor === 1 ? singular : plural}`;
  }

  const partes = [];

  if (anos > 0) partes.push(plural(anos, "ano", "anos"));
  if (meses > 0 || anos > 0) partes.push(plural(meses, "mês", "meses"));

  partes.push(plural(dias, "dia", "dias"));
  partes.push(plural(horas, "hora", "horas"));
  partes.push(plural(minutos, "minuto", "minutos"));
  partes.push(plural(segundos, "segundo", "segundos"));

  document.getElementById("tempoJuntos").innerHTML =
    partes.join(", ") + " 💖";

  segundosTotais++; // incrementa 1 segundo visualmente a cada chamada
}

setInterval(atualizarContador, 1000);
atualizarContador();
