function obtenerFechaHora() {
  let fechaActual = new Date();
  diaDeLaSemanaActual = fechaActual.getDay();
  diaDelMesActual = fechaActual.getDate();
  mesActual = fechaActual.getMonth();
  añoActual = fechaActual.getFullYear();
  horaActual = fechaActual.getHours();
  minutosActuales = fechaActual.getMinutes();
  segundosActuales = fechaActual.getSeconds();
  milisegundosActuales = fechaActual.getMilliseconds();

  minutosActuales = verificarTiempo(minutosActuales);
  segundosActuales = verificarTiempo(segundosActuales);

  let dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let fecha = document.getElementById("fecha");
  hora = document.getElementById("hora");

  fecha.innerHTML = `${dias[diaDeLaSemanaActual]}, ${diaDelMesActual} de ${meses[mesActual]} de ${añoActual}`;

  hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales}`;

  function verificarTiempo(tiempo) {
    if (tiempo < 10) {
      tiempo = "0" + tiempo;
    }
    return tiempo;
  }
}

setInterval(obtenerFechaHora, 1000);
