import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
    return(
        <>
        <div className="background-img">
            <div className="space"></div>
            <div className="wrapper">
                <div className="img-wrapper">
                    <span>Error 404</span>
                </div>
                <p>
                    Has en entrado en un sitio que no corresponde.{' '}
                    <br />
                    Toca el boton para volver al inicio
                </p>
                <NavLink to="/home">
                    <button type="button">Volver al inicio</button>
                </NavLink>
            </div>
        </div>
    </>
    );
};

export default Error404;