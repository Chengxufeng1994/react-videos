import axios from 'axios';

const KEY = 'AIzaSyCGZIHsw-tE_U8Lyt5gqxpNc-ECEPifzZY'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})