import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYWxvbmFyYW5kYSIsImEiOiJjbDBiZGppM2gwbG5wM2pydHA5cGhrYTV2In0.j5zZsKARkXpioaeYO8oAfQ'
    }
})

export default searchApi;