import * as React from "react";
import {FC} from "react";

type MyComponentPropType = {
    title: string
}

const TitleComponent: FC<MyComponentPropType> = ({title}) => {
    return(
        <div>{title}</div>
    )
}


export default TitleComponent;