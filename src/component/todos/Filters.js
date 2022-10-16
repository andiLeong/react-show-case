import React from 'react';

function Filters(props) {

    let filters = ['all','active','completed'];

    return (
        <>
            {
               filters.map( (filter,index) => (
                   <button
                       key={index}
                       onClick={() => props.setFilter(filter)}
                       className={`px-2 py-1 text-base font-medium capitalize 
                                    ${props.filter === filter ? ' shadow-sm bg-white rounded-md border-gray-200 border ' : ''}`}
                   >
                       {filter}
                   </button>
               ))
            }
        </>
    );
}

export default Filters;