import React,{Component} from 'react';
import Perfil from './Perfil';
import Button from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(){
        super()
        this.state={
            error: null ,           
            isLoaded:false,
            perfiles:[]
            
            
        }
    }
   
    handleSubmit(e){
        this.props.history.push('/usuario');
        let history = useHistory();
        
        e.preventDefault();
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                this.setState({
                    perfiles:result,
                    isLoaded:true
                    
                    
                })
              
            }, (error) => {
                console.log("Error")
            }
            
            )
            
    }
    

    render(){
       


        if(!this.state.isLoaded){
            return (
                <div>
                    Loading
                    
                </div>
            )
        }else{
            return(
                <div>
                    <Link to={'/usuario'}>Tu perfil</Link>
                    <br></br>
                    {this.state.perfiles.map(data=><Perfil datos={data}/>)}
                    
                    <Link to={'/login'}>Logout</Link>
                </div>
            )
            } 
            
            
      
        
    }
}

export default Home;