import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(props.iniCount);

    function increase() {
        setCount(pre => pre + 1);
    }

    function decrease() {
        if (count < 1) {
            return;
        }
        setCount(pre => pre - 1);
    }

    return (
        <div className="flex space-x-3">
            <p>{count}</p>
            <div className="space-x-1">
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>
        </div>
    );
}
