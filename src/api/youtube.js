import axios from 'axios';

const KEY = "AIzaSyALNn6KKgC97Roes4KUzAMX69aawD5NuYE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});