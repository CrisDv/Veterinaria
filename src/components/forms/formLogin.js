import React, { Component } from "react";
import {TextField, Button, Link} from '@material-ui/core'



class formLogin extends Component
{

    state=
    {
        emailD:'',
        PassD:''
    }

    LoginN= async (e)=>
    {
        const user=
        {
            CorreoU:this.state.emailD,
            contra:this.state.PassD
        }

        //await Login(user)<-Este envia los datos al JWSAuth.js
        console.log(user)

        e.preventDefault();
    }


    onChangeData=(e)=>
    {
        /*let nam = e.target.name;
        let val = e.target.value;

        this.setState({
            [nam]:val
        })*/

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render()
    {
        return(
            <form> 
                <h3>INICIA SESION</h3>       
                <TextField  name="emailD"
                            onChange={this.onChangeData}
                            fullWidth={true} 
                            label="Correo Electronico" 
                            variant="outlined"/>

                <TextField  name="PassD"
                            onChange={this.onChangeData}
                            fullWidth={true} 
                            label="Password" 
                            type="password"
                            variant="outlined" 
                            style={{marginTop:"8px"}} /> 


                <Link href="https://hentaila.com/" target="_blank">Olvidaste tu contraseña?</Link>
                <Button fullWidth={true} onClick={this.LoginN} variant="contained" color="primary">Inicia Sesion</Button>
            </form>    
        );
    }
}

export default formLogin