import * as React from "react";
import {FC} from "react";
import styles from "./MyComponent.module.css"
import {ICourse} from "../models/ICourse.ts";


type MyComponentPropType = {
    course: ICourse
}

const CourseComponent: FC<MyComponentPropType> = ({course}) => {
    return(
        <div className={styles.target}>
            Course: {course.title} <br/>
            Months: {course.monthDuration} <br/>
            Hours: {course.hourDuration} <br/>
            Modules:
            <ul>{course.modules.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
        </div>
    )
}


export default CourseComponent;