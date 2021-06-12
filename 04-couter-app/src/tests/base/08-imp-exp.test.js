import { getHeroeById } from './../../base/08-imp-exp'
import heroes from '../../data/heroes'
import '@testing-library/jest-dom'

describe('pruebas en archivo 08-imp-exp', () => {
    test('debe de retornar un hero por id ', () => {
        const id = 1;
        const received = getHeroeById(id);
        const expected = heroes.find(h => h.id === id);
        expect(expected).toEqual(received)
    })

    test('debe de retornar un undefine si el heroe no existe ', () => {
        const id = 100;
        const received = getHeroeById(id);
        expect(undefined).toEqual(received)
    })

})
