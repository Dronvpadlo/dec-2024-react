import React from 'react';

const PostCarComponent = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder={'brand'}/> <br/>
                <input type="number" placeholder={'price'}/> <br/>
                <input type="number" placeholder={'year'}/> <br/>
                <button>Post</button>
            </form>
        </div>
    );
};

export default PostCarComponent;