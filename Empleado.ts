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

   
}
