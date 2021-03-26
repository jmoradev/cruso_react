
describe('primeras pruebas unitarias', () => {

    test('deben de ser iguales los strisg', () => {
        const mensaje = 'mensaje';
        const mensaje2 = `mensaje`;
        expect(mensaje2).toBe(mensaje);
    })
})

