function verificarPicoYPlaca() {
  var placa = document.getElementById('licensePlate').value;
  var fecha = document.getElementById('date').value;
  var hora = document.getElementById('time').value.split(":");
  var resultMessage = document.getElementById('resultMessage');

  var ultimoDigito = placa.slice(-1);

  var tienePicoYPlaca = verificarPicoYPlacaPorFecha(ultimoDigito, fecha, hora);

  if (tienePicoYPlaca) {
      resultMessage.textContent = 'El vehículo no puede circular'
  } else {
      resultMessage.textContent = 'El vehículo puede circular';
  }
}

function verificarPicoYPlacaPorFecha(ultimoDigito, fecha, hora) {
  var diaSemana = new Date(fecha).getDay() + 1;

  var horaM = hora[0];
  var minuto = hora[1];

  var picoYPlacaManana = (horaM >= 7 && horaM < 9) || (horaM === 9 && minuto <= 30);
  var picoYPlacaTarde = (horaM >= 16 && horaM < 19) || (horaM === 19 && minuto <= 30);
  if ((diaSemana === 1 && (ultimoDigito === '1' || ultimoDigito === '2')) ||
      (diaSemana === 2 && (ultimoDigito === '3' || ultimoDigito === '4')) ||
      (diaSemana === 3 && (ultimoDigito === '5' || ultimoDigito === '6')) ||
      (diaSemana === 4 && (ultimoDigito === '7' || ultimoDigito === '8')) ||
      (diaSemana === 5 && (ultimoDigito === '9' || ultimoDigito === '0'))) {
      if ((picoYPlacaManana) || (picoYPlacaTarde)) {
          return true;
      }
  }

  return false;
}