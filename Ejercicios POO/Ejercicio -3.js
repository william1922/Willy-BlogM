/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/


class Rectangulos{
    constructor(alto, ancho){
        this.alto = alto,
        this.ancho = ancho
    }

    calcularPerimetro(){
        document.write("El perimetro del rectangulo es " + 2 * (this.alto + this.ancho) + "<br>")
    }

    calcularArea(){
        document.write("El area del rectangulo es " + this.ancho * this.alto + "<br>")
    }
}


let rectanguloPrimero = new Rectangulos(16, 25)

