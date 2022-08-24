/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/


class Producto{
    constructor(nombre, codigo, precio){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
    }

    informacionDelProducto(){
        document.write("Nombre del producto: " + this.nombre + "<br>"),
        document.write("Codigo del producto: " + this.codigo + "<br>"),
        document.write("Precio: " + this.precio + "<br>")
    }
}

let arroz = new Producto("Arroz", "A788e", 150)

let fideos = new Producto("Fideos", "F8Aee", 110)

let sal = new Producto("Sal", "S88ae5", 90)

let productos = [arroz, fideos, sal]

function informacionDeProductos(a){
    for(var i = 0; i < a.length; i++){
       a[i].informacionDelProducto()
    }
}

informacionDeProductos(productos)
