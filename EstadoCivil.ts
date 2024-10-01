

export enum EstadoCivil {
    Soltero,
    Casado,
    Divorciado
}


// Ejemplo 
const persona1 = new Persona('Juan', 30, EstadoCivil.Soltero);
const persona2 = new Persona('María', 25, EstadoCivil.Casado);

console.log(persona1.mostrarInfo());
console.log(persona2.mostrarInfo());