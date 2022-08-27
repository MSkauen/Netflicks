import {fetchJson} from "./http";

const requests = {
    getMovie: async () => await fetchJson(""),
    getAllMovies: async () => await fetchJson("http://api.tvmaze.com/shows"),
    getActionMovies: async () => await fetchJson(""),
    getComedyMovies: async () => await fetchJson(""),
    getCrimeMovies: async () => await fetchJson(""),
    getDramaMovies: async () => await fetchJson(""),
    getHorrorMovies: async () => await fetchJson(""),
    getRomanceMovies: async () => await fetchJson(""),
    getScienceFictionMovies: async () => await fetchJson(""),
    getThrillerMovies: async () => await fetchJson(""),
};

export default requests;