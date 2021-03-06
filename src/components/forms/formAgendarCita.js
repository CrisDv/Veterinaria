import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


class AgendarCitaForm extends Component
{
    render()
    {
        return(
            <form>
            <div className="form-row">
                <div className="col">
                <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                <input type="text" className="form-control" placeholder="Last name"/>
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="inputNumber">Numero de contacto</label>
                    <input type="text" className="form-control" id="inputNumber" placeholder="0000000"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="inputCity">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Ciudad..."/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inpPet">Tipo de mascota</label>
                    <select id="inpPet" className="form-control">
                        <option selected>Perro</option>
                        <option>Gato</option>
                        <option>Ave</option>
                        <option>Pez</option>    
                    </select>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inpRaza">Raza</label>
                    <input type="text" className="form-control" id="inpRaza" placeholder="Ej: Pitbull"/>
                    </div>
                </div>
                <Button color='primary' variant='contained' >AGENDAR</Button>
                
            </form>
        );
    }
}

export default AgendarCitaForm;