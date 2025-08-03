//Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt("Me indicas un número entre 1 y 10 por favor:")
  );

  console.log(typeof numeroUsuario);
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? `vez` : `veces`
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //Incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;
    //palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
  }
}
//
/*
//2
let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}

//2.1
let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}
  */

/*3 Refactorizando: uso del if (?) y else (:).
let palabraPersona = prompt(
  "Colocar cantidad de personas para su reservación:"
);

palabraPersona = `Se realizo la reserva para ${palabraPersona} ${
  palabraPersona == 1 ? `persona` : `personas`
}`;
*/

/*Para generar un número entre 1 y 3, podemos usar el código:
let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;*/
