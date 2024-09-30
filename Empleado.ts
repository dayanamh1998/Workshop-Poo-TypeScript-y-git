import { Persona } from './Ejercicio2';

export class Empleado extends Persona {
    public salario: number;

    constructor(nombre: string, edad: number, salario: number) {
        super(nombre, edad);
        this.salario = salario;
    }

    public trabajar(): void {
    console.log(`${this.nombre} trabaja 8 horas al día.`);
    }

    public saludar(): void {
        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()} y el salario es de ${this.salario}.`);
    }
    
   
}
