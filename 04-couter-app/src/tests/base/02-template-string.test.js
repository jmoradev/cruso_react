import { getSaludo } from "../../base/02-template-string"
import '@testing-library/jest-dom'

describe('prueba en 02-template-test-string', () => {
    test('getSaludo debe retornar el nombre', () => {
        const nombre = 'jmora';
        const result = getSaludo(nombre);
        expect(result).toBe(`Hola ${nombre}`);
    })
    test('debe retornar Hola Carlos', () => {
        expect(getSaludo()).toBe('Hola Carlos');
    })
    
})
