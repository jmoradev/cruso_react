import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#app');

//ReactDOM.render( <PrimeraApp saludo="soy un saludo" />  , divRoot );
ReactDOM.render( <CounterApp value={100} />  , divRoot );

