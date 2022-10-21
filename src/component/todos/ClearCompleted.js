import React from 'react';
import PropTypes from 'prop-types';

ClearCompleted.propTypes = {
    name: PropTypes.string,
};

function ClearCompleted(props) {
    function removeCompleted() {
        props.setTodos(props.scopeUncompleted());
    }

    return (
        <button
            onClick={() => removeCompleted()}
            className={`px-2 py-1 bg-white rounded-md border-gray-200 border text-base font-medium shadow-sm capitalize`}
        >
            clear completed
        </button>
    );
}

export default ClearCompleted;
