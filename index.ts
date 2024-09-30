import { Persona } from './Ejercicio2';

const personas: Persona[] = [];
for (let i = 1; i <= 10; i++) {
    personas.push(new Persona(`Persona${i}`, 20 + i));
}
personas.forEach(persona => persona.saludar());