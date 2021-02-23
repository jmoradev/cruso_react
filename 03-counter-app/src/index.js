import React from 'react';
import ReactDOM from 'react-dom';

const RootDiv = document.querySelector('#root');
const saludo = <h1>saludo desde la etiqueta</h1>;

console.log(RootDiv);

ReactDOM.render(saludo,RootDiv)