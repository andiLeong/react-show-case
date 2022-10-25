import React, { useEffect } from 'react';
import rounder from 'module/rounder';

function Future({ future }) {
    function getDayInString(day) {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return days[day];
    }

    function getFutureItems() {
        let days = [];

        return future.list.filter(listItem => {
            let timestamp = listItem.dt * 1000;
            let day = new Date(timestamp).getDay();

            if (days.includes(day)) {
                return false;
            }
            days.push(day);
            return true;
        });
    }

    return (
        <>
            {getFutureItems().map((list, index) => (
                <div key={index} className={`flex items-center`}>
                    <div className={`flex-1 flex items-center`}>
                        <div className={`mr-20 w-10`}>
                            <p className={`uppercase text-gray-400`}>
                                {getDayInString(
                                    new Date(list.dt * 1000).getDay()
                                )}
                            </p>
                        </div>
                        <div className={`flex items-center`}>
                            <p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`}
                                    alt="icon"
                                />
                            </p>
                            <p className={`ml-2`}>
                                {list.weather[0].description}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>{rounder(list.main.temp_min)} &#176;C</p>
                        <p>{rounder(list.main.temp_max)} &#176;C</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Future;
