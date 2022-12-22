import axios from "axios";

const KEY = "AIzaSyD6Q33wNdZOTdQkK-RrNyeLX7AM--aUf_0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
