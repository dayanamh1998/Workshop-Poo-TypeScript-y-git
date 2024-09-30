
export class Persona {
    private edad: number;
    public nombre: string;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public saludar(): void {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años.`);
    }

    public getEdad(): number {
        return this.edad;
    }
}
