/*
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

// 09 Desafío: Hora de practicar

//1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenido al programa de practica de JavaScript!");

//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Junnior";
console.log(`¡Bienvenido ${nombre}!`);

//3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
nombre = "Andre";
alert(`¡Hola ${nombre}!`);

//4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let leguajeFavorito = prompt(
  "¿Cual es el leguaje de programación que más te gusta?"
);
console.log(`Su leguaje favorito es: ${leguajeFavorito}`);

//5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 35;
let valor2 = 25;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
valor1 = 45;
valor2 = 15;
resultado = valor1 - valor2;
console.log(
  `La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`
);

//7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("Ingresa tu edad");

if (edad >= 18) {
  alert("Eres mayor de edad");
  console.log(`El usuario tiene ${edad} años y es mayor de edad`);
} else {
  alert("Eres menor de edad");
  console.log(`El usuario tiene ${edad} años y es menor de edad`);
}

//8.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt("Ingrese su número");

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

//9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 1;

while (contador <= 10) {
  alert(`Contador en ${contador}`);
  console.log(contador);
  contador++;
}

//10.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 7;

if (nota >= 7) {
  alert(`Tu nonta es ${nota} estas aprobado`);
  console.log(`Su nota es ${nota} esta aprobado`);
} else {
  alert(`Tu nonta es ${nota} no estas aprobado`);
  console.log(`Su nota es ${nota} no esta aprobado`);
}

//11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//12.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio);

//13.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
numeroAleatorio = parseInt(Math.floor(Math.random() * 1000 + 1));
console.log(numeroAleatorio);
