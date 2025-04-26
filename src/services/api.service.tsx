import {IUser} from "../models/IUser.ts";
import {CommentsJPUrl, PostsJPUrl, UsersJPUrl} from "../consts/urls.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComment.ts";

const getJPUsers = async ():Promise<IUser[]> => {
    return await fetch(UsersJPUrl)
        .then(value => value.json())
}
const getJPPosts = async ():Promise<IPost[]> => {
    return await fetch(PostsJPUrl)
        .then(value => value.json())
}

const getJPComments = async ():Promise<IComment[]> => {
    return await fetch(CommentsJPUrl)
        .then(value => value.json())
}





export {
    getJPUsers, getJPPosts, getJPComments
}