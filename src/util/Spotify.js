
/* test:
const exampleURLOne ="https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123";
const exampleURLTwo ="https://example.com/callback";

const access_token = exampleURLTwo.match(/access_token=([^&]*)/);//output: null
const expires_in = exampleURLTwo.match(/expires_in=([^&]*)/);//output:null

console.log(access_token);
console.log(expires_in);
*/

import { scryRenderedComponentsWithType } from "react-dom/test-utils";


const CLIENT_ID = "8755548fa9634bebaf203c2a257be0b2";
const REDIRECT_URI = "http://localhost:3000/";
let accessToken = "";

export const Spotify = {
    
    getAccessToken(){
   
       
    },

    async search(term){}
        

};