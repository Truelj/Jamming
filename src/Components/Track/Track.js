import react from 'react';
import './Track.css';

function Track(props){
    const track = props.track;
    const isRemoval = props.isRemoval;
    //console.log("Track's property: isRemoval: " + isRemoval);
    //needs to be fixed; now is unused;
    const renderAction = () => {
        return props.isRemoval ? "-" : "+";
    }
    const addTrack = () =>{
        //console.log("add track to the playlist");
        props.onAdd(track);
    };
    
    const removeTrack = () =>{
        //console.log("remove track to the playlist");
        props.onRemove(track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>track name:{track.name} </h3>
                <p>artist:{track.artist} | album {track.album}</p>
            </div>
            <button className="Track-action" onClick={isRemoval? removeTrack : addTrack}> {isRemoval ? "-":"+"}</button>
        </div>
    )
}

export default Track;