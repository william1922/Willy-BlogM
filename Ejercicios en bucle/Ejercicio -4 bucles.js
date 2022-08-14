/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0;

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
document.write(suma)