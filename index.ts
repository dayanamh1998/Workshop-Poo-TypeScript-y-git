import { Persona } from './Ejercicio2';

const personas: Persona[] = [];
for (let i = 1; i <= 10; i++) {
    personas.push(new Persona(`Persona${i}`, 20 + i));
}
personas.forEach(persona => persona.saludar());


import { Empleado } from './Empleado';

//const empleado = new Empleado('Juan', 30, 50000);
//empleado.trabajar(); // deberia mostrar "Juan trabaja 8 horas al día." en la consola.
//empleado.saludar();// deberia mostrar "Juan trabaja 8 horas al día." en la consola.



const empleados: Empleado[] = [];
for (let i = 1; i <= 10; i++) {
    empleados.push(new Empleado(`Empleado${i}`, 25 + i, 3000 + i * 100));
}
empleados.forEach(empleado => empleado.saludar());