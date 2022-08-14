/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numero = parseInt(prompt('Ingrese un numero no mayor a 50 para la piramide'));


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
}