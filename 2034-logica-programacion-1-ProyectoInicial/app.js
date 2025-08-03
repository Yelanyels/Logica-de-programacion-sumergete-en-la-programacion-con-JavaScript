//1
//let numeroSecreto = 6;
//let numeroUsuario = prompt("Me indicas un número por favor");

//console.log(numeroUsuario);

//if (numeroUsuario == numeroSecreto) {
//    alert('Acertaste el número')
//}

//2
alert("Bienvenidos al juego del número secreto");
let eleccion = prompt("Elige un número entre 1 y 10");
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

if (eleccion == numeroSecreto) {
  alert("Adivinaste");
}

//3
let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema) {
  alert("Acceso al sistema garantizado");
}
