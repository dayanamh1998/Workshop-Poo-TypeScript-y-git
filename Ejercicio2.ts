class Persona {
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
// Crear una instancia de Persona
const persona1 = new Persona('Dayana', 30);

// Llamar al método saludar
persona1.saludar();