/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

let numero = 1;

while(numero <= 30){
    for(var i = 1; i < numero; i++){
        document.write(numero);
    }
    document.write(numero + "<br>");
    numero++
}