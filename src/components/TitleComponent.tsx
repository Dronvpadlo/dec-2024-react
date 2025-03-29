import * as React from "react";
import {FC} from "react";
import styles from "./MyComponent.module.css"
import {ICourse} from "../models/ICourse.ts";

type MyComponentPropType = {
    course: ICourse
}

const TitleComponent: FC<MyComponentPropType> = ({course}) => {
    return(
        <div className={styles.target}>Course: {course.title} Timeline: {course.monthDuration}</div>
    )
}


export default TitleComponent;