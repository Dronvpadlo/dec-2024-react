import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string) => {
    const [items, setItems] = useState<T>([])

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => setItems(value))

    }, []);
    return items
}