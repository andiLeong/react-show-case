import React from 'react';

function Remaining(props) {

    function remaining() {
        if (!props.todos) {
            return 0;
        }
        return props.todos.length;
    }

    return (
        <p>{remaining()} items remaining</p>
    );
}

export default Remaining;