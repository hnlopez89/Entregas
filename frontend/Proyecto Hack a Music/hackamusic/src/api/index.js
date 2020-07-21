import config from './config.js'


const axios = require('axios').default;
const apiKey = config.apiKey
const BASE_URL = "https://ws.audioscrobbler.com/"

async function getArtists() {
    const URL_GEO = "2.0/?method=geo.gettopartists&country=spain&api_key=" + apiKey + "&format=json";
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getTopTracks() {
    const URL_GEO = "2.0/?method=geo.gettoptracks&country=spain&api_key=" + apiKey + "&format=json";
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getTopTags() {
    const URL_GEO = "2.0/?method=chart.gettoptags&api_key=" + apiKey + "&format=json";
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getArtists,
    getTopTracks,
    getTopTags,
}