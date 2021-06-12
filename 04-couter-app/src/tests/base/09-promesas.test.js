import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas con promesas', () => {
    test('should pruebas con la funcion getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toBe(heroes[0 ]);
            done();
        })
    })

    test('should get error if hero not exist by id', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch((error)=>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })
    })
    
    
})
