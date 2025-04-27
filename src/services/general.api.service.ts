const baseUrl = "https://dummyjson.com"

export const getAll = async <T,> (endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`).then(response => response.json());
}

