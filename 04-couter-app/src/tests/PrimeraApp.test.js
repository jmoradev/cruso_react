import { shallow } from 'enzyme';
import "@testing-library/jest-dom";

import React from 'react';
import PrimeraApp from "../PrimeraApp";


describe('pruebas de primera app', () => {
    /*test('debe mostrar mensaje de hola soy', () => {
        const mensaje = 'hola soy';
        const {getByText} = render(<PrimeraApp saludo={mensaje}/>);
        expect(getByText(mensaje)).toBeInTheDocument();
    })*/
    test('debe mostrar PrimerApp correctamente', () => {
        const saludo = 'soy un saludo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'soy saludo';
        const sub = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={sub} />)

        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo.trim()).toBe(sub)
    })

})
