import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {urls} from "../constants/urls.ts";


const getUsers = async ():Promise<IUser[]> =>{

    return await fetch( urls.users.allUsers)
        .then(value => value.json())
}
const getPosts = async ():Promise<IPost[]> =>{

    return await fetch( urls.posts.allPosts)
        .then(value => value.json())
}

const getPostsByUserId = async (id: number):Promise<IPost[]> => {
    return await fetch(urls.posts.userPostsById(id))
        .then(value => value.json())
}


export {
    getUsers, getPosts, getPostsByUserId
}
