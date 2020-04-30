import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Col, Image, Row} from 'react-bootstrap';



function DetallePerfil(props){

    const [datos, setDatos] = useState ({});
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users/"+props.match.params.id)
            .then(res=>res.json())
            .then(
                (result)=>{
                    console.log(result)
                    setDatos(result)
                },
                (error) => {
                    console.log("Error")
                }
            )
    }, );
    
    return(
        <div>
           {datos.name}  
           <div className="Imagen">                   
                    <Col xs={6} md={4}>
                     <Image src="../img/perfil4.jpg" thumbnail />
                                        

                    </Col>
                </div>     
                <br></br>
                <Link to={'/'}>Back Home</Link>     
        </div>
    )
}

export default DetallePerfil;