/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

let texto = prompt('Ingrese un texto')

function mayusculasOMinusculas(a){
    
if (a.includes(0) || a.includes(1) || a.includes(2) || a.includes(3) || a.includes(4) || a.includes(5) || a.includes(6) || a.includes(7) || a.includes(8) || a.includes(9)){
    return('Por favor ingrese un texto sin numeros')
} else if (a === a.toLowerCase()){
    return('El texto esta en Minusculas')
} else if(a === a.toUpperCase()){
    return('El texto esta en Mayusculas')
}
else {
    return('El texto contiene Mayusculas y Minusculas')
}
}

document.write(mayusculasOMinusculas(texto))
