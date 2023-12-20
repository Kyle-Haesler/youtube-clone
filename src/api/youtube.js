import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDH05C3IMb7fnTuHyZ0KUDSwhErHIKrvx0",
  },
});
