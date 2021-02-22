const getPersona = () => ({
    nombre: 'juan',
    edad: 28,
    clave: 'jmora'
});

const { nombre, edad, clave } = getPersona()

console.log(nombre, edad, nombre);

const retornaUsuario = ({ nombre, rango = 'capitan' }) => {
    console.log(nombre, rango);
}

const useContext = ({ clave, edad }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.168452,
            lng: -34.1684132
        }
    }
}
/**
 * si se colo en unsa desestructuracion el objeto de primer nivel y se coloca
 * la siguiente indicacion
 * {objeto_nivel_uno:{ propiedad_uno,propiedad_uno}}=objeto_primario
 * se obtiene solo los datos propiedad_uno y propiedad_uno mas no el objeto_nivel_uno
 */
const { nombreClave, anios, latlng: { lat, lng } } = useContext(getPersona())
console.log(nombreClave, anios);