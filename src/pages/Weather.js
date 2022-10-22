import React, { useEffect, useMemo } from 'react';

function Weather(props) {
    const lists = [1, 2, 3, 4, 5];
    return (
        <div
            className={`min-h-screen bg-gradient-to-tr from-sky-200 to-sky-400`}
        >
            <div
                className={`max-w-lg mx-auto text-white pt-10 shadow-2xl shadow-white`}
            >
                <header className={`bg-gray-900 rounded-t-md py-2 px-4`}>
                    <div className={`flex items-center `}>
                        <div className={`flex-1 flex items-center space-x-4`}>
                            <div>
                                <p className={`text-5xl font-semibold`}>23C</p>
                                <p className={`text-xs mt-1 text-gray-400`}>
                                    Feels like 25C
                                </p>
                            </div>

                            <div>
                                <p className={`font-semibold`}>Clear sky</p>
                                <p className={`text-gray-400`}>
                                    Guangzhou,China
                                </p>
                            </div>
                        </div>

                        <div>
                            <img
                                src="http://openweathermap.org/img/wn/10d@4x.png"
                                alt="icon"
                            />
                        </div>
                    </div>
                </header>

                <main className={`bg-gray-800 rounded-b-md space-y-3 p-4`}>
                    {lists &&
                        lists.map((list, index) => (
                            <div key={index} className={`flex items-center`}>
                                <div className={`flex-1 flex items-center`}>
                                    <div className={`mr-20`}>
                                        <p
                                            className={`uppercase text-gray-400`}
                                        >
                                            Fri
                                        </p>
                                    </div>
                                    <div className={`flex items-center`}>
                                        <p>
                                            <img
                                                src="http://openweathermap.org/img/wn/10d.png"
                                                alt="icon"
                                            />
                                        </p>
                                        <p className={`ml-2`}>heavy rain</p>
                                    </div>
                                </div>
                                <div>
                                    <p>38c</p>
                                    <p>45c</p>
                                </div>
                            </div>
                        ))}
                </main>
            </div>
        </div>
    );
}

export default Weather;
