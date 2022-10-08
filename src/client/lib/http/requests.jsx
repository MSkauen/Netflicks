import {fetchJson} from "./http";

const requests = {
    getMovie: async (id) => await fetchJson(`https://api.tvmaze.com/search/shows?q=${id}`),
    getMovieSummary: async (id) => await fetchJson(`https://api.tvmaze.com/shows/${id}`),
    getMovieBackground: async (id) => await fetchJson(`https://api.tvmaze.com/shows/${id}/images`),
    getRandomMovie: async () => await fetchJson("https://api.tvmaze.com/shows").then(
        res => res[Math.floor(Math.random() * res.length - 1)]
    ),
    getAllMovies: async () => await fetchJson("https://api.tvmaze.com/shows")
};

module.exports = {
    requests: requests
}