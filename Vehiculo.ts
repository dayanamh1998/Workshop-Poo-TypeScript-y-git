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
