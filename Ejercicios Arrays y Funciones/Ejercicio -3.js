/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/


let repetir = 50;

let cantidadDeSumas = [];

for(var i = 1; i <= 50; i++){
    cantidadDeSumas.push((Math.floor(Math.random() * 6)+1) + (Math.floor(Math.random() * 6)+1))
    document.write('La Posicion Nº' + i + " contiene la suma total de los dados: " + cantidadDeSumas[i - 1] + "<br>")
}
