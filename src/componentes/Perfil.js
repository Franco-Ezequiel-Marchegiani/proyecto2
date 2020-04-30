import React from 'react';
import {Link} from "react-router-dom";

function Perfil({datos}){

    return(
        <div>      
            
            <br></br> 
            <br></br>
            <br></br> 
            {datos.name}
         
                <div className="Imagen">
                    <img src="../img/perfil4.jpg" />
                </div>
              <Link to={'detalle-perfil/'+datos.id}>Ver Detalle</Link>   
                             
        </div>
        
    )
    
}



export default Perfil;