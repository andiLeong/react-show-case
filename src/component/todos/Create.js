import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'component/alerts/Alert';

Create.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
};

function Create(props) {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    function handleTodo(e) {
        setTodo(e.target.value);
    }

    function store(e) {
        e.preventDefault();
        let id = Date.now();

        if (validationFails()) {
            return;
        }

        props.setTodos([
            ...props.todos,
            {
                name: todo,
                id,
                isCompleted: false,
            },
        ]);

        setSuccess({
            id: Date.now(),
            message: 'Added to Todo List !',
        });
        setTodo('');
    }

    function validationFails() {
        let id = Date.now();
        let failValidation = false;
        let rules = [
            {
                name: 'required',
                fail: value => value.trim().length === 0,
                after: () =>
                    setError({
                        id,
                        message: 'The Field cant be blank',
                    }),
            },
            {
                name: 'exist',
                fail: value => {
                    let todoArray = props.todos.map(todo => todo.name);
                    return todoArray.includes(value);
                },
                after: () =>
                    setError({
                        id,
                        message: 'Todo already existed!',
                    }),
            },
        ];

        rules.forEach(rule => {
            if (rule.fail(todo)) {
                rule.after();
                failValidation = true;
                return;
            }
        });

        return failValidation;
    }

    return (
        <>
            <form onSubmit={store} className={`col-span-3 space-y-3`}>
                <p className={`font-bold text-lg text-black-600`}>Todo App</p>
                <input
                    onChange={handleTodo}
                    value={todo}
                    className={`w-full pl-2 p-0.5 block rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm`}
                    type="text"
                />
            </form>

            <div className={`col-span-3 space-y-3`}>
                {error && (
                    <Alert
                        key={error.id}
                        type="danger"
                        message={error.message}
                    />
                )}

                {success && (
                    <Alert
                        key={success.id}
                        type="success"
                        message={success.message}
                    />
                )}
            </div>
        </>
    );
}

export default Create;
