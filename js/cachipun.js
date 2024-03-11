let cantidadPartidas = parseInt(prompt("¿Cuantas veces quieres jugar?: "));

let empataste = 0;
let perdiste = 0;
let ganaste = 0;

for (let i = 0; i < cantidadPartidas; i++) {
  let opcionJugador = parseInt(prompt('Ingresa tu jugada piedra: 0, papel: 1, tijera: 2: '));
  let opcionBot = Math.floor(Math.random() * 3);

  // Piedra = 0
  // Papel = 1
  // Tijera = 2

  if (opcionJugador === 0) {
    if (opcionBot === 0) {
      alert('EMPATASTE!!');
      empataste++;
    }
    else if (opcionBot === 1) {
      alert('TININIIIII :C Perdiste !');
      perdiste++;
    }
    else {
      alert('WINNEEEEER !!!!!!!! sos grandeeee');
      ganaste++;
    }
  }

  else if (opcionJugador === 1) {
    if (opcionBot === 0) {
      alert('WINNEEEEER !!!!!!!! sos grandeeee');
      ganaste++;
    }
    else if (opcionBot === 1) {
      alert('EMPATASTE!!');
      empataste++;
    }
    else {
      alert('TININIIIII :C Perdiste !');
      perdiste++;
    }
  }

  else {
    if (opcionBot === 0) {
      alert('TININIIIII :C Perdiste !');
      perdiste++;
    }
    else if (opcionBot === 1) {
      alert('WINNEEEEER !!!!!!!! sos grandeeee');
      ganaste++;
    }
    else {
      alert('EMPATASTE!!');
      empataste++;
    }
  }
}

document.write('<h3>Resumen:</h3>')
document.write(`'Ganaste ${ganaste}<br>`);
document.write(`Empataste: ${empataste}<br>`);
document.write(`Perdiste: ${perdiste}<br>`);