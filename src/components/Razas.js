import Axios from 'axios'
import React, { Component } from 'react'

export default class Razas extends Component {
    state={
        ListaPerros:[]
    }

    async componentDidMount()
    {

        const LP=await Axios.get('https://api.thedogapi.com/v1/breeds',
        {
            headers:
            { 
                
                "Content-Type":"application/json",
                "x-api-key":"d3f4f21a-f976-42d1-be69-a207edbae1cb"
            }
        });

        this.setState({ListaPerros: LP.data})

        console.log(this.state.ListaPerros)
    }

    render() {
        return (
            <div>
                {//PONE EN UNA LISTA LAS PLAYLIST
                    this.state.ListaPerros.map(doge=><li id="List"
                    className="list-group-item list-group-item-action" 
                    key={doge.id}>
                    <h4 id="TitlePlaylist">{doge.name}</h4>
                    <span style={{fontSize:"10px"}} >ORIGEN: {doge.origin}</span>
                    </li>)
                }
            </div>
        )
    }
}
