import react from 'react';
import './SearchBar.css';
import {useState} from 'react';

function SearchBar(props){
    const [term, setTerm] = useState("Enter A Song, Album, or Artist");
    
    const search=()=>{
        props.onSearch(term);
    }
    const handleTermChange=(event)=>{
        setTerm(event.target.value);
    }
    return (
        <div className="SearchBar">
            <input value={term} onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchBar;