import React, {useContext} from 'react';
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchA = () => {
    const {currentValue} = useContext(MyContext)
    return (
        <div>
            <p>Counter value is {currentValue}</p>
        </div>
    );
};

export default LeftBranchA;