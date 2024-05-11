import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDQ1ZWM1YTMwZmFkYjQ5NDMxOWIyZTM2ODY1YjZkNiIsInN1YiI6IjY2MDQwNjU3MzUyMGU4MDE3ZWRiYTg5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jr9XJnn38e5TqkC3u1bnV2ON6PTsYm41cMtO0ogklEE";


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};