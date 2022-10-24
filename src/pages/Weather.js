import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

function Weather(props) {
    let url = `${process.env.REACT_APP_BASE_URL}/api/weather?lat=3.152815&lon=101.703651`;

    function future() {
        let days = [];

        return weather.future.list.filter(listItem => {
            let timestamp = listItem.dt * 1000;
            let day = new Date(timestamp).getDay();

            if (days.includes(day)) {
                return false;
            }
            days.push(day);
            return true;
        });
    }

    const {
        data: weather,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useQuery(['weather'], fetchWeather);

    function fetchWeather() {
        return fetch(url).then(response => response.json());
    }

    function getDayInString(day) {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return days[day];
    }

    function round(num) {
        return Math.round(num);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('latitude ' + position.coords.latitude);
            console.log('longitude ' + position.coords.longitude);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }

    useEffect(() => {
        if (weather) {
            future();
        }
    }, [weather]);

    return (
        <div
            className={`min-h-screen bg-gradient-to-tr from-sky-200 to-sky-400`}
        >
            <div className={`max-w-lg mx-auto text-white pt-10`}>
                {isLoading && (
                    <p className={`text-3xl font-semibold text-center mt-20`}>
                        Loading...
                    </p>
                )}
                <div className={`shadow-2xl shadow-white`}>
                    {weather && (
                        <>
                            <header
                                className={`bg-gray-900 rounded-t-md py-2 px-4`}
                            >
                                <div className={`flex items-center `}>
                                    <div
                                        className={`flex-1 flex items-center space-x-4`}
                                    >
                                        <div>
                                            <p
                                                className={`texttext-blue-600-5xl font-semibold`}
                                            >
                                                {round(weather.today.main.temp)}{' '}
                                                &#176;C
                                            </p>
                                            <p
                                                className={`text-xs mt-1 text-gray-400`}
                                            >
                                                Feels like{' '}
                                                {round(
                                                    weather.today.main
                                                        .feels_like
                                                )}{' '}
                                                &#176;C
                                            </p>
                                        </div>

                                        <div>
                                            <p className={`font-semibold`}>
                                                {
                                                    weather.today.weather[0]
                                                        .description
                                                }
                                            </p>
                                            <p className={`text-gray-400`}>
                                                {weather.today.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <img
                                            src={`http://openweathermap.org/img/wn/${weather.today.weather[0].icon}@4x.png`}
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                            </header>

                            <main
                                className={`bg-gray-800 rounded-b-md space-y-3 p-4`}
                            >
                                {future().map((list, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center`}
                                    >
                                        <div
                                            className={`flex-1 flex items-center`}
                                        >
                                            <div className={`mr-20 w-10`}>
                                                <p
                                                    className={`uppercase text-gray-400`}
                                                >
                                                    {getDayInString(
                                                        new Date(
                                                            list.dt * 1000
                                                        ).getDay()
                                                    )}
                                                </p>
                                            </div>
                                            <div
                                                className={`flex items-center`}
                                            >
                                                <p>
                                                    <img
                                                        src={`http://openweathermap.org/img/wn/${list.weather[0].icon}.png`}
                                                        alt="icon"
                                                    />
                                                </p>
                                                <p className={`ml-2`}>
                                                    {
                                                        list.weather[0]
                                                            .description
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                {round(list.main.temp_min)}{' '}
                                                &#176;C
                                            </p>
                                            <p>
                                                {round(list.main.temp_max)}{' '}
                                                &#176;C
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </main>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Weather;
