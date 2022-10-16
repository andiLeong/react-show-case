import React, {useState} from 'react';
import PropTypes from "prop-types";


Create.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
};

function Create(props) {

    const [todo, setTodo] = useState('');

    function handleTodo(e) {
        setTodo(e.target.value)
    }

    function store(e) {
        e.preventDefault();

        if (todo.trim().length === 0) {
            return;
        }

        props.setTodos([
            ...props.todos,
            {
                name: todo,
                id: Date.now(),
                isCompleted: false,
            }
        ]);

        setTodo('')
    }

    return (
        <form onSubmit={store}>
            <input
                onChange={handleTodo}
                value={todo}
                className={`w-56 pl-2 p-0.5 block rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm`}
                type="text"/>
        </form>
    )
        ;
}

export default Create;