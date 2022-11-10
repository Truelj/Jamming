import react from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults(props){
    //fetch the results through http request.
    //request parameter would be passed as a prop 
    const searchResults = props.searchResults;
    return (
        <div className="SearchResults">
            <h2>Results</h2>
                 {/*<!-- Add a TrackList component -->*/}
            <TrackList tracks={searchResults} onAdd={props.onAdd} isRemoval={false}></TrackList>
        </div>
    )
}
export default SearchResults ;