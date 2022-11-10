import fetch from 'node-fetch';

/*
fetch('https://itunes.apple.com/search?term=taylor+swift&limit=1&media=music')
    .then((response)=>{response.json()})
    .then((response)=>{console.log(response); return response.results[0];})
    .then((result)=>{
        const track = result.trackName;
        const artist = result.artistName;
        const album = result.collectionName;
        console.log(`track: ${track} | artist: ${artist} | album: ${album}`);
    });
*/

fetch('https://itunes.apple.com/search?term=taylor+swift&limit=1&media=music', {
    headers: {
        method: 'GET'
        
    }
})
    .then((response)=> (response.json()))
    .then((response)=>(console.log(response)));
