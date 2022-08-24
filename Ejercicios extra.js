/*1. Dada una secuencia de numeros leidos por pantalla, que acabe con un -1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,........,-1; Escriba un algoritmo que determine y muestre el valor maximo, minimo y el promedio. Suponemos que el usuario no ingresa numeros negativo.*/

/*let array = [];
let total = 0

do{
    var numero = parseInt(prompt('Ingrese un numero'));
    array.push(numero)
    total += numero
}while(numero !== -1 && confirm('Desea ingresar otro numero?'))
document.write("Los numeros ingresados son: " + array + "<br>")

document.write('El numero MAXIMO es ' + Math.max(...array) + "<br>")

document.write('El numero MINIMO es ' + Math.min(...array) + "<br>")

document.write('El PROMEDIO de los numeros ingresados es ' + Math.floor(total / array.length))*/



/*2. Escriba un algoritmo para calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula segun el siguiente criterio:

- la parte practica vale el 10%;
- la parte de problemas vale el 50%;
-y la parte teorica el 40%.

El algoritmo leera el nombre del alumno, las tres notas, presentara por pantalla el resultado y volvera a pedir datos del siguiente alumno hasta que el nombre sea una cadena vacia.
Las notas deben setar entre 0 y 10, si no lo estan, no imprima el resultado, mostrara un mensaje de error y volvera a pedir otro alumno.

CONSIDERACIONES: para escribir el algoritmo se puede utilizar la sintaxis del lenguaje de programacion que se prefiera.*/

while(nombre !== ""){
    var nombre = prompt('Ingrese el nombre')

    if(nombre !== ""){
        var notas1 = parseInt(prompt('Ingrese la nota de Practicas'))
        var notas2 = parseInt(prompt('Ingrese la nota de Problemas'))
        var notas3 = parseInt(prompt('Ingrese la nota de Teoria'))
        var total1 = notas1*0.1 + notas2*0.5 + notas3*0.4
        var total2 = 0
        
        if(total1 > total1,5){
            total2 += Math.round(total1)
        } else {
            total2 += Math.floor(total1)
        }
        
        if(notas1 < 0 || notas1 > 10 || notas2 < 0 || notas2 > 10 || notas3 < 0 || notas3 > 10 || Number(notas1) !== notas1 || Number(notas2) !== notas2 || Number(notas3) !== notas3){ 
            alert('Por favor ingrese un valor entre 0 y 10')
        } else {
            document.write(nombre.toLocaleUpperCase() + " Tiene estas notas " + notas1 + ", " + notas2 + ", " + notas3 + " y su promedio es de " + total2 + "<br>")
    }
}
}

