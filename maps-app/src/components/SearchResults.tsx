import { useContext, useState } from "react"
import { LoadingPlaces } from ".";
import { MapContext, PlacesContext } from "../context"
import { Feature } from "../interfaces/places";

export const SearchResults = () => {

    const { places, isLoadingPlaces } = useContext(PlacesContext);
    const { map } = useContext(MapContext);

    const [activeId, setActiveId] = useState('')

    const onPlaceClick = ( place: Feature ) => {
        const [lng,lat] = place.center;
        setActiveId(place.id);
        map?.flyTo({
            zoom: 18,
            center: [lng,lat],
        })
    }

    if ( isLoadingPlaces ) {
        return <LoadingPlaces/>
    }

    if ( places.length === 0) {
        return <></>
    }

    return (
        <ul className="list-group mt-3">

            {
                places.map( place => (
                    <li
                        key={place.id}
                        className={`list-group-item list-group-action pointer ${(activeId === place.id) ? 'active' : ''}`}
                        onClick={() => onPlaceClick(place)}
                    >
                        <h6>{place.text_es}</h6>
                        <p 
                            className="text-muted"
                            style={{
                                fontSize: '14px',
                            }}
                        >
                            {place.place_name}
                        </p>

                        <button className={`btn btn-sm ${(activeId === place.id) ? 'btn-outline-line' : 'btn-outline-primary'}`}>
                            Direcciones
                        </button>

                    </li>
                ))
            }
        </ul>
    )
}
