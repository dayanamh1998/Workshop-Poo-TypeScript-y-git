import { Persona } from './Ejercicio2';



export const crearPersonaDesdeJson = (objetoJson: any): Persona => {
    return new Persona(objetoJson.nombre, objetoJson.edad, objetoJson.direccion);
};

export const crearYSaludar = () => {
    const personaJson = { nombre: "Juan", edad: 30, direccion: { calle: "Falsa", ciudad: "Springfield", pais: "USA" } };
    const persona = crearPersonaDesdeJson(personaJson);
    persona.saludar();
};





import empleadosData from './empleados.json';

export const jsonAEmpleados = (data: any[]): Empleado[] => {
    return data.map(emp => new Empleado(emp.nombre, emp.edad, emp.salario));
};

export const empleadosAJson = (empleados: Empleado[]): string => {
    return JSON.stringify(empleados);
};
