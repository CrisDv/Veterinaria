import React, { Component } from "react";
import "../styles/Navigation.css";
import {Link} from 'react-router-dom'


class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navCollapse" 
                    aria-controls="navCollapse" 
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="">Home</Link>
                        <Link className="nav-item nav-link" to="/listaderazas">Lista de Razas</Link>
                        <Link className="nav-item nav-link" to="/">Enfermedades Comunes</Link>
                        <Link to="/Login"><button className="btn btn-success">Inicia Sesion</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navigation;
