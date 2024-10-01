export abstract class Vehiculo {
    abstract arrancar(): void;
}

export class Coche extends Vehiculo {
    public arrancar(): void {
        console.log("El coche arranca con llave.");
    }
}

export class Moto extends Vehiculo {
    public arrancar(): void {
        console.log("La moto arranca con un botón.");
    }
}

const miCoche = new Coche();
miCoche.arrancar(); // Salida: El coche está arrancando con un giro de llave.

const miMoto = new Moto();
miMoto.arrancar(); // Salida: La moto está arrancando con un botón de encendido.