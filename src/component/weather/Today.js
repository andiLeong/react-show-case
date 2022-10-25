import React from 'react';
import rounder from 'module/rounder';

function Today({ today }) {
    return (
        <div className={`flex items-center `}>
            <div className={`flex-1 flex items-center space-x-4`}>
                <div>
                    <p className={`texttext-blue-600-5xl font-semibold`}>
                        {rounder(today.main.temp)}&#176;C
                    </p>
                    <p className={`text-xs mt-1 text-gray-400`}>
                        Feels like {rounder(today.main.feels_like)} &#176;C
                    </p>
                </div>

                <div>
                    <p className={`font-semibold`}>
                        {today.weather[0].description}
                    </p>
                    <p className={`text-gray-400`}>{today.name}</p>
                </div>
            </div>

            <div>
                <img
                    src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`}
                    alt="icon"
                />
            </div>
        </div>
    );
}

export default Today;
