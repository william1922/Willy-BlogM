/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/


let altura = parseInt(prompt('Ingrese la Altura del rectangulo'));
let base = parseInt(prompt('Ingrese la Base del rectangulo'))

function perimetroDelRectangulo(a, b){
    return 2 * (a + b)
}

document.write(perimetroDelRectangulo(altura, base))
