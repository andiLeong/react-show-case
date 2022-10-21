import { useEffect, useState } from 'react';

function useLocalstorage(key, initValue = null) {
    const [value, setValue] = useState(() => {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initValue;
    });

    useEffect(() => {
        if (value !== null && value !== '') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalstorage;
