import React, {useMemo} from 'react';
import LeftBranchA from "./LeftBranchA.tsx";

const LeftBranch = () => {

    const memo = useMemo(() => {
        for (let i = 0; i < 100; i++) {
            console.log(i)

        }
        return null
    }, []);
    return (
        <div>
            Left Branch
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;