import './css/style.css'
//TODO Logica de la fecha y hora

const reloj = () => {
  let fecha = new Date();
  let diaNumero = fecha.getDate();
  //console.log(diaNumero);
  let hora = fecha.getHours();
  //console.log(hora);
  let minutos = fecha.getMinutes();
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }
  //console.log(minutos);
  let segundos = fecha.getSeconds();
  //console.log(segundos);
  let diaSemana = fecha.getDay();
  //console.log(diaSemana);
  switch (diaSemana) {
    case 0:
      diaSemana = 'Domingo'
      break;

    case 1:
      diaSemana = 'Lunes'
      break;

    case 2:
      diaSemana = 'Martes'
      break;

    case 3:
      diaSemana = 'Miercoles'
      break;

    case 4:
      diaSemana = 'Jueves'
      break;

    case 5:
      diaSemana = 'Viernes'
      break;

    case 6:
      diaSemana = 'Sabado'
      break;
  }
  //console.log(diaSemana);
  let mes = fecha.getMonth();
  //console.log(mes);
  switch (mes) {
    case 0:
      mes = 'Enero';
      break;

    case 1:
      mes = 'Febrero';
      break;

    case 2:
      mes = 'Marzo';
      break;

    case 3:
      mes = 'Abril';
      break;

    case 4:
      mes = 'Mayo';
      break;

    case 5:
      mes = 'Junio';
      break;

    case 6:
      mes = 'Julio';
      break;

    case 7:
      mes = 'Agosto';
      break;

    case 8:
      mes = 'Septiembre';
      break;

    case 9:
      mes = 'Octubre';
      break;

    case 10:
      mes = 'Noviembre';
      break;

    case 11:
      mes = 'Diciembre';
      break;
  }
  //console.log(mes);

  //TODO Fecha en el DOM
  let horaDOM = document.getElementById('hora');
  horaDOM.innerHTML = `${hora}:${minutos}:${segundos}`;
  let diaDOM = document.getElementById('calendario');
  diaDOM.innerHTML = `${diaSemana}, ${diaNumero}, ${mes}`
}

setInterval(reloj, 1000);

const coloresRandom = document.getElementById('cambiarColores');
const cuerpo = document.body;
const cabezal = document.getElementById('cabezal');
function generarColores() {
  let bg = '#' + Math.floor(Math.random()*16777215).toString(16);
  cuerpo.style.backgroundColor = bg;
  let pr = '#' + Math.floor(Math.random()*167772412).toString(16);
  let relojCompleto = document.getElementById('relojCompleto');
  relojCompleto.style.backgroundColor = pr;
  let cl = '#' + Math.floor(Math.random()*16777751).toString(16);
  relojCompleto.style.color = cl;
  cabezal.style.backgroundColor = pr;
  cabezal.style.color = cl;
}
coloresRandom.addEventListener('click', generarColores);


