const baseUrl: string = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: number) => {
            return baseUrl + '/users' + id;
        }
    },
    posts:{
        allPosts: baseUrl + '/posts',
        byId: (id: number) => {
            return baseUrl + '/posts' + id;
        }
    }
}