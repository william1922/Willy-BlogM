let adivinar = Math.floor(Math.random() * 5);
let adivinador = prompt("Ingrese su numero");


if (adivinador > adivinar){
    alert("Tu numero es mayor al numero aleatorio");
} else if ( adivinador == adivinar) {
    alert("Tu numero es igual al numero aleatorio");
}
   else {
    alert("Tu numero es menor al numero aleatorio");
}
