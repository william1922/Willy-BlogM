/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/


class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento){
        this.nombre = nombre,
        this.edad = edad,
        this.dni = 0,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.nacimiento = nacimiento
    }
    mostrarGeneracion(){
        if(this.nacimiento > 1993 && this.nacimiento < 2011){
            document.write("<br>" + this.nombre + " Es de la generacion Z y el rasgo de esta generacion es que son Irreverentes")
        } else if (this.nacimiento > 1980 && this.nacimiento < 1994){
            document.write("<br>" + this.nombre + " Es de la generacion Y-Millennials y el rasgo de esta generacion es la Frustracion")
        } else if (this.nacimiento > 1968 && this.nacimiento < 1981){
            document.write("<br>" + this.nombre + " Es de la generacion X y el rasgo de esta generacion es la Obsesion por el Exito")
        } else if (this.nacimiento > 1948 && this.nacimiento < 1969){
            document.write("<br>" + this.nombre + " Es de la generacion Baby Boom y el rasgo de esta generacion es la Ambicion")
        } else if (this.nacimiento > 1929 && this.nacimiento < 1949){
            document.write("<br>" + this.nombre + " Es de la generacion Silent Generation(Los niños de la posguerra) y el rasgo de esta generacion es  la Austeridad")
        }
    }
    esMayorDeEdad(){
        if(this.edad < 18){
            document.write("<br>" + this.nombre + " Es menor de edad")
        } else {
            document.write("<br>" +this.nombre + " Es mayor de edad")
        }
    }
    mostrarDatos(){
        document.write("<br>" + "Nombre: " + this.nombre + "<br>" + "Edad: " + this.edad + "<br>" + "DNI: " + this.dni + "<br>" + "Sexo: " + this.sexo + "<br>" + "Peso: " + this.peso + " Kilos" + "<br>" + "Altura: " + this.altura + " Metros" +"<br>" + "Año de nacimiento: " + this.nacimiento)
    }
    generarDNI(){
        this.dni += Math.floor(Math.random()*(100000000 - 10000000) + 10000000)
    }
}


let julian = new Persona("Julian", 31, "Masculino", 91, 1.8, 1991)


