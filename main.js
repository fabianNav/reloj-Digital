import './css/style.css'






let fecha = new Date();
let diaNumero = fecha.getDate();
console.log(diaNumero);
let hora = fecha.getHours();
console.log(hora);
let minutos = fecha.getMinutes();
console.log(minutos);
let segundos = fecha.getSeconds();
console.log(segundos);
let diaSemana = fecha.getDay();
console.log(diaSemana);
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
console.log(diaSemana);








