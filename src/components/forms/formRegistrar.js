import React, { Component } from "react";

export default class formRegistrar extends Component {
  render() {
    return (
      <form>
          <h3>No tienes cuenta?<br/><b>CREALA!</b></h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Correo Electronico</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputPhone">Telefono</label>
          <input
            class="form-control"
            id="inputAddress"
          />
        </div>
        <div class="form-group">
          <label for="inputPetName">Nombre de la mascota</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"            
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Ciudad</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          REGISTRAR
        </button>
      </form>
    );
  }
}
