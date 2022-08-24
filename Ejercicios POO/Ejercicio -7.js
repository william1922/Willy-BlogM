/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.*/


let agendaTelefonica = {

    nombres: [],
    telefonos: [],
    
    añadirContacto(){
        if (this.nombres.length <= 9){
            var nombre = (prompt('Ingrese el nombre del nuevo contacto'))
            
            if (nombre === "" || nombre.includes(0) || nombre.includes(1) || nombre.includes(2) || nombre.includes(3) || nombre.includes(4) || nombre.includes(5) || nombre.includes(6) || nombre.includes(7) || nombre.includes(8) || nombre.includes(9)){
                alert('Por favor ingrese el nombre sin numeros')
            } else {
                this.nombres.push(nombre)
            }

            var numero = parseInt(prompt('Ingrese el numero del nuevo contacto'))
            if (Number(numero) !== numero){
                alert('Por favor solo ingrese numeros')
            } else {
            this.telefonos.push(numero)
            }
        } else {
            alert('Ah alcanzado el maximo numero de contactos')
        }
    },
    existeContacto(){
        var nombre = prompt('Ingrese el nombre del contacto');
        var existe = [];
        for(var i = 0; i <= this.nombres.length; i++){
            if (nombre == this.nombres[i]){
                existe.push(nombre)
            }
        }
        if(existe.length > 0){
            alert('El contacto ' + existe[0] + " ya existe en la agenda")
        } else {
            alert('El contacto ' + nombre + " No existe en la agenda")
        }
    },
    listarContactos(){
        for(var i = 0; i < this.nombres.length; i++){
            document.write("Nombre: " + this.nombres[i] + ", Telefono: " + this.telefonos[i] + "<br>")
        }
    },
    buscarContacto(){
        var nombre = prompt('Ingrese el nombre');
        var existeNumero = [];
        for(var i = 0; i <= this.nombres.length; i++){
            if (nombre == this.nombres[i]){
                existeNumero.push(this.telefonos[i])
            }
        }
        if (existeNumero.length > 0) {
            alert('El numero del contacto es ' + existeNumero[0])
        } else {
            alert('No se ha encontrado el nombre del contacto')
        }
    },
    eliminarContacto(){
        var nombre = prompt('Ingrese el nombre del conctacto a eliminar');
        var existeElContacto = [];
        for(var i = 0; i < this.nombres.length; i++){
            if (nombre == this.nombres[i]) {
                existeElContacto.push(this.nombres.splice(i, 1));
                existeElContacto.push(this.telefonos.splice(i, 1))
            }
        }
        if (existeElContacto.length > 0){
            alert('El contacto se ha eliminado con exito')
        } else {
            alert('Contacto no se ha eliminado, por favor Introduzca el nombre correctamente')
        }
    },
    agendallena(){
        if(this.nombres.length > 10){
            alert('La agenda esta llena')
        } else {
            alert('Le quedan espacios en la agenda')
        }
    },
    huecosLibres(){
        if (this.nombres.length >= 10){
            alert('No quedan huecos en la agenda')
        } else {
            alert('Le quedan ' + (10 - this.nombres.length) + ' huecos en la agenda')
        }
    }
}


console.log('Escriba menu() y presione enter e introduzca un numero para interactuar con la agenda');
console.log('Nº 1 Para añadir un contacto en la agenda');
console.log('Nº 2 Para saber si existe un contacto');
console.log('Nº 3 Para ver el listado completo de la agenda');
console.log('Nº 4 Para buscar un contacto por su nombre');
console.log('Nº 5 Para eliminar un contacto por su nombre');
console.log('Nº 6 Para saber si la agenda se encuentra llena');
console.log('Nº 7 Para saber cuantos contactos puede ingresar');

function menu(){
    var numero = parseInt(prompt('Ingrese un numero para interactuar con la agenda'));
    switch(numero){
        case 1:
            agendaTelefonica.añadirContacto();
            break;
        case 2:
            agendaTelefonica.existeContacto();
            break;
        case 3:
            agendaTelefonica.listarContactos();
            break;
        case 4:
            agendaTelefonica.buscarContacto();
            break;
        case 5:
            agendaTelefonica.eliminarContacto();
            break;
        case 6:
            agendaTelefonica.agendallena();
            break;
        case 7:
            agendaTelefonica.huecosLibres();
            break;
        default:
            alert('Ingrese un numero del 1 al 7')
    }
}