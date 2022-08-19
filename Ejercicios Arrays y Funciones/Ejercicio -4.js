/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

let numero = parseInt(prompt('Ingrese su numero para saber si es Par o Impar'))

function parOImpar(a){
    if(a % 2 == 0){
        return ('Su numero es PAR')
    } else if (a !== Number(a)){
        return('Por favor ingrese un valor numerico.')
    } else {
        return('Su numero es IMPAR')
    }
}

document.write(parOImpar(numero))
