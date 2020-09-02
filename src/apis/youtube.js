import axios from "axios";

const KEY = "AIzaSyAWVEpOGWrk0emS7RzYHZ6OgGkRq0y6wFo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
