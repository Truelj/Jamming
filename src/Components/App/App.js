//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'; 
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import {useState, useEffect} from 'react';
import { Spotify } from '../../util/Spotify';

const playlistTracksDefault = [
  {name: "Eraser", artist:"Ed Sheeran", album: "Deluxe", id:6},
  {name: "Shape of You", artist:"Ed Sheeran", album: "Deluxe", id:7},
  {name: "Style", artist:"Taylor Swift", album: "1989", id:3},
  {name: "Out Of the Woods", artist:"Taylor Swift", album: "1989", id:4}
];
const playlistNameDefault = "My playlist";

const searchResultsDefault = [
  {name: "Welcome To New York", artist:"Taylor Swift", album: "1989", id:1},
  {name: "Blank Space", artist:"Taylor Swift", album: "1989", id:2},
  {name: "Style", artist:"Taylor Swift", album: "1989", id:3},
  {name: "Out Of the Woods", artist:"Taylor Swift", album: "1989", id:4},
  {name: "All You Had To Do Was Stay", artist:"Taylor Swift", album: "1989", id:5}
];

function App(props){
  //set initial value for searchResults
  const [searchResults, setSearchResults] = useState(searchResultsDefault);
  const [playlistTracks, setPlaylistTracks] = useState(playlistTracksDefault);
  const [playlistName, setPlaylistName] = useState(playlistNameDefault);


  useEffect(()=>{
    Spotify.getAccessToken();
  },[]);

  //event handlers: addTrack, removeTrack, updatePlaylistName
  const addTrack = (track)=>{
    //check if the current song is in the playlistTracks 
    const inPlaylist = playlistTracks.filter((plTrack)=>{return plTrack.id === track.id});
    if(!inPlaylist.length){
      //add the current song to the playlistTracks
      setPlaylistTracks((prev)=>{
        return [...prev, track];
      });

    }//end of if
  };
  
  const removeTrack = (track) =>{
    setPlaylistTracks((prev) => {
      const newTrack = prev.filter((plTrack) => {return plTrack.id !== track.id});
      //console.log(newTrack);
      return newTrack;
    });
  };

  const updatePlaylistName = (name) =>{
    setPlaylistName(name);
  } 

  const savePlaylist = () => {
    //generate an array of uri values from the playlistTracks
    let trackURIs = [];
    for(let track of playlistTracks){
      trackURIs.push(track.id);
    }
    //console.log(trackURIs);
    //hookup to Spotify API
  }
  
  const search = (searchTerm) =>{
    console.log(searchTerm);
    //later it will be hooked up to the Spotify API
    //Spotify.search(searchTerm);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch ={search} />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName}
          onSave={savePlaylist} />
      </div>
    </div>
  </div>
  );
}
export default App;

////<img src={logo} className="App-logo" alt="logo" />