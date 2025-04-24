const dataNamoro = new Date("2025-03-09T00:00:00");

    function atualizarContador() {
      const agora = new Date();
      const diferenca = agora - dataNamoro;

      const segundos = Math.floor(diferenca / 1000) % 60;
      const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
      const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

      document.getElementById("tempoJuntos").innerHTML =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
    }

    // Atualiza a cada segundo
    setInterval(atualizarContador, 1000);
    atualizarContador();