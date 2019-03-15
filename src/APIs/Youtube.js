import Axios from 'axios';

const KEY = 'AIzaSyC9FPB49EOWiL4YlTcKxR5nMbdyr8sG4U8';

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        key: KEY
    }
})