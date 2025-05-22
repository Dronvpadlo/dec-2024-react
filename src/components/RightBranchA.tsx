import React, {useContext} from 'react';
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA = () => {
    const {currentValue, increment} = useContext(MyContext)
    return (
        <div>
            Right Branch A

            <button onClick={() => {
                increment (currentValue)
            }}>Increment value in LBA</button>
        </div>
    );
};

export default RightBranchA;