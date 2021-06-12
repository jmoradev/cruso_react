import { getImagen } from "../../base/11-async-await";

describe('pruebas para 11-async-await', () => {
    test('should prueba de get imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    });

    test('should get error if apikey no exist', async () => {
        const url = await getImagen('asdassas');
        console.log(url);
        expect(typeof url).toBe('string');
    });
})
