import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        language: 'es',
        steps: false,
        access_token: 'pk.eyJ1IjoiYWxvbmFyYW5kYSIsImEiOiJjbDBiZGppM2gwbG5wM2pydHA5cGhrYTV2In0.j5zZsKARkXpioaeYO8oAfQ'
    }
})

export default directionsApi;