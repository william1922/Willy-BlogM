/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/

let numero = parseInt(prompt('Ingrese un numero no mayor a 50 para la piramide'));

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
}