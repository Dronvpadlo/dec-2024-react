import React from 'react';
import UserPostsComponent from "../components/userComponents/UserPostsComponent.tsx";
import {useParams} from "react-router-dom";

const UserPostsPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {userId && <UserPostsComponent userId={userId}/>}
        </div>
    );
};

export default UserPostsPage;