import React from 'react';

function LoadingSkeleton() {
    const lists = () => [1, 2, 3, 5, 6, 9];
    return (
        <div
            className={`bg-white rounded animate-pulse`}
            style={{ height: '37rem' }}
        >
            <header className={`bg-gray-200 rounded-t-md py-2 px-4`}>
                <div className={`flex items-center `}>
                    <div className={`flex-1 flex items-center space-x-4`}>
                        <div>
                            <p
                                className={`texttext-blue-600-5xl font-semibold text-transparent`}
                            >
                                32
                            </p>
                            <p
                                className={`text-xs mt-1 text-gray-400 text-transparent`}
                            >
                                Feels like 49 &#176;C
                            </p>
                        </div>

                        <div>
                            <p className={`font-semibold text-transparent`}>
                                loude
                            </p>
                            <p className={`text-gray-400 text-transparent`}>
                                guangzhou
                            </p>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`h-36 w-36 bg-gray-300 rounded-full`}
                        ></div>
                    </div>
                </div>
            </header>

            <main className={`bg-gray-100 rounded-b-md space-y-3 p-4`}>
                {lists().map((list, index) => (
                    <div key={index} className={`flex items-center`}>
                        <div className={`flex-1 flex items-center`}>
                            <div className={`mr-20 w-10`}>
                                <p
                                    className={`uppercase text-gray-400 text-transparent`}
                                >
                                    Fri
                                </p>
                            </div>
                            <div className={`flex items-center`}>
                                <div
                                    className={`h-12 w-12 bg-gray-200 rounded-full`}
                                ></div>
                                <p className={`ml-2 text-transparent`}>Cloud</p>
                            </div>
                        </div>
                        <div>
                            <p className={`text-transparent`}>39 &#176;C</p>
                            <p className={`text-transparent`}>40 &#176;C</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default LoadingSkeleton;
