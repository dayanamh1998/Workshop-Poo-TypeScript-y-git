
import { Direccion } from './Direccion';
import { Vehiculo } from './Vehiculo';

export class Persona {
    private edad: number;
    public nombre: string;
    public direccion: Direccion;

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }


    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    public getEdad(): number {
        return this.edad;
    }

    public vehiculos: Vehiculo[] = [];

}