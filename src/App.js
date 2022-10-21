import { useState } from 'react';
import useLocalstorage from 'hooks/useLocalstorage';
import Remaining from 'component/todos/Remaining';
import Create from 'component/todos/Create';
import Check from 'component/todos/Check';
import ClearCompleted from 'component/todos/ClearCompleted';
import Filters from 'component/todos/Filters';
import Lists from 'component/todos/Lists';

function App() {
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useLocalstorage('todos', []);

    function mapAndSetTodo(fn) {
        let newTodos = todos.map(todo => {
            fn(todo);
            return todo;
        });
        setTodos(newTodos);
    }

    function scopeUncompleted() {
        return todos.filter(todo => todo.isCompleted === false);
    }

    function scopeCompleted() {
        return todos.filter(todo => todo.isCompleted === true);
    }

    function filterTodos() {
        if (filter === 'active') {
            return scopeUncompleted();
        }

        if (filter === 'completed') {
            return scopeCompleted();
        }

        return todos;
    }

    function filterCount() {
        return [
            todos.length,
            scopeUncompleted().length,
            scopeCompleted().length,
        ];
    }

    return (
        <div className={`grid gap-1 grid-cols-12 `}>
            <div
                className={`space-y-2 col-span-4 grid grid-cols-4 gap-1 content-start`}
            >
                <Create todos={todos} setTodos={setTodos} />
            </div>

            {todos.length > 0 ? (
                <div
                    style={{ height: '27em' }}
                    className={`space-y-8 divide-y col-span-5  flex flex-col`}
                >
                    <div className={`flex-1`}>
                        <Lists
                            mapAndSetTodo={mapAndSetTodo}
                            setTodos={setTodos}
                            todos={todos}
                            filterTodos={filterTodos}
                        />
                    </div>

                    <div className={`flex items-center justify-between pt-4`}>
                        <div>
                            <Check mapAndSetTodo={mapAndSetTodo} />
                        </div>

                        <div>
                            <Remaining todos={todos} />
                        </div>
                    </div>

                    <div className={`flex items-center justify-between pt-4`}>
                        <div className={`flex`}>
                            <Filters
                                filterCounts={filterCount()}
                                filter={filter}
                                setFilter={setFilter}
                            />
                        </div>

                        <div>
                            <ClearCompleted
                                scopeUncompleted={scopeUncompleted}
                                setTodos={setTodos}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <p>No tasks yet</p>
            )}
        </div>
    );
}

export default App;
