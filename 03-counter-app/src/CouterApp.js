import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleReset = () => {
        setCounter(value)
    }
    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <h1>Counter app</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp