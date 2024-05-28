import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css"


function Navbar (){
    return(
        <nav className="Navbar">
            <NavLink to={"/"} className="buscadores">Home</NavLink>
            <NavLink to={"/Listado"} className="buscadores">Listado</NavLink>
            <NavLink to={"/Registro"} className="buscadores">Registro</NavLink>
            <NavLink to={"/Login"} className="buscadores">Login</NavLink>
        </nav>
    )
}

export default Navbar