import React, {useEffect} from 'react';

const LoginPage = () => {
    useEffect(() => {
        login({
            'username': 'emilys',
            'password': 'emilyspass',
            'expiresInMins': 1
        })
    }, []);
    return (
        <div>
            Login Page
        </div>
    );
};

export default LoginPage;