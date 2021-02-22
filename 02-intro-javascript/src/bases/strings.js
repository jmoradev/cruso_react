const nombre = 'Juan Pablo'
const apellido = 'Mora Nieves'

const nombreCompleto = `
Hola 
${nombre} 
${apellido}
1+1
`;

function getSaludo(nombreCompleto) {
    return `Hola ${nombreCompleto}`
}

console.log(getSaludo());