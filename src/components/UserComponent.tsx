import React, {memo} from 'react';

const UserComponent = memo(() => {
    console.log('user')
    return (
        <div>
            User Component
        </div>
    );
});

export default UserComponent;