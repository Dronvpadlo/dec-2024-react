import React, {useEffect, useState} from 'react';

const UseFetch = <T, >(url: string) => {

    const [items, setItems] = useState<T[]>([])
    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => setItems(value.products))
    }, []);

    return items
};

export default UseFetch;