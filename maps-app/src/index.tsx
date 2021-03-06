import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp'; 
//@ts-ignore
//eslint-disable-next-line
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvbmFyYW5kYSIsImEiOiJjbDBiZGppM2gwbG5wM2pydHA5cGhrYTV2In0.j5zZsKARkXpioaeYO8oAfQ';

if ( !navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation');
  
}


ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

