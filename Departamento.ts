import { Empleado } from './Empleado';

export class Departamento {
    private empleados: Empleado[] = [];

    public agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
    }

    public eliminarEmpleado(empleado: Empleado): void {
        this.empleados = this.empleados.filter(emp => emp !== empleado);
    }

    public listarEmpleados(): Empleado[] {
        return this.empleados;
    }
}