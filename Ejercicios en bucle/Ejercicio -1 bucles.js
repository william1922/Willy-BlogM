/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let edad = parseInt(prompt('Ingrese su edad'));

if (edad > 18) {
    console.log('Tiene edad suficiente para poder conducir')
} else if (edad <= 18) {
    console.log('Usted no tiene edad suficiente para poder conducir')
} else if (edad != Number) {
    console.log('Por favor ingrese un numero')
}