import { retornaArreglo } from './../../base/07-deses-arr'

describe('pruebas para el archivo 07-deses-arr', () => {
    test('should ', () => {
        const [letras, numero] = retornaArreglo()
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numero).toBe(123)
        expect(typeof numero).toBe('number')
    })

})
