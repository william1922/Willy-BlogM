/*let adivinar = Math.floor(Math.random() * 5);
let adivinador = prompt("Ingrese su numero");


if (adivinador > adivinar){
    alert("Tu numero es mayor al numero aleatorio");
} else if ( adivinador == adivinar) {
    alert("Tu numero es igual al numero aleatorio");
}
   else if ( adivinador < adivinar) {
    alert("Tu numero es menor al numero aleatorio");
} else if (adivinador !== NaN) {
    alert("Por favor ingrese un numero")
}*/

/*Manipulación de un array
Tome el siguiente array:

 const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

  ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

 El método unshift() agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
 sugerencia

 • Eliminar el primer elemento y el último elemento.
• Agregue FIRST al inicio de la matriz.
• Asigne hola mundo al valor del cuarto elemento.
• Asigne MEDIO al tercer valor de índice.
• Agregue ÚLTIMO a la última posición en la matriz.
• Enviarlo a la consola.*/

/*const theList= ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

theList.pop()
theList.shift()
theList.unshift('FIRST')
theList[3] = 'Hola mundo'
theList[2] = 'Medio'
theList.pop()
theList.pop()
theList.push('ULTIMO')*/

/* PRIMEROS EJERCICIOS JAVASCRIPT */

/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/

//alert("un mensaje");


/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/
 
//document.write("Hello World <br>");


/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.*/
 
//document.write(3 + 5);


/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»*/
 
/*let nombreDeUsuario = prompt('Ingrese su nombre de usuario');
document.write(nombreDeUsuario);*/


/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.*/

/*let numero1 = parseInt(prompt('Ingrese un numero'));
let numero2 = parseInt(prompt('Ingrese un numero'));
document.write(numero1 + numero2);*/


/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */
/*
let numerouno = parseInt(prompt('Ingrese un numero'));
let numerodos = parseInt(prompt('Ingrese un numero'));

if (numerouno > numerodos){
    console.log(numerouno + " es mayor")
} else if (numerodos > numerouno){
   console.log(numerodos + " es mayor")
} else if ((numerouno !== NaN) || (numerodos !== NaN)){
    console.log("Por favor ingrese un numero")
}*/


/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/

/*let primerNumero = parseInt(prompt('Ingrese un numero'));
let segundoNumero = parseInt(prompt('Ingrese un numero'));
let tercerNumero = parseInt(prompt('Ingrese un numero'));

if (primerNumero > segundoNumero && primerNumero > tercerNumero){
    console.log('Primer numero es mayor')
} else if (segundoNumero > primerNumero && segundoNumero > tercerNumero){
    console.log('Segundo numero es mayor')
}   else if (tercerNumero > primerNumero && tercerNumero > segundoNumero){
    console.log('Tercer numero es mayor')
} else if ((primerNumero !== NaN) || (segundoNumero !== NaN) || (tercerNumero !== NaN)){
    console.log('Por favor ingrese un numero')
}*/


/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/

/*let numeroDivisible = parseInt(prompt('Ingrese un numero'));

if((numeroDivisible % 2) === 0){
    console.log('Su numero es divisible por 2')
} else if ((numeroDivisible % 2) !== 0){
    console.log('Su numero no es divisible por 2')
}*/


/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen*/

/*let frase = prompt('Escriba una palabra o frase');

for (var i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u")
    document.write(frase[i]+ "<br>")
}*/


/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/

/*let numero = parseInt(prompt('Ingrese su numero'));

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){
    console.log('Su numero es divisible por 2, 3, 5 o 7')
} else {
    console.log('Su numero no es divisible por 2, 3, 5 o 7 o no a ingresado un numero')
}*/


/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/

/*let numero = parseInt(prompt('Ingrese un numero'));

switch(0){
    case numero % 2 :
        console.log('Tu numero es divisible por 2');
       break;
    case numero % 3 :
        console.log('Tu numero es divisible por 3');
       break;
    case numero % 5 :
        console.log('Tu numero es divisible por 5');
       break;
    case numero % 7 :
        console.log('Tu numero es divisible por 7');
       break;
    default:
        console.log('Su numero no es divisible por 2, 3, 5, 7');
       break;
}*/