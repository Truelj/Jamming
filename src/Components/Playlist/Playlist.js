import react from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

/*
This playlist is a user's custom playlist 
*/
function Playlist(props){
    const tracks = props.playlistTracks;
    //handler
    const handleNameChange = (event) =>{
        props.onNameChange(event.target.value);
    }
    return (
        <div className="Playlist">
            <input defaultValue={props.playlistName} onChange={handleNameChange} />
            <TrackList tracks={tracks} isRemoval={true} onRemove={props.onRemove}/>
            {/* Add a TrackList component --> */}
            <button className="Playlist-save" onClick={props.onSave} >SAVE TO SPOTIFY</button>
        </div>
    )
}
export default Playlist;