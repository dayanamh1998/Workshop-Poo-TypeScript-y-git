import { Empleado } from './Empleado';

export class Proyecto {
    public nombre: string;
    public empleados: Empleado[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public asignarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
    }
}
