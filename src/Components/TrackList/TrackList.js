import react from 'react';
import Track from '../Track/Track';

function TrackList(props){
    const tracks = props.tracks;
    //console.log("TrackList: type of onAdd: " + (typeof props.onAdd));
    //console.log(tracks);
    return (
        <div className="TrackList">
            {/*<!-- You will add a map method that renders a set of Track components  -->*/}
            {tracks.map( (track) => {
                return <Track 
                    track={track} 
                    onAdd={props.onAdd} 
                    onRemove={props.onRemove} 
                    key={track.id} 
                    isRemoval={props.isRemoval}/>
                })}
        </div>
    )
}
export default TrackList;