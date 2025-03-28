import * as React from "react";
import {FC} from "react";
import {IBook} from "../models/IBook.ts";

type MyComponentPropType = {
    book: IBook
}

const MyBook: FC<MyComponentPropType> = ({book}) => {
    return(
        <div>author: {book.author},<br/> title: {book.title}<br/> rate: {book.rate}</div>
    )
}


export default MyBook;