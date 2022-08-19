/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/


let numero = parseInt(prompt('Ingrese un numero para hacer la tabla de multiplicacion'));

function tablaDeMultiplicar(a){
for(var i = 1; i <= 10; i++){
    document.write(i + " x " + a + " = " + i * a + "<br>")
}
}

tablaDeMultiplicar(numero)
