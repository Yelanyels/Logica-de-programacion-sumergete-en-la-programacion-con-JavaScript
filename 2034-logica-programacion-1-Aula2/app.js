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

//AND (&&)  El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones y evaluar si ambas son verdaderas.
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

//OR( | | ) El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una de las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. Si ambas son falsas, el resultado será falso. Aquí tienes un ejemplo: let tieneManzana = false; let tieneBanana = true;
// si tiene manzana o tiene banama…

if (tieneManzana || tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}
