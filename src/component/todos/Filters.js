import React from 'react';

function Filters(props) {
    let filters = [
        {
            key: 'all',
            count: props.filterCounts[0],
        },
        {
            key: 'active',
            count: props.filterCounts[1],
        },
        {
            key: 'completed',
            count: props.filterCounts[2],
        },
    ];

    return (
        <>
            {filters.map((filter, index) => (
                <div key={index} className={`space-x-1.5 flex item-center`}>
                    <button
                        onClick={() => props.setFilter(filter.key)}
                        className={`px-2 py-1 text-base font-medium capitalize inline-flex items-center
                                    ${
                                        props.filter === filter.key
                                            ? ' shadow-sm bg-white rounded-md border-gray-200 border '
                                            : ''
                                    }`}
                    >
                        {filter.key}
                        <span
                            className={`ml-2 bg-sky-400 rounded text-white text-xs shadow shadow-sky-500/50 py-0.5 px-1`}
                        >
                            {filter.count}
                        </span>
                    </button>
                </div>
            ))}
        </>
    );
}

export default Filters;
