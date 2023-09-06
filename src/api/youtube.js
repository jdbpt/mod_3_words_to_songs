import axios from "axios";
//resource to fix my error where dotenv was not work in src folder: https://bobbyhadz.com/blog/react-not-reading-env-file-environment-variables
const KEY = process.env.REACT_APP_API_KEY ;
let fetchURL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
    baseURL: fetchURL,
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY
    },
    headers:{
    }
});
