import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Route,  } from "react-router-dom";

import Header from './componentes/layout/Header';
import Perfil from './componentes/Perfil';
import Routes from './Routes';
import Home from './componentes/Home';
import DetallePerfil from './DetallesPerfil';
import Usuario from './Usuario';

  
class App extends Component{
  constructor(){
    super()    
  }

  render (){
    
    return (
      <div className="App">
        <Router>
       <CssBaseline />
      <Header>
      
        <Perfil datos/>
      </Header>
      <Routes />
     </Router>
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/usuario" exact component={Usuario} />
            <Route path="/detalle-perfil/:id" exact component={DetallePerfil} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;