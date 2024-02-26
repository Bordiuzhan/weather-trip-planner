import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className={"search"}>
            <input className={"search__input"}
                   type="text"
                   placeholder={"Search your trip"}/>
        </div>
    );
};

export default Search;