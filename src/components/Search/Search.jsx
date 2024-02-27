import {useState} from 'react';
import './Search.css';

const Search = ({setSearchData}) => {
    /* State for search */
    const [search, setSearch] = useState("");
    /* Handle search to filter trips */
    const handleSearch = (e) => {
        setSearchData(e.target.value);
        setSearch(e.target.value);
    }
    return (<div className={"search"}>
        <input className={"search__input"}
               type="text"
               value={search}
               onChange={handleSearch}
               placeholder={"Search your trip"}/>
    </div>);
};

export default Search;