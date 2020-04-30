import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import firebase from './../Config/firebase';

const MyLink = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));



class Registro extends Component{
  constructor(props){
    super(props);
    console.log(this.props.title)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
      nombre:'',
      apellido:'',
      usuario:'',
      email:'',
      telefono:'',
      empresa:'',
      password:'',
      confirmacion:''  
    }
    console.log(firebase.database());
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
// Para actualizar o eliminar datos:
//  var updates = {};       Para actualizar usar "updates" para eliminar "delete"
// updates['/posts/' + newPostKey] = postData;
// updates['/user-´posts/' + uid + '/' + newPostKey] = postData;

//return firebase.database().ref(). update(updates);

  
  handleSubmit(e){
    console.log(this.state);
    //Se defienen las propiedades con sus respectivos nombres
    let email= this.state.email;
    let password= this.state.password;
    firebase.auth.createUserWithEmailAndPassword(email, password) //Acá almacena los datos del usuario
    .then(()=>{ //Comando similar al if
      console.log("Nuevo usuario creado")
    })
    .catch((error)=>{
      console.log("Error", error)
      alert("Ese mail ya está en uso")
      alert("Por favor introduzca un mail distinto")
    })    
    e.preventDefault();
  }
  handleChange(e){ //Usar la información que viene del "e" (evento)

  console.log(this.state.nombre);
  const target = e.target; //El checkbox hace que se actualice de forma genérica para cualquier input
  const value = target.tyoe === 'checkbox' ? target.cheked : target.value;
  const name = target.name;

    this.setState({
      [name]:value //De esta manera llama a todos los valores del listado
    })
    e.preventDefault();
  }

  render(){
    return(
      
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre</label>
            <input type="text" 
            placeholder="Introduzca su nombre" 
            name="nombre" 
            value={this.state.nombre} 
            onChange={this.handleChange.bind(this)}></input>
          </div>

          <div>
            <label>Apellido</label>
            <input type="text" 
            placeholder="Introduzca su apellido"
            name="apellido" value={this.state.apellido} 
            onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Usuario</label>
            <input type="text" 
            placeholder="Introduzca su Usuario" 
            name="usuario" 
            value={this.state.usuario} 
            onChange={this.handleChange}></input>
          </div>

          <div>
            <label>E-Mail</label>
            <input type="email" 
            placeholder="Introduzca su mail" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Teléfono</label>
            <input type="number" 
            placeholder="Introduzca su Teléfono" 
            name="telefono" 
            value={this.state.telefono} 
            onChange={this.handleChange}></input>
          </div>
          
          <div>
            <label>Empresa tel.</label>
            <input type="text" placeholder="Introduzca una empresa telf." name="empresa" value={this.state.empresa} onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Contraseña</label>
            <input type="password" placeholder="Introduzca una contraseña" name="password" value={this.state.password} onChange={this.handleChange}></input>
          </div>  

          <div>
            <label>Confirmación</label>
            <input type="password" placeholder="Confirme su contraseña" name="confirmacion" value={this.state.confirmacion} onChange={this.handleChange}></input>
          </div>      
        <br></br>
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"    
                   
          >
          Regístrame
          </Button>
          </div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" component={MyLink} variant="body2">
                {"Ya tienes una cuenta? Ingresa aquí"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}
export default Registro;