import React from 'react';
import PropTypes from "prop-types";

Check.propTypes = {
    name: PropTypes.string
};

function Check(props) {

    function completedAll() {
        props.mapAndSetTodo(todo => {
            todo.isCompleted = true;
        })
    }

    function unCompletedAll() {
        props.mapAndSetTodo(todo => {
            todo.isCompleted = false;
        })
    }

    return (
        <>
            <button
                onClick={() => completedAll()}
                className={`px-2 py-1 bg-white rounded-md border-gray-200 border text-base font-medium shadow-sm capitalize`}>
                Check All
            </button>

            <button
                onClick={() => unCompletedAll()}
                className={`px-2 py-1 bg-white rounded-md border-gray-200 border text-base font-medium shadow-sm capitalize`}>
                Uncheck All
            </button>
        </>
    )
        ;
}

export default Check;