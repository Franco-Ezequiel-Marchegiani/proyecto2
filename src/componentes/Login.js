import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {useHistory} from 'react-router-dom';
import firebase from './../Config/firebase';



const MyLink = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));



class Login extends Component{
  constructor(props){
    super(props);
    console.log(this.props.title)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit(e){
    let history = useHistory();
    this.props.history.push('/');
    console.log(this.state)

    e.preventDefault();

  }

  handleSubmit(e){
    console.log(this.state); 
    let email=this.state.email;
    let password=this.state.password;

    firebase.auth.signInWithEmailAndPassword(email, password)
    .then (() => {
      console.log("Login")
      this.props.history.push('/');
    })
    .catch(error => {
      console.log("Error", error)
      alert("El usuario o contraseña no coinciden")
    });
    e.preventDefault();
  }

  handleChange(e){ //Usar la información que viene del "e" (evento)
  const target = e.target; 
  const value = target.value
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
            <label>email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          </div>        
        <br></br>
          <Button         
            type="submit"
            fullWidth
            variant="contained"
            color="primary"      
                       
          >
          
          Ingresar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/registro" component={MyLink} variant="body2">
                {"Todavía no tienes una cuenta? Ingresa aquí"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}
export default Login;