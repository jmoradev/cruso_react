import React from 'react'
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            <p>uso del fragment</p>
            <p>{subtitulo}</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string,
    nombre: PropTypes.string,
    edad: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:''
}

export default PrimeraApp;