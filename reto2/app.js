/*1
//Variables
let numeroSecreto = 5;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

//Este codigo
//realiza la comparacion

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
    console.log(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
    console.log('Lo siento, no acertaste el número');
}*/

/*2
let edad = prompt("Ingrese su edad:");
//edad = parseInt(edad); // Convierte a la cadena a un número
//edad = Number(edad); // Convierte a la cadena a un número

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}*/

/*3
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto + `, Pero elegiste el número ` + intento);
}*/

/*3
//Uso de condicionales if y else
const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}*/

/*4
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}*/

//Desafío: hora de practicar

//1-Pregunta al usuario qué día de la semana es. Si la respuesta es 
// "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt(`¿Que día de la semana es?`);
if (diaDeLaSemana === `Sábado` || diaDeLaSemana === `Domingo`) {
  alert(`¡Ten un buen fin de semana!`);
  console.log(`¡Ten un buen ${diaDeLaSemana}, dia de fin de semana!`);
} else {
  alert(`¡Ten un buen dia de semana!`);
  console.log(`¡Ten un buen ${diaDeLaSemana}, dia de semana!`)
}

//2-Verifica si un número ingresado por el usuario es positivo o negativo. 
// Muestra una alerta informativa.
const numero = prompt(`Ingrese su número positivo o negativo`);

if (numero > 0) {
  alert(`El número ${numero} es positivo`);
  console.log(`El número ${numero} es positivo`);
} else if (numero < 0) {
  alert(`El número ${numero} es negativo`);
  console.log(`El número ${numero} es negativo`);
} else {
  alert(`El número es ${numero}`);
  console.log(`El número es ${numero}`);
}

//3-Crea un sistema de puntuación para un juego. Si la puntuación es mayor 
// o igual a 100, muestra "¡Felicidades, has ganado!". 
// En caso contrario, muestra "Intentalo nuevamente para ganar.".
alert(`¡Felicitaciones, acabas de completar el juego!`)

let puntajeDeUsuario = prompt(`Por favor, ingresa el puntaje que obtubistes en la partida`);
console.log(`El puntaje, ingresado es de ${puntajeDeUsuario}`);

if (puntajeDeUsuario >= 100) {
  alert(`¡Felicidades, has ganado!`);
  console.log(`¡Felicidades puntaje de ${puntajeDeUsuario}, genero que ganaras!`);
} else {
  alert(`Lo sentimos los puntos consegidos no son suficientes, ¡Intentalo nuevamente para ganar!`);
  console.log(`Lo sentimos los puntos de ${puntajeDeUsuario} no son suficientes, ¡Intentalo nuevamente para ganar!`);
}

//4-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// utilizando un template string para incluir el valor del saldo.
alert(`Gracias por confiar en nosotros, tu saldo actual se mostrara a continuación`)

let saldoUsuario = 17500;

alert(`Su saldo actual es de $${saldoUsuario}`);

console.log(`Su saldo actual es de $${saldoUsuario}`)

//5-Pide al usuario que ingrese su nombre mediante un prompt.
//  Luego, muestra una alerta de bienvenida usando ese nombre.
alert(`Bienvenidos a tu plataforma preferida`)

let nombreUsuario = prompt(`Por favor ingrese su nombre`);
console.log(`El nombre es ${nombreUsuario}`);

alert(`Bienvenido ${nombreUsuario}, conoce las nuevas actualizaciones del sistema`);
console.log(`${nombreUsuario}, pudo ingresar a la plataforma`)

