/*1
//Variables
let numeroSecreto = 2;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = `vez`;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

  console.log(numeroUsuario);
  //
    Este código realiza
    la comparación
    
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert(`El número secreto es menor`);
    } else {
      alert(`El número secreto es mayor`);
    }
    //Incrementamos en contador cuando no se acierta
    intentos = intentos + 1;
    palabraVeces = `veces`;
    //La condición no se cumplió
    alert("Lo siento, no acertaste el número");
  }
}*/

/*2
let contador = 1;

while (contador < 4) {
  console.log("Ejecutando la iteración " + contador);
  contador = contador + 1;
}*/

/*3
let cantidadNumeros = prompt(
  "Ingrese la cantidad de números para el cálculo del promedio:"
);
let suma = 0;
let contador = cantidadNumeros;

while (contador > 0) {
  let numero = parseInt(prompt("Ingrese el numero:"));
  suma += numero;
  contador --;
 //decrementa el contador de cada ínteración
}

let promedio = suma / cantidadNumeros;

console.log(promedio);*/


//1-Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 
// 'while'. Muestra cada número.
let contador = 1;

while (contador <= 10) {
  alert(`Contador en ${contador}`);
  console.log(contador);
  contador++;
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 
// 'while'. Muestra cada número.
contador = 10;

while (contador >= 0) {
  alert(`Contador en ${contador}`);
  console.log(contador);
  contador--;
}

//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 
// hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
  alert(numeroMaximo);
  console.log(numeroMaximo);
  numeroMaximo--;
}

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
// hasta ese número utilizando un bucle 'while' en la consola del navegador.
numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");
contador = 0;

while (contador <= numeroMaximo) {
  alert(contador);
  console.log(contador);
  contador++;
}
