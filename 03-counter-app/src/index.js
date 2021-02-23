import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PimeraApp'
import './index.css';

const RootDiv = document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo="Hola mundo" nombre="jmora" edad={28} />, RootDiv)