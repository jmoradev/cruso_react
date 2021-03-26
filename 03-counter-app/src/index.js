import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CouterApp';

const RootDiv = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo="Hola mundo" nombre="jmora" edad={28} />, RootDiv)
ReactDOM.render(<CounterApp value={12} />, RootDiv)