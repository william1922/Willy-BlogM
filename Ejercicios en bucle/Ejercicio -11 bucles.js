/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.*/

let edad = parseInt(prompt('Ingrese una edad'));
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
}


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
