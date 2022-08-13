/*  --------------EJERCICIOS DE JAVASCRIPT - BUCLES----------------  */

/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

/*let edad = parseInt(prompt('Ingrese su edad'));

if (edad > 18) {
    console.log('Tiene edad suficiente para poder conducir')
} else if (edad <= 18) {
    console.log('Usted no tiene edad suficiente para poder conducir')
} else if (edad != Number) {
    console.log('Por favor ingrese un numero')
}*/


/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/

/*let nota = parseInt(prompt('Ingrese la nota'));

if (nota <= 0 || nota <= 10){
    switch(nota){
        case 0:
        case 1:
        case 2:
            document.write('Muy deficiente');
            break;
        case 3:
        case 4:
            document.write('Insuficiente');
            break;
        case 5:
        case 6:
            document.write('Suficiente');
            break;
        case 7:
            document.write('Bien');
            break;
        case 8:
        case 9:
            document.write('Notable');
            break;
        case 10:
            document.write('Sobresaliente');
            break;
    }
} else if (nota > 10) {
    document.write('Numero erroneo')
} else if (nota !== Number){
    document.write('Por favor ingrese un numero')
}*/


/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

/*let frase;

do {
    let frases = prompt('Ingrese su frase')
    frase = frases + "-"
    document.write(frase)
} while (confirm(false))*/

/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

/* let suma = 0;

do {
    let numeros = parseInt(prompt('Ingrese un numero'))

    if(Number(numeros) == numeros){
      numeros = Number(numeros);
      suma = suma + numeros;
    } else {if (numeros != undefined){
        alert('Por favor ingrese un numero');
    }
}
} while (confirm(false))
document.write(suma)*/


/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

/*let letraAsignada = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "S", "Q", "V", "H", "L", "C", "K", "E"]

do{
        let numeroDni = parseInt(prompt('Ingrese numero de Documento'))
        if(Number(numeroDni) !== numeroDni){
            alert('Por favor ingrese numeros')
        }else{
        document.write(letraAsignada[Math.floor(numeroDni % 23) - 1]) 
    }
} while(confirm(false))*/

/*for(var i = 0; confirm(false); i++){
    let numeroDni = parseInt(prompt('Ingrese numero de Documento'))
    if(Number(numeroDni) !== numeroDni){
        alert('Por favor ingrese numeros')
    }else{
    document.write(letraAsignada[Math.floor(numeroDni % 23)]) 
}
}*/


/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

/*let numero = 1;

while(numero <= 30){
    for(var i = 1; i < numero; i++){
        document.write(numero);
    }
    document.write(numero + "<br>");
    numero++
}*/


/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

/*let numero = parseInt(prompt('Ingrese un numero no mayor a 50 para la piramide'));


if(numero > 50 || isNaN(numero)){
    alert('Por favor ingrese un valor numerico y que no sea mayor a 50');
}else{
    while (numero > 0){
    for(var i = numero; i > 1; i--){
        document.write(numero);
    }
    document.write(numero + "<br>");
    numero--
}
}*/


/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/

/*let numero = parseInt(prompt('Ingrese un numero no mayor a 50 para la piramide'));

let condicional = 1;

if(numero > 50 || isNaN(numero)){
    alert('Por favor ingrese un valor numerico y que no sea mayor a 50');
}else{
    while(condicional <= numero){
        for(var i = 1; i < condicional; i++){
            document.write(i + "-");
        }
        document.write(condicional +"<br>"); 
        condicional++
    }
}*/


/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/


/*for(var i = 1; i < 500; i++){
    document.write(i)
    
    if(i % 5 == 0){
        document.write("-" + "<br>" + "---------------------------------" + "<br>")
    } else if (i % 4 == 0) {
        document.write(" (Multiplo de 4)")
    } else if (i % 9 == 0){
        document.write(" (Multiplo de 9)")
    }
    document.write("<br>")
}*/


/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

/*let filas = parseInt(prompt('Ingrese el numero de filas'));

let columnas = parseInt(prompt('Ingrese el numero de columnas'));

let total = (filas * columnas);

document.write("<table border>");

for ( var i = total; total > 0; total--){
    if(total % columnas == 0){
        document.write("<br>")
    }
     document.write(total + "|");
}*/


/*------ Agregado con table de HTML -------*/

/*let filas = parseInt(prompt('Ingrese el numero de filas'));

let columnas = parseInt(prompt('Ingrese el numero de columnas'));

let total = (filas * columnas);

document.write("<table border>");

for (var i = 0; i < filas; i++){
    document.write("<tr>");
    for (var j = 0; j < columnas; j++){
        document.write("<td>");
        document.write(total);
        total--
    }
}*/


/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.*/

/*let edad = parseInt(prompt('Ingrese una edad'));
let nombre = prompt('Ingrese un nombre');

let edad2 = parseInt(prompt('Ingrese una edad'));
let nombre2 = prompt('Ingrese un nombre');

let edad3 = parseInt(prompt('Ingrese una edad'));
let nombre3 = prompt('Ingrese un nombre');

let mayor = Math.max(edad, edad2, edad3);

if (mayor == edad){
    document.write(nombre + " Es mayor.")
} else if (mayor == edad2){
    document.write(nombre2 + " Es mayor.");
} else if (edad == edad2 && edad2 == edad3) {
    document.write("Los 3 tienen la misma edad.");
} else if (edad == edad2 && edad > edad3){
    document.write(nombre + " y " + nombre2 + " tienen la misma edad y " + nombre3 + " es menor.")
} else if (edad2 == edad3 && edad2 > edad){
    document.write(nombre2 + " y " + nombre3 + " tienen la misma edad y " + nombre + " es menor.")
} else if (Number(edad) !== edad || Number(edad2) !== edad2 || Number(edad3) !== edad3){
    document.write("Por favor ingrese valores numericos en las edades.")
} else {
    document.write(nombre3 + " Es mayor.")
}*/


/*-------- Opcion mas comoda para el usuario --------*/
/*let nombreyedad = prompt('Ingrese una edad seguido de un nombre')
let nombreyedad2 = prompt('Ingrese una edad seguido de un nombre')
let nombreyedad3 = prompt('Ingrese una edad seguido de un nombre')

let edad = parseInt(nombreyedad)
let nombre = nombreyedad.slice(2)

let edad2 = parseInt(nombreyedad2)
let nombre2 = nombreyedad2.slice(2)

let edad3 = parseInt(nombreyedad3)
let nombre3 = nombreyedad3.slice(2)


if(Number(edad) != edad || Number(edad2) != edad2 || Number(edad3) != edad3){
    alert('Por favor primero ingrese una edad seguido de un nombre')
} else if (edad > edad2 && edad > edad3){
    document.write("El mayor es " + nombre.toUpperCase())
} else if (edad2 > edad && edad2 > edad3){
    document.write("El mayor es " + nombre2.toUpperCase())
} else if (edad3 > edad && edad3 > edad2){
    document.write("El mayor es " + nombre3.toUpperCase())
} else if (edad == edad2 && edad == edad3 && edad2 == edad3){
    document.write("Todos tienen la misma edad")
} else if (edad == edad2 && edad3 < edad){
    document.write(nombre.toUpperCase() + " y " + nombre2.toUpperCase() + " tienen la misma edad y " + nombre3.toUpperCase() + " es menor que los 2")
} else if (edad2 == edad3 && edad < edad2){
    document.write(nombre2.toUpperCase() + " y " + nombre3.toUpperCase() + " tienen la misma edad y " + nombre.toUpperCase() + " es menor que los 2")
} else if (edad == edad3 && edad2 < edad3){
    document.write(nombre.toUpperCase() + " y " + nombre3.toUpperCase() + " tienen la misma edad y " + nombre2.toUpperCase() + " es menor que los 2")
}*/


/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/

//document.write(Math.floor(Math.random()*100))


/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/

//let texto = prompt('Ingrese un texto');

//document.write(texto.toLocaleUpperCase())


/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

/*let textocadena = prompt('Ingrese una frase');

for (var i = 0; i < textocadena.length; i++){
    document.write(textocadena[i] + "-")
}/*


/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

/*let vocales = prompt('Ingrese una frase');

let cantidad = 0;

for (var i = 0; i < vocales.length; i++){
    if (vocales[i] == "a" || vocales[i] == "e" || vocales[i] == "i" || vocales[i] == "o" || vocales[i] == "u"){
        cantidad += 1
    }
}
document.write("Su frase tiene " + cantidad + " vocales.")*/

/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

/*let texto = prompt('Ingrese su frase');

for (var i = texto.length; i > 0; i--){
    document.write(texto[i - 1])
}*/


/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

