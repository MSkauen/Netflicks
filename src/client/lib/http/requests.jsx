import {fetchJson} from "./http";

const requests = {
    getMovie: async () => await fetchJson(""),
    getMovieBackground: async (id) => await fetchJson(`https://api.tvmaze.com/shows/${id}/images`),
    getRandomMovie: async () => await fetchJson("http://api.tvmaze.com/shows").then(
        res => res[Math.floor(Math.random() * res.length - 1)]
    ),
    getAllMovies: async () => await fetchJson("http://api.tvmaze.com/shows"),
    getActionMovies: async () => await fetchJson("http://api.tvmaze.com/shows"),
    getComedyMovies: async () => await fetchJson(""),
    getCrimeMovies: async () => await fetchJson(""),
    getDramaMovies: async () => await fetchJson(""),
    getHorrorMovies: async () => await fetchJson(""),
    getRomanceMovies: async () => await fetchJson(""),
    getScienceFictionMovies: async () => await fetchJson(""),
    getThrillerMovies: async () => await fetchJson(""),
};

module.exports = {
    requests: requests
}