import React, {useState} from 'react';

function Lists(props) {

    const [editId, setEditId] = useState(null);

    function remove(id) {
        let newTodos = props.todos.filter(todo => todo.id !== id);
        props.setTodos(newTodos)
    }

    function complete(id) {
        props.mapAndSetTodo(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
        })
    }

    function onKeyDown(e, id) {

        if (e.key === 'Escape') {
            return setEditId(null)
        }

        // if (e.key === 'Enter' || e.type === 'blur') {
        //     update(id, e.target.value)
        // }
    }

    function update(id, value) {
        props.mapAndSetTodo(todo => {
            if (todo.id === id) {
                if (value.trim().length === 0) {
                    setEditId(null)
                    return todo;
                }
                todo.name = value;
            }
            return todo;
        })
        setEditId(null)
    }

    return (

        <ul className={`divide-y divide-gray-200 divide-y-2 `}>
            {
                props.filterTodos().map((todo, index) => (
                    <li key={index}
                        className={`flex justify-between items-center pt-3 pb-2 text-sm font-medium text-gray-900 text-lg`}>
                        <div className={`space-x-5 flex items-center flex-1 mr-4 `}>
                            <input onChange={() => complete(todo.id)}
                                   className={`w-4 h-4`}
                                   type="checkbox"
                                   checked={todo.isCompleted}
                            />
                            {editId === todo.id ? (
                                <input
                                    onKeyDown={(e) => onKeyDown(e, todo.id)}
                                    onBlur={(e) => onKeyDown(e, todo.id)}
                                    className={` pl-3 py-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-sky-500 text-lg`}
                                    autoFocus
                                    defaultValue={todo.name}
                                    type="text"/>
                            ) : (
                                <p
                                    onClick={() => complete(todo.id)}
                                    className={`text-xl font-semibold ` + (todo.isCompleted ? 'line-through' : '')}>
                                    {todo.name}
                                </p>
                            )}
                        </div>
                        <div className={`space-x-3 flex items-center`}>
                            <button
                                onClick={() => editId === null ? setEditId(todo.id) : setEditId(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                                </svg>
                            </button>
                            <button onClick={() => remove(todo.id)}>X</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default Lists;