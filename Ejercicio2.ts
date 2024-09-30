export class Persona {
    // Propiedades
    nombre: string;
    edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método saludar
    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años.`);
    }
}