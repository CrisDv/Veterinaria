import React, { Component } from "react";
import "../styles/home.css";

import FormuAgendarCita from "./forms/formAgendarCita";

//IMAGENES
import VeterinariaIMG1 from "../images/veterinaria-1.jpg";
import Beagle from '../images/beagleDog.jpg'
import gato from '../images/gato.jpg'
import loro from '../images/loro.jpg'

class Home extends Component {

    render() 
    {return (
        <div className="container-fluid  animated fadeIn">
            <div className="row">
            <img
            id="ImagenForm"
            className="col-12 col-md-6"
            src={VeterinariaIMG1}
            alt="..."/>
            <div className="col-12 col-md-6">
                <h3>DIGITE LOS DATOS PARA AGENDAR CITA</h3>
                <FormuAgendarCita />
            </div>
        </div>
            <div className="container-fluid" id="cardsgroup">
                <div className="row">
                    <div className="card  hvr-fade col-12 col-md-6 col-lg-4">
                        <img  src={Beagle} alt="..." width="550" height="300"/>
                        <div className="card-body">
                            <h5 className="card-title">title</h5>
                            <p className="card-text">1234567</p>
                        </div>
                    </div>
                    <div className="card hvr-fade col-12 col-md-6 col-lg-4">
                        <img src={gato} alt="..." width="540" height="300"/>  nb
                        <div className="card-body">
                            <h5 className="card-title">title</h5>
                            <p className="card-text">asdasdasd</p>
                        </div>
                    </div>
                    <div className="card hvr-fade col-12 col-md-6 col-lg-4">
                        <img src={loro} alt="..." width="540" height="300"/>
                        <div className="card-body">
                            <h5 className="card-title">title</h5>
                            <p className="card-text">asdasdasd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );}
}

export default Home;
