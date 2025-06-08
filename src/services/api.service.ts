const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getItems = async<T> (endpoint: string) => {
    const items = await fetch(`${baseUrl}${endpoint}`)
        .then(value => value.json());
    return items as T

}