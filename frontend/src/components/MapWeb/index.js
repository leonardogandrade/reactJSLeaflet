import React,{Component} from 'react';
import api from '../../services/api';
import {Map,TileLayer,Popup,Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css'
import L from 'leaflet';


const iconBlue = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-10, -90] // point from which the popup should open relative to the iconAnchor
});


export default class MapWeb extends Component{
    state = {
        zoom: 5,
        centerMap : [-20.2,-40.2],
        minZoom : 3,
        maxZoom : 18,
        geo : []
      }

    async componentDidMount(){
        const response = await api.get('/');
        this.setState({geo : response.data});
    }

    render(){
        return(
            <Map className="map" center={this.state.centerMap} zoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.state.geo.map(data =>(
                    <Marker
                        key={data._id} 
                        position={[data.lat,data.lon]}
                        icon={iconBlue}>
                        <Popup>{data.local}</Popup>
                    </Marker>
                ))}
            </Map>
    )
    }
}