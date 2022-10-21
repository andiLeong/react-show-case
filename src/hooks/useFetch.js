import { useEffect, useState } from 'react';

function useFetch(url) {
    const [items, setItems] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setItems(() => res);
                setLoading(false);
            });
    }, [url]);

    return [items, isLoading];
}

export default useFetch;
