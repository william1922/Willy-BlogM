/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let filas = parseInt(prompt('Ingrese el numero de filas'));

let columnas = parseInt(prompt('Ingrese el numero de columnas'));

let total = (filas * columnas);


for ( var i = total; total > 0; total--){
    if(total % columnas == 0){
        document.write("<br>")
    }
     document.write(total + "|");
}


/*------ Agregado con table de HTML -------*/

/*let filas = parseInt(prompt('Ingrese el numero de filas'));

let columnas = parseInt(prompt('Ingrese el numero de columnas'));

let total = (filas * columnas);

document.write("<table border>");

for (var i = 0; i < filas; i++){
    document.write("<tr>");
    for (var j = 0; j < columnas; j++){
        document.write("<td>");
        document.write(total);
        total--
    }
}*/
