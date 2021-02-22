const personajes = ['juan', 'mora', 'nieves'];
const [nombre] = personajes
const [, apellido] = personajes
const [, , apellido_materno] = personajes

console.log(nombre);
console.log(apellido);
console.log(apellido_materno);

const retornaArreglo = () => (['asd', 123])
const [letras, numeros] = retornaArreglo()

console.log(letras, numeros);

const useState = (valor) => {
    return [
        valor,
        () => { console.log('hola mundo') },
    ]
}

const [nombre_valor,setNombre] = useState('jmora')
console.log(nombre_valor);
setNombre()