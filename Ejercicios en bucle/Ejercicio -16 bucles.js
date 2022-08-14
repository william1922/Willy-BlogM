
/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let texto = prompt('Ingrese su frase');

for (var i = texto.length; i > 0; i--){
    document.write(texto[i - 1])
}