import * as React from "react";
import {FC} from "react";
import styles from "./MyComponent.module.css"

type MyComponentPropType = {
    title: string
}

const TitleComponent: FC<MyComponentPropType> = ({title}) => {
    return(
        <div className={styles.target}>{title}</div>
    )
}


export default TitleComponent;