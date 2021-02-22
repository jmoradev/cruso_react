const saludar = (nombre) => {
    return `Hola ${nombre}`
}

const getUser = () => ({ uid: 'asdfasdf', userName: 'jmora' })

const getUserActivo = (nombre) => ({ uid: 'asdfasdfasd', userName: nombre })

console.log(saludar('juan pablo'));
console.log(getUser());
console.log(getUserActivo('el_jmora'));