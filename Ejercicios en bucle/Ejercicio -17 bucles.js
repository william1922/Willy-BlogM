/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let frase = prompt('Ingrese una frase')
let vocales = [];

for(var i = 0; i < frase.length; i++){
    if (frase[i] == "a") {
        vocales.push(frase.indexOf("a"));
    } else if (frase[i] == "e") {
        vocales.push(frase.indexOf("e"));
    } else if (frase[i] == "i") {
        vocales.push(frase.indexOf("i"));
    } else if (frase[i] == "o") {
        vocales.push(frase.indexOf("o"));
    } else if (frase[i] == "u") {
        vocales.push(frase.indexOf("u"));
    }
}
document.write("La primera vocal se encuentra en la posicion numero " + Math.min.apply(null, vocales))
