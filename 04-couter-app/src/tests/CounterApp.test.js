import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import React from 'react';
import CounterApp from '../CounterApp';

describe('pruebas para el componente CounterApp', () => {
    let  wrapper = shallow(<CounterApp />);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

    test('debe de coincidir con la informacion del snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener como valor 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        const valueText = wrapper.find('h2').text().trim();
        expect(parseInt(valueText,10)).toBe(value);
    })
    
    test('debe de incrementar con el boton +1', () => {
        wrapper.find('#mas').simulate('click');
        const valueText = wrapper.find('h2').text().trim();
        expect(parseInt(valueText,10)).toBe(11);
    })

    test('debe de decrementar com -1 y mandar un 9', () => {
        wrapper.find('#reset').simulate('click');
        wrapper.find('#menos').simulate('click');
        const valueText = wrapper.find('h2').text().trim();
        expect(parseInt(valueText,10)).toBe(9);
    })

    test('debe de colocar el valor por defecto con el boton reset', () => {
        const value = 105;
        const wrapper = shallow(<CounterApp value={value} />);
        wrapper.find('#mas').simulate('click');
        wrapper.find('#mas').simulate('click');
        wrapper.find('#reset').simulate('click');
        const valueText = wrapper.find('h2').text().trim();
        expect(parseInt(valueText,10)).toBe(value   );
    })
})
