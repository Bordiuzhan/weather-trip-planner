import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className={"search"}>
            <input className={"search__input"} type="text" placeholder={"Search"} />
        </div>
    );
};

export default Search;