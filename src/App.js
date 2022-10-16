import {useState} from "react";
import useLocalstorage from "hooks/useLocalstorage";
import Remaining from "component/todos/Remaining";
import Create from "component/todos/Create";
import Check from "component/todos/Check";
import ClearCompleted from "component/todos/ClearCompleted";
import Filters from "component/todos/Filters";
import Lists from "component/todos/Lists";

function App() {

    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useLocalstorage('todos', []);

    function mapAndSetTodo(fn) {
        let newTodos = todos.map(todo => {
            fn(todo)
            return todo;
        });
        setTodos(newTodos)
    }

    function scopeUncompleted() {
        return todos.filter(todo => todo.isCompleted === false);
    }

    function filterTodos() {

        if (filter === 'active') {
            return scopeUncompleted();
        }

        if (filter === 'completed') {
            return todos.filter(todo => todo.isCompleted === true);
        }

        return todos;
    }

// <input className={`bg-red-200`} onChange={handleInput} value={name} type="text"/>
//
//             <button onClick={toggleText}>
//                 {showText ? 'hide' : 'show'}
//             </button>
//
//             <CSSTransition
//                 in={showText}
//                 timeout={200}
//                 nodeRef={textToShow}
//                 classNames={{
//                     enter: 'transform opacity-0 scale-95',
//                     enterActive: 'transition ease-out duration-200',
//                     enterDone: 'transform opacity-100 scale-100',
//                     exit: 'transform opacity-0 scale-95',
//                     exitActive: 'transition ease-in duration-75',
//                     exitDone: 'transform opacity-0 scale-95',
//                 }}
//                 unmountOnExit
//             >
//                 <p ref={textToShow}>hello world hidden by default</p>
//             </CSSTransition>
    return (
        <div className={`bg-gray-100 min-h-screen`}>

            <div className={`mx-auto max-w-7xl`}>
                <div className={`grid gap-1 grid-cols-12 p-10`}>
                    <div className={`space-y-2 col-span-4`}>
                        <p className={`font-bold text-lg text-black-600`}>Todo App</p>
                        <Create todos={todos} setTodos={setTodos}/>
                    </div>

                    {
                        todos.length > 0 ? (
                            <div className={`space-y-8 divide-y col-span-5`}>
                                <div>
                                    <Lists mapAndSetTodo={mapAndSetTodo} setTodos={setTodos} todos={todos} filterTodos={filterTodos} />
                                </div>

                                <div className={`flex items-center justify-between pt-4`}>
                                    <div>
                                        <Check mapAndSetTodo={mapAndSetTodo}/>
                                    </div>

                                    <div>
                                        <Remaining todos={todos}/>
                                    </div>
                                </div>

                                <div className={`flex items-center justify-between pt-4`}>
                                    <div className={`space-x-1.5`}>
                                        <Filters filter={filter} setFilter={setFilter}/>
                                    </div>

                                    <div>
                                        <ClearCompleted scopeUncompleted={scopeUncompleted} setTodos={setTodos}/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>No tasks yet</p>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default App;
