/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudadesArray = [];

do{
let ciudad = prompt('Ingrese una ciudad');
ciudadesArray.push(ciudad)

}while(confirm('Desea ingresar otra ciudad?'))

document.write("Estas son las ciudades ingresadas : " + ciudadesArray + "<br>")



document.write("La cantidad de ciudades ingresesadas son " + ciudadesArray.length + "<br>")

if (ciudadesArray.length > 3){document.write(ciudadesArray[0] + " Esta en la PRIMERA posicion" + "<br>" + ciudadesArray[2] + " Esta en la TERCERA posicion y" + "<br>" + ciudadesArray[ciudadesArray.length - 1] + " Esta en la ULTIMA posicion" + "<br>")} else if (ciudadesArray.length == 3){document.write(ciudadesArray[0] + " Esta en la PRIMERA posicion" + "<br>" + ciudadesArray[ciudadesArray.length - 1] + " Esta en la TERCERA u ULTIMA posicion " + "<br>")
} else if (ciudadesArray.length == 1){
    document.write(ciudadesArray + " Es la unica ciudad ingresada <br>")

}

if(ciudadesArray.length >= 2){
    document.write(ciudadesArray[1] + " Esta en la segunda posicion." + "<br>")
} else {
    document.write('Solo a ingresado una ciudad <br>')
}
ciudadesArray.push("París")
ciudadesArray[1] = "Barcelona"

document.write("Este es el arreglo modificado: " + ciudadesArray)
