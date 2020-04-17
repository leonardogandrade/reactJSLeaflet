import React,{Component} from 'react';
import './index.css';
import api from '../../services/api';
import logo from '../../img/globe_icon.png';

export default class RegisterGeo extends Component{
    state = {
        local : '',
        lat : '',
        lon : ''
    }

    handleOnChange = event =>{
        this.setState({[event.target.name] : event.target.value})
    }

    handleOnSubmit = async event =>{
        //event.preventDefault();

        // const data = new FormData();
        // data.append('lat',this.state.lat);
        // data.append('lon',this.state.lon);
        // data.append('local',this.state.local);
        const data = await api.post('/',{
            lat : this.state.lat,
            lon : this.state.lon,
            local : this.state.local
        });
        console.log(data);
    }

    render(){
        return(
        <div id='main-container'>         
            <form className='register' onSubmit={this.handleOnSubmit}>
            <img className='logo' src={logo} alt=''/>
            <input 
                    type='text'
                    name='local'
                    placeholder='Local'
                    onChange={this.handleOnChange}
                    value={this.state.local}
                />
                <input 
                    type='text'
                    name='lat'
                    placeholder='Latitude'
                    onChange={this.handleOnChange}
                    value={this.state.lat}
                />
                <input 
                    type='text'
                    name='lon'
                    placeholder='Longitude'
                    onChange={this.handleOnChange}
                    value={this.state.lon}
                />
                <button type='submit'>Salvar</button>
            </form>
        </div>
        )
    }
}