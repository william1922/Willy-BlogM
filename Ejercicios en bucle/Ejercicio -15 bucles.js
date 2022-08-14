/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let vocales = prompt('Ingrese una frase');

let cantidad = 0;

for (var i = 0; i < vocales.length; i++){
    if (vocales[i] == "a" || vocales[i] == "e" || vocales[i] == "i" || vocales[i] == "o" || vocales[i] == "u"){
        cantidad += 1
    }
}
document.write("Su frase tiene " + cantidad + " vocales.")