/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos*/

class Cuenta{
    constructor(nombre){
        this.titular = nombre,
        this.saldo = 0
    }

    ingresarDinero(monto){
        this.saldo += monto
    }
    extraerDinero(monto){
        if(monto > this.saldo){
            document.write('Saldo insuficiente')
        } else {
            this.saldo -= monto
        }
    }
    informarSaldo(){
        document.write('Usted tiene un saldo de ' + this.saldo + " Pesos")
    }
}

let alexCuenta = new Cuenta("Alex")

