import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Today from 'component/weather/Today';
import Future from 'component/weather/Future';
import useWeatherLocationAutoCompleteStore from 'store/useWeatherLocationAutoCompleteStore';
import LocationAutoComplete from 'component/weather/LocationAutoComplete';
import LoadingSkeleton from 'component/weather/LoadingSkeleton';

function Weather(props) {
    const lon = useWeatherLocationAutoCompleteStore(state => state.lon);
    const lat = useWeatherLocationAutoCompleteStore(state => state.lat);
    let url = `${process.env.REACT_APP_BASE_URL}/api/weather?lat=${lat}&lon=${lon}`;

    const { data: weather, isLoading } = useQuery(
        ['weather', url],
        fetchWeather
    );

    function fetchWeather() {
        return fetch(url).then(response => response.json());
    }

    return (
        <div
            className={`min-h-screen bg-gradient-to-tr from-sky-200 to-sky-400`}
        >
            <div
                className={`w-full px-5 md:px-0 md:max-w-lg md:mx-auto text-white pt-10`}
            >
                <div className={`mb-3`}>
                    <LocationAutoComplete />
                </div>
                {isLoading && <LoadingSkeleton />}
                <div className={`shadow-2xl shadow-white`}>
                    {weather && (
                        <>
                            <header
                                className={`bg-gray-900 rounded-t-md py-2 px-4`}
                            >
                                <Today today={weather.today} />
                            </header>

                            <main
                                className={`bg-gray-800 rounded-b-md space-y-3 p-4`}
                            >
                                <Future future={weather.future} />
                            </main>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Weather;
