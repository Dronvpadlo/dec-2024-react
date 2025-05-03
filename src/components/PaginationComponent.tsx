import React from 'react';
import {useSearchParams} from "react-router";

const PaginationComponent = () => {

    const [query, setQuery]= useSearchParams({page: '2'})
    return (
        <div>
            Pagination content
            <button onClick={() => {
                const pageExist = query.get('page');
                if(pageExist){
                    let currentPage = +pageExist;
                    setQuery({page: (--currentPage).toString()})
                }
            }
            }>prev</button>
            <button onClick={() => {
                const pageExist = query.get('page');
                if(pageExist){
                    let currentPage = +pageExist;
                    setQuery({page: (++currentPage).toString()})
                }
            }
            }>next</button>
            </div>
    );
};

export default PaginationComponent;