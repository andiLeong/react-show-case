import React, { useRef } from 'react';
import useAppendScriptTap from 'hooks/useAppendScriptTap';
import useWeatherLocationAutoCompleteStore from 'store/useWeatherLocationAutoCompleteStore';

function LocationAutoComplete(props) {
    const city = useWeatherLocationAutoCompleteStore(state => state.city);
    const setCity = useWeatherLocationAutoCompleteStore(state => state.setCity);
    const setLon = useWeatherLocationAutoCompleteStore(state => state.setLon);
    const setLat = useWeatherLocationAutoCompleteStore(state => state.setLat);

    const autoCompleteRef = useRef(null);

    useAppendScriptTap(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACE_API_KEY}&libraries=places`,
        () => {
            let autoComplete = new window.google.maps.places.Autocomplete(
                autoCompleteRef.current,
                {
                    fields: ['geometry', 'name'],
                    types: ['(cities)'],
                    // componentRestrictions: { country: 'us' },
                }
            );

            autoComplete.addListener('place_changed', () => {
                let place = autoComplete.getPlace();
                setLon(place.geometry.location.lng());
                setLat(place.geometry.location.lat());
                setCity(place.name);
                console.log(place);
            });
        }
    );

    return (
        <>
            <input
                ref={autoCompleteRef}
                className={`w-full rounded p-2 text-gray-800`}
                onChange={event => setCity(event.target.value)}
                placeholder="Enter a City"
                value={city}
            />
        </>
    );
}

export default LocationAutoComplete;
