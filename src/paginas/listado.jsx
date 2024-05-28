import React from "react";
import Navbar from "../componentes/Navbar";
import ProductCatalog from "../componentes/products";

function Listado(){
    return(
        <div>
        <Navbar/>
            <h2>Productos del Catalogo</h2>
            <ProductCatalog/>
        </div>
        


)}

export default Listado