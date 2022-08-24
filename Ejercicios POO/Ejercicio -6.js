/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/


class Libro{
    constructor(titulo, autor){
        this.isbn ,
        this.titulo = titulo,
        this.autor = autor,
        this.paginas 
    }
    insertarIdentificador(numero){   //Setter
        if (numero.length < 14){
           this.isbn = numero;
        } else {
            alert('Se requiere de 13 digitos')
        }
    }
    insertarCantidadDePaginas(numero){  //Setter
        this.paginas = numero;
    }
    autorDelLibro(){   //Getter
        alert("El autor es " + this.autor);
    }
    tituloDelLibro(){   //Getter
        alert("El titulo es " + this.titulo)
    }
    mostrarLibro(){
        if (this.isbn === undefined || this.paginas === undefined){
            alert('No contiene el ISBN o el numero de paginas o ambos')
        } else {
            alert('El libro ' + this.titulo + " con ISBN " + this.isbn + " creado por el autor " + this.autor + " tiene paginas " + this.paginas)
        }
    }
}

let libro1 = new Libro("Arriba", "Julio")

let libro2 = new Libro("Abajo", "Miguel")

let libro3 = new Libro("Medio", "Marquez")

function mayorDePaginas(a, b, c){
    var array = [];
    array.push(a.paginas);
    array.push(b.paginas);
    array.push(c.paginas);

    if (Math.max(...array) == a.paginas){
        alert(a.titulo + " Tiene mas paginas")
    } else if (Math.max(...array) == b.paginas){
        alert(b.titulo + " Tiene mas paginas")
    } else {
        alert(c.titulo + " Tiene mas paginas")
    }
}


