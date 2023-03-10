import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    // method: 'GET', we don't need bcoz using axios here
    // url: BASE_URL,
    params: {
      // part: 'snippet', 
    // videoId: 'M7FIvfx5J10', 
    maxResults: 50},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
       const {data} = await axios.get(`${BASE_URL}/${url}`,options); 

       return data;
  }