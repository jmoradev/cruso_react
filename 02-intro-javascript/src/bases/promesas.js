import { getHeroeById, getHeroesByOwner } from './bases/import_export'
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// }).catch((error)=>{
//     console.warn(error);
// })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            (!heroe)
                ? reject('No se pudo encontrar el heroe')
                : resolve(heroe);
        }, 2000);
    });
}

getHeroeByIdAsync(4).then((heroe) => { console.log(heroe); }).catch((error) => { console.error(error); })
getHeroeByIdAsync(20).then(console.log).catch(console.error)
getHeroeByIdAsync(1).then(console.log).catch(console.error)