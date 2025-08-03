//iniciamos
alert("Te damos la bienvenida al juego del número secreto");
console.log("Iniciamos el juego");

//Variables que solicita el minimo y maximo
let numeroMinimo = parseInt(prompt("Ingresa tu número minimo para el juego:"));
console.log(`El numero ${numeroMinimo} minimo fue registrado`);

let numeroMaximo = parseInt(prompt("Ingresa tu número maximo para el juego:"));
console.log(`El numero ${numeroMaximo} maximo fue registrado`);

while (numeroMinimo > numeroMaximo) {
  numeroMaximo = parseInt(
    prompt(
      "El número maximo es bajo al número minimo, ingresa un nuevo número maximo"
    )
  );
}
let numeroSecreto =
  Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
console.log(`Valor secreto ${numeroSecreto}`);
//Verificamos en consola el numero generado

let MaximoDeIntentos = 4;
let numeroDeUsuario = 0;
let intentos = 1;

while (numeroSecreto != numeroDeUsuario) {
  //Solicitamos un numero entre el intervalo definido
  numeroDeUsuario = parseInt(
    prompt(`Eligue un número entre ${numeroMinimo} y ${numeroMaximo}`)
  );
  // Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
  console.log("Valor de intento:", numeroDeUsuario);
  console.log("Resaultado de comparación:", numeroDeUsuario == numeroSecreto);

  if (numeroDeUsuario == numeroSecreto) {
    alert(`Adivinastes ${intentos} intento${intentos == 1 ? "" : "s"}!`);
  } else {
    alert(
      numeroDeUsuario > numeroSecreto
        ? "El número que diste es mayor"
        : "El número que diste es menor"
    );
    intentos += 1;
    if (intentos > MaximoDeIntentos) {
      alert(
        `Llegaste al número maximo de intentos, ${MaximoDeIntentos}. El número secreto era ${numeroSecreto}.`
      );
      break;
    }
  }
}
