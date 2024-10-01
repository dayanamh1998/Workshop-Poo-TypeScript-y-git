export interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}
// Crear instancias de Persona y Empleado
const persona1 = new Persona("Juan", 30, { calle: "Av 25 #54-87", ciudad: "Medellin", pais: "Colombia." });
const empleado1 = new Empleado("María", 25, { calle: "Calle 16#101-54", ciudad: "Bogota", pais: "Colombia" }, "Desarrolladora");

// Imprimir la ciudad de las direcciones
console.log(`La ciudad de ${persona1.nombre} es ${persona1.direccion.ciudad}.`);
console.log(`La ciudad de ${empleado1.nombre} es ${empleado1.direccion.ciudad}.`);