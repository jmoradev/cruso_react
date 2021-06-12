import { getUser, getUsuarioActivo } from './../../base/05-funciones'
import '@testing-library/jest-dom'

describe('pruebas de 06-funciones', () => {
    test('getUser debe de regresar un objeto', () => {
        const expected = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const received = getUser();
        expect(received).toEqual(expected)
    });

    test('getUsuarioActivo debe de regresar un objeto con el mismo nombre que se paso', () => {
        const nombre = 'jmora'
        const expected = {
            uid: 'ABC567',
            username: nombre
        }
        const received = getUsuarioActivo(nombre);
        expect(received).toEqual(expected)
    })


})