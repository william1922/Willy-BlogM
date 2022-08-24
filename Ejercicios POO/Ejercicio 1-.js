/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/


let auto = {
    color:"Blanco",
    marca:"Toyota",
    modelo:"Yaris Sedan",
    encendido: true,
    estaEncendidoOApagado(){
        if (this.encendido){
            alert("El auto esta encendido");
        } else{
            alert("El auto esta apagado");
        }
    },
    apagarAuto(){
        this.encendido = false;
    },
    encenderAuto(){
        this.encendido = true;
    }
}
