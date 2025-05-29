import React, {useContext} from 'react';
import {useSearchParams} from "react-router";
import {ChangeThemeContext} from "../../context/ThemeContext.tsx";
import styles from './PaginationComponent.module.css'

const PaginationComponent = () => {

    const {theme} = useContext(ChangeThemeContext)

    const [query, setQuery] = useSearchParams({page:'1'});
    return (
        <div className={styles[theme]}>
            <div className={styles.section}>
                <div className={styles.margin}>
                    <button onClick={() => {
                        const page = query.get('page');
                        if (page && page > 1) {
                            let currentPage = +page;
                            setQuery({page: (--currentPage).toString()})
                        }
                    }}>Prev. Page
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        const page = query.get('page');
                        if (page) {
                            let currentPage = +page;
                            setQuery({page: (++currentPage).toString()})
                        }
                    }}>Next. Page
                    </button>
                </div>
        </div>


</div>
)
    ;
};

export default PaginationComponent;