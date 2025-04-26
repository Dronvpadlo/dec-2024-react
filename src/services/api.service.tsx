import {IUser} from "../models/IUser.ts";
import {CommentsDJUrl, CommentsJPUrl, PostsDJUrl, PostsJPUrl, UsersDJUrl, UsersJPUrl} from "../consts/urls.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComment.ts";
import {IUserDJ} from "../models/IUserDJ.ts";
import {IPostDJ} from "../models/IPostsDJ.ts";
import {ICommentDJ} from "../models/ICommentDJ.ts";

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

const getDJUsers = async ():Promise<IUserDJ[]> => {
    const response = await fetch(UsersDJUrl)
    const items = await response.json()
    return items.users;
}

const getDJPosts = async ():Promise<IPostDJ[]> => {
    const response = await fetch(PostsDJUrl)
    const items = await response.json()
    return items.posts;
}

const getDJComments = async ():Promise<ICommentDJ[]> => {
    const response = await fetch(CommentsDJUrl)
    const items = await response.json()
    return items.comments;
}




export {
    getJPUsers, getJPPosts, getJPComments, getDJUsers, getDJPosts, getDJComments
}