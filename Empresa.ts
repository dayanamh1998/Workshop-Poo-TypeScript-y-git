import { Empleado } from './Empleado';

export class Empresa {
    private empleados: Empleado[] = [];

    public agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
    }

    public eliminarEmpleado(empleado: Empleado): void {
        this.empleados = this.empleados.filter(emp => emp !== empleado);
    }

    public calcularTotalSalarios(): number {
        return this.empleados.reduce((total, emp) => total + emp.salario, 0);
    }
}
