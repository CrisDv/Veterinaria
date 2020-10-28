import React, { Component } from "react";
import FormRegistrar from './forms/formRegistrar'
import FormLogin from './forms/formLogin'
import '../styles/formLogin.css';

class Login extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12" id="logindiv">
                        <FormRegistrar/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12" id="logindiv">
                        <FormLogin/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login