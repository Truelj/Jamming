export const search = async (term) =>{
    const baseURL = 'https://itunes.apple.com';
    const endpoint = '/search';
    const urlEncodedTerm = replaceSpace(term);
    const parameters = `?term=${urlEncodedTerm}&limit=10&mediaType=music`;
    const fetchURL = `${baseURL}${endpoint}${parameters}`;
    
    try{
        const response = await fetch(fetchURL);
        if(response.ok){
            const jsonResponse = await response.json();
            const results = jsonResponse.results;
            console.log(results);
            if(results.length === 0){
                return results;//return an empty array
            }else{
                return results.map((result)=>{
                    return {
                        id: result.trackId,
                        name: result.trackName, 
                        artist: result.artistName,
                        album: result.collectionName
                    }
                });
            }
        }else{
            console.log('response is not successful');
            console.log(`response status: ${response.status}`);
        }
    }catch(err){
        console.log('asynchronous error thrown by await: ');
        console.log(err);
    }
};

//helper functions
function replaceSpace(term){
    //replace space in term with '+'. A url encoded text string should be returned.
    return term.replace(' ', '+');
}
/* testing on the  functions
console.log(replaceSpace('blank space'));
*/