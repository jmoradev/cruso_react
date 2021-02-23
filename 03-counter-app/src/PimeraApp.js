import React from 'react'
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            <p>uso del fragment</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string,
    nombre: PropTypes.string,
    edad: PropTypes.number.isRequired
}

export default PrimeraApp;